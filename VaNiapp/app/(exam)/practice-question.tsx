import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import * as Haptics from 'expo-haptics';

import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';
import { RootState } from '../../src/store';
import { buildPracticeExam } from '../../src/data/questions';
import { SUBJECT_META } from '../../src/constants/subjects';
import {
  NeetSubjectId,
  NEET_SCORING,
  PracticeExamSession,
  UserAnswer,
  Question,
} from '../../src/types';
import {
  startPracticeExam,
  updateAnswer,
  completePracticeExam,
  clearCurrentSession,
} from '../../src/store/slices/practiceSlice';
import { calculateNeetScore, calculateSubjectScores } from '../../src/store/slices/practiceSlice';

const SUBJECTS: { id: NeetSubjectId; emoji: string; short: string }[] = [
  { id: 'physics', emoji: '\u269B\uFE0F', short: 'PHY' },
  { id: 'chemistry', emoji: '\uD83E\uDDEA', short: 'CHE' },
  { id: 'botany', emoji: '\uD83C\uDF3F', short: 'BOT' },
  { id: 'zoology', emoji: '\uD83E\uDD8B', short: 'ZOO' },
];

interface ExamQuestion extends Question {
  section: 'A' | 'B';
  indexInSection: number;
}

export default function PracticeQuestionScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.auth.user?.language ?? 'en');
  const scrollRef = useRef<ScrollView>(null);

  // Build exam once
  const exam = useMemo(() => buildPracticeExam(), []);

  // Flatten into structured question list
  const allQuestions = useMemo(() => {
    const qs: ExamQuestion[] = [];
    for (const subjectId of ['physics', 'chemistry', 'botany', 'zoology'] as NeetSubjectId[]) {
      const { sectionA, sectionB } = exam[subjectId];
      sectionA.forEach((q, i) => qs.push({ ...q, section: 'A', indexInSection: i }));
      sectionB.forEach((q, i) => qs.push({ ...q, section: 'B', indexInSection: i }));
    }
    return qs;
  }, [exam]);

  // Answers map: questionId -> selectedOptionId
  const [answers, setAnswers] = useState<Record<string, string | null>>({});
  const [marked, setMarked] = useState<Record<string, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSubject, setActiveSubject] = useState<NeetSubjectId>('physics');
  const [activeSection, setActiveSection] = useState<'A' | 'B'>('A');
  const [timeLeftMs, setTimeLeftMs] = useState(NEET_SCORING.timeLimitMs);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialize session
  useEffect(() => {
    const session: PracticeExamSession = {
      id: `pe-${Date.now()}`,
      mode: 'practice',
      startedAt: new Date().toISOString(),
      completedAt: null,
      answers: [],
      totalQuestions: allQuestions.length,
      timeLimitMs: NEET_SCORING.timeLimitMs,
      score: null,
      maxMarks: NEET_SCORING.maxMarks,
      subjectScores: null,
    };
    dispatch(startPracticeExam(session));

    // Start timer
    timerRef.current = setInterval(() => {
      setTimeLeftMs((prev) => {
        if (prev <= 1000) {
          // Time's up — auto-submit
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Auto-submit when timer reaches 0
  useEffect(() => {
    if (timeLeftMs === 0) {
      handleSubmit(true);
    }
  }, [timeLeftMs]);

  // Get questions for current subject + section
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(
      (q) => q.subjectId === activeSubject && q.section === activeSection
    );
  }, [allQuestions, activeSubject, activeSection]);

  const question = allQuestions[currentIndex];

  // Navigate to a specific question in subject/section
  const navigateToQuestion = useCallback(
    (subjectId: NeetSubjectId, section: 'A' | 'B', indexInSection: number) => {
      const idx = allQuestions.findIndex(
        (q) => q.subjectId === subjectId && q.section === section && q.indexInSection === indexInSection
      );
      if (idx >= 0) {
        setCurrentIndex(idx);
        setActiveSubject(subjectId);
        setActiveSection(section);
        scrollRef.current?.scrollTo({ y: 0, animated: false });
      }
    },
    [allQuestions]
  );

  // When subject/section tab changes, jump to first question there
  const handleSubjectChange = useCallback(
    (subjectId: NeetSubjectId) => {
      setActiveSubject(subjectId);
      navigateToQuestion(subjectId, activeSection, 0);
    },
    [activeSection, navigateToQuestion]
  );

  const handleSectionChange = useCallback(
    (section: 'A' | 'B') => {
      setActiveSection(section);
      navigateToQuestion(activeSubject, section, 0);
    },
    [activeSubject, navigateToQuestion]
  );

  const handleSelectOption = useCallback(
    (optionId: string) => {
      if (!question) return;
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      const newAnswers = { ...answers, [question.id]: optionId };
      setAnswers(newAnswers);

      const answer: UserAnswer = {
        questionId: question.id,
        selectedOptionId: optionId,
        isMarked: marked[question.id] ?? false,
        eliminatedOptionIds: [],
        timeSpentMs: 0,
      };
      dispatch(updateAnswer(answer));
    },
    [question, answers, marked, dispatch]
  );

  const handleClearAnswer = useCallback(() => {
    if (!question) return;
    const newAnswers = { ...answers };
    delete newAnswers[question.id];
    setAnswers(newAnswers);

    const answer: UserAnswer = {
      questionId: question.id,
      selectedOptionId: null,
      isMarked: marked[question.id] ?? false,
      eliminatedOptionIds: [],
      timeSpentMs: 0,
    };
    dispatch(updateAnswer(answer));
  }, [question, answers, marked, dispatch]);

  const handleToggleMark = useCallback(() => {
    if (!question) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setMarked((prev) => ({ ...prev, [question.id]: !prev[question.id] }));
  }, [question]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      const prev = allQuestions[currentIndex - 1];
      setCurrentIndex(currentIndex - 1);
      setActiveSubject(prev.subjectId);
      setActiveSection(prev.section);
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }
  }, [currentIndex, allQuestions]);

  const handleNext = useCallback(() => {
    if (currentIndex < allQuestions.length - 1) {
      const next = allQuestions[currentIndex + 1];
      setCurrentIndex(currentIndex + 1);
      setActiveSubject(next.subjectId);
      setActiveSection(next.section);
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }
  }, [currentIndex, allQuestions]);

  const handleSubmit = useCallback(
    (autoSubmit = false) => {
      const doSubmit = () => {
        if (timerRef.current) clearInterval(timerRef.current);

        // Build maps for scoring
        const correctAnswerMap: Record<string, string> = {};
        const questionSubjectMap: Record<string, NeetSubjectId> = {};
        allQuestions.forEach((q) => {
          correctAnswerMap[q.id] = q.correctOptionId;
          questionSubjectMap[q.id] = q.subjectId;
        });

        // Build UserAnswer array for all questions (scored ones only)
        // Section A: all 35, Section B: first 10 answered
        const scoredAnswers: UserAnswer[] = [];
        for (const subjectId of ['physics', 'chemistry', 'botany', 'zoology'] as NeetSubjectId[]) {
          // Section A — all mandatory
          const secA = allQuestions.filter((q) => q.subjectId === subjectId && q.section === 'A');
          secA.forEach((q) => {
            scoredAnswers.push({
              questionId: q.id,
              selectedOptionId: answers[q.id] ?? null,
              isMarked: false,
              eliminatedOptionIds: [],
              timeSpentMs: 0,
            });
          });

          // Section B — only first 10 answered (or first 10 if < 10 answered)
          const secB = allQuestions.filter((q) => q.subjectId === subjectId && q.section === 'B');
          const answeredB = secB.filter((q) => answers[q.id]);
          const unansweredB = secB.filter((q) => !answers[q.id]);
          const scoredB = [
            ...answeredB.slice(0, NEET_SCORING.sectionBAttempt),
            ...unansweredB.slice(0, Math.max(0, NEET_SCORING.sectionBAttempt - answeredB.length)),
          ];
          scoredB.forEach((q) => {
            scoredAnswers.push({
              questionId: q.id,
              selectedOptionId: answers[q.id] ?? null,
              isMarked: false,
              eliminatedOptionIds: [],
              timeSpentMs: 0,
            });
          });
        }

        const totalResult = calculateNeetScore(scoredAnswers, correctAnswerMap);
        const subjectScores = calculateSubjectScores(scoredAnswers, correctAnswerMap, questionSubjectMap);

        dispatch(
          completePracticeExam({
            score: totalResult.score,
            subjectScores,
            completedAt: new Date().toISOString(),
          })
        );

        router.replace({
          pathname: '/(exam)/practice-results',
          params: {
            score: String(totalResult.score),
            correct: String(totalResult.correct),
            wrong: String(totalResult.wrong),
            unanswered: String(totalResult.unanswered),
          },
        });
      };

      if (autoSubmit) {
        doSubmit();
        return;
      }

      const answeredCount = Object.keys(answers).length;
      Alert.alert(
        'Submit Exam?',
        `You have answered ${answeredCount} out of ${allQuestions.length} questions. Once submitted, you cannot change your answers.`,
        [
          { text: 'Continue Exam', style: 'cancel' },
          { text: 'Submit', style: 'destructive', onPress: doSubmit },
        ]
      );
    },
    [answers, allQuestions, dispatch, router]
  );

  // Format timer
  const formatTime = (ms: number) => {
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const timerColor = timeLeftMs < 600000 ? '#EF4444' : timeLeftMs < 1800000 ? '#F59E0B' : colors.text;
  const answeredCount = Object.keys(answers).length;

  if (!question) return null;

  const isAnswered = answers[question.id] !== undefined;
  const isMarked = marked[question.id] ?? false;

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {/* Timer Bar */}
        <View style={[styles.timerBar, { borderBottomColor: colors.surfaceBorder }]}>
          <Pressable onPress={() => handleSubmit()} style={styles.submitBtnSmall}>
            <Text style={[styles.submitBtnText, { color: '#EF4444' }]}>Submit</Text>
          </Pressable>
          <View style={styles.timerCenter}>
            <Text style={[styles.timerText, { color: timerColor }]}>{formatTime(timeLeftMs)}</Text>
          </View>
          <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>
            {answeredCount}/{allQuestions.length}
          </Text>
        </View>

        {/* Subject Tabs */}
        <View style={[styles.subjectTabs, { borderBottomColor: colors.surfaceBorder }]}>
          {SUBJECTS.map((s) => {
            const isActive = s.id === activeSubject;
            const subjectQs = allQuestions.filter((q) => q.subjectId === s.id);
            const subjectAnswered = subjectQs.filter((q) => answers[q.id]).length;
            return (
              <Pressable
                key={s.id}
                onPress={() => handleSubjectChange(s.id)}
                style={[
                  styles.subjectTab,
                  isActive && { borderBottomWidth: 3, borderBottomColor: SUBJECT_META[s.id].color },
                ]}
              >
                <Text style={[styles.subjectTabText, { color: isActive ? colors.text : colors.textTertiary }]}>
                  {s.emoji} {s.short}
                </Text>
                <Text style={[styles.subjectTabCount, { color: isActive ? SUBJECT_META[s.id].color : colors.textTertiary }]}>
                  {subjectAnswered}/{subjectQs.length}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Section Tabs */}
        <View style={styles.sectionTabs}>
          {(['A', 'B'] as const).map((sec) => {
            const isActive = sec === activeSection;
            const secQs = allQuestions.filter((q) => q.subjectId === activeSubject && q.section === sec);
            const secLabel = sec === 'A'
              ? `Section A (${NEET_SCORING.sectionA} Qs)`
              : `Section B (${NEET_SCORING.sectionB} Qs — attempt ${NEET_SCORING.sectionBAttempt})`;
            return (
              <Pressable
                key={sec}
                onPress={() => handleSectionChange(sec)}
                style={[
                  styles.sectionTab,
                  {
                    backgroundColor: isActive ? colors.primary + '15' : 'transparent',
                    borderColor: isActive ? colors.primary : colors.surfaceBorder,
                  },
                ]}
              >
                <Text
                  style={[
                    Typography.bodySm,
                    { color: isActive ? colors.primary : colors.textSecondary, fontFamily: 'PlusJakartaSans_600SemiBold' },
                  ]}
                >
                  {secLabel}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Question Grid (mini nav) */}
        <View style={[styles.gridRow, { borderBottomColor: colors.surfaceBorder }]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.gridScroll}>
            {filteredQuestions.map((q) => {
              const isCurrent = q.id === question.id;
              const qAnswered = answers[q.id] !== undefined;
              const qMarked = marked[q.id];
              const bg = isCurrent
                ? colors.primary
                : qMarked
                  ? '#F59E0B'
                  : qAnswered
                    ? '#22C55E'
                    : colors.surfaceBorder;
              const textColor = isCurrent || qAnswered || qMarked ? '#FFF' : colors.textSecondary;
              return (
                <Pressable
                  key={q.id}
                  onPress={() => navigateToQuestion(q.subjectId, q.section, q.indexInSection)}
                  style={[styles.gridDot, { backgroundColor: bg }]}
                >
                  <Text style={[styles.gridDotText, { color: textColor }]}>{q.indexInSection + 1}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Question Content */}
        <ScrollView
          ref={scrollRef}
          style={styles.questionScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.questionContent}
        >
          {/* Question Number + Difficulty */}
          <View style={styles.qHeader}>
            <Text style={[Typography.label, { color: colors.textSecondary }]}>
              Q{question.indexInSection + 1} of{' '}
              {activeSection === 'A' ? NEET_SCORING.sectionA : NEET_SCORING.sectionB}
            </Text>
            <View
              style={[
                styles.diffBadge,
                {
                  backgroundColor:
                    question.difficulty === 'easy'
                      ? '#22C55E20'
                      : question.difficulty === 'medium'
                        ? '#F59E0B20'
                        : '#EF444420',
                },
              ]}
            >
              <Text
                style={[
                  styles.diffText,
                  {
                    color:
                      question.difficulty === 'easy'
                        ? '#22C55E'
                        : question.difficulty === 'medium'
                          ? '#F59E0B'
                          : '#EF4444',
                  },
                ]}
              >
                {question.difficulty.toUpperCase()}
              </Text>
            </View>
          </View>

          {/* Question Text */}
          <View style={[styles.questionBox, { backgroundColor: colors.surface, borderColor: colors.surfaceBorder }]}>
            <Text style={[Typography.body, { color: colors.text, lineHeight: 24 }]}>
              {language === 'te' ? question.textTe : question.text}
            </Text>
          </View>

          {/* Options */}
          <View style={styles.optionsList}>
            {question.options.map((opt, idx) => {
              const label = String.fromCharCode(65 + idx);
              const isSelected = answers[question.id] === opt.id;
              return (
                <Pressable
                  key={opt.id}
                  onPress={() => handleSelectOption(opt.id)}
                  style={[
                    styles.optionRow,
                    {
                      backgroundColor: isSelected ? colors.primary + '12' : colors.surface,
                      borderColor: isSelected ? colors.primary : colors.surfaceBorder,
                      borderWidth: isSelected ? 2 : 1,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.optionLabel,
                      {
                        backgroundColor: isSelected ? colors.primary : colors.surfaceBorder + '80',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.optionLabelText,
                        { color: isSelected ? '#FFF' : colors.textSecondary },
                      ]}
                    >
                      {label}
                    </Text>
                  </View>
                  <Text style={[Typography.body, { color: colors.text, flex: 1 }]}>
                    {language === 'te' ? opt.textTe : opt.text}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            <Pressable
              onPress={handleClearAnswer}
              disabled={!isAnswered}
              style={[styles.actionBtn, { borderColor: colors.surfaceBorder, opacity: isAnswered ? 1 : 0.4 }]}
            >
              <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Clear</Text>
            </Pressable>
            <Pressable
              onPress={handleToggleMark}
              style={[
                styles.actionBtn,
                {
                  borderColor: isMarked ? '#F59E0B' : colors.surfaceBorder,
                  backgroundColor: isMarked ? '#F59E0B15' : 'transparent',
                },
              ]}
            >
              <Text style={[Typography.bodySm, { color: isMarked ? '#F59E0B' : colors.textSecondary }]}>
                {isMarked ? 'Marked' : 'Mark for Review'}
              </Text>
            </Pressable>
          </View>
        </ScrollView>

        {/* Bottom Nav */}
        <View style={[styles.bottomNav, { borderTopColor: colors.surfaceBorder, backgroundColor: colors.background }]}>
          <Pressable
            onPress={handlePrev}
            disabled={currentIndex === 0}
            hitSlop={{ top: 12, bottom: 12, left: 16, right: 16 }}
            style={[styles.navBtn, { opacity: currentIndex === 0 ? 0.3 : 1 }]}
          >
            <Text style={[styles.navBtnText, { color: colors.primary }]}>{'< Prev'}</Text>
          </Pressable>
          <Pressable onPress={() => handleSubmit()} style={styles.submitBtn}>
            <Text style={[Typography.button, { color: '#FFF' }]}>Submit Exam</Text>
          </Pressable>
          <Pressable
            onPress={handleNext}
            disabled={currentIndex === allQuestions.length - 1}
            hitSlop={{ top: 12, bottom: 12, left: 16, right: 16 }}
            style={[styles.navBtn, { opacity: currentIndex === allQuestions.length - 1 ? 0.3 : 1 }]}
          >
            <Text style={[styles.navBtnText, { color: colors.primary }]}>{'Next >'}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </DotGridBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
  },
  submitBtnSmall: {
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  submitBtnText: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 13,
  },
  timerCenter: {
    alignItems: 'center',
  },
  timerText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 20,
    letterSpacing: 1,
  },
  subjectTabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  subjectTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    gap: 2,
  },
  subjectTabText: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 12,
  },
  subjectTabCount: {
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 10,
  },
  sectionTabs: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    gap: Spacing.sm,
  },
  sectionTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
  },
  gridRow: {
    borderBottomWidth: 1,
    paddingVertical: Spacing.sm,
  },
  gridScroll: {
    paddingHorizontal: Spacing.md,
    gap: 6,
  },
  gridDot: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridDotText: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 11,
  },
  questionScroll: {
    flex: 1,
  },
  questionContent: {
    padding: Spacing.lg,
    paddingBottom: 30,
  },
  qHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  diffBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
  },
  diffText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 10,
    letterSpacing: 0.5,
  },
  questionBox: {
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    marginBottom: Spacing.lg,
  },
  optionsList: {
    gap: Spacing.md,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    gap: Spacing.md,
  },
  optionLabel: {
    width: 30,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionLabelText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 13,
  },
  actionRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.lg,
  },
  actionBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderWidth: 1,
    borderRadius: BorderRadius.md,
  },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    borderTopWidth: 1,
  },
  navBtn: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    minWidth: 80,
    alignItems: 'center',
  },
  navBtnText: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 15,
  },
  submitBtn: {
    backgroundColor: '#EF4444',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.lg,
  },
});
