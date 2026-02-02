import React, { useState, useMemo, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import * as Haptics from 'expo-haptics';

import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { PuffyButton } from '../../src/components/ui/PuffyButton';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius, Shadows } from '../../src/constants/theme';
import { RootState } from '../../src/store';
import { getQuestionsByChapter } from '../../src/data/questions';
import { getChapterById } from '../../src/data/chapters';
import { SUBJECT_META } from '../../src/constants/subjects';
import { Question, NeetSubjectId, ChapterExamSession, UserAnswer } from '../../src/types';
import { startChapterExam, updateAnswer, completeChapterExam } from '../../src/store/slices/practiceSlice';

const DIFFICULTY_COLORS = {
  easy: '#22C55E',
  medium: '#F59E0B',
  hard: '#EF4444',
};

export default function ChapterQuestionScreen() {
  const { colors, mode } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const { chapterId } = useLocalSearchParams<{ chapterId: string }>();
  const language = useSelector((state: RootState) => state.auth.user?.language ?? 'en');

  const chapter = chapterId ? getChapterById(chapterId) : null;
  const questions = useMemo(() => (chapterId ? getQuestionsByChapter(chapterId) : []), [chapterId]);
  const subjectMeta = chapter ? SUBJECT_META[chapter.subjectId] : null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showElimination, setShowElimination] = useState(false);
  const scrollRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const question = questions[currentIndex];
  const isCorrect = selectedOptionId === question?.correctOptionId;
  const correctCount = Object.entries(answers).filter(
    ([qId, optId]) => {
      const q = questions.find((qq) => qq.id === qId);
      return q && optId === q.correctOptionId;
    }
  ).length;

  // Initialize session on first render
  useMemo(() => {
    if (!chapter || questions.length === 0) return;
    const session: ChapterExamSession = {
      id: `ch-${Date.now()}`,
      mode: 'chapter',
      chapterId: chapter.id,
      subjectId: chapter.subjectId as NeetSubjectId,
      startedAt: new Date().toISOString(),
      completedAt: null,
      answers: [],
      totalQuestions: questions.length,
      correctCount: null,
    };
    dispatch(startChapterExam(session));
  }, [chapter?.id]);

  const handleSelectOption = useCallback(
    (optionId: string) => {
      if (showFeedback || !question) return;
      setSelectedOptionId(optionId);
      setShowFeedback(true);

      const correct = optionId === question.correctOptionId;
      Haptics.impactAsync(
        correct ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Heavy
      );

      setAnswers((prev) => ({ ...prev, [question.id]: optionId }));

      const answer: UserAnswer = {
        questionId: question.id,
        selectedOptionId: optionId,
        isMarked: false,
        eliminatedOptionIds: [],
        timeSpentMs: 0,
      };
      dispatch(updateAnswer(answer));
    },
    [showFeedback, question, dispatch]
  );

  const handleNext = useCallback(() => {
    if (currentIndex >= questions.length - 1) {
      // Last question — go to results
      const finalCorrect = Object.entries({ ...answers, [question!.id]: selectedOptionId! }).filter(
        ([qId, optId]) => {
          const q = questions.find((qq) => qq.id === qId);
          return q && optId === q.correctOptionId;
        }
      ).length;

      dispatch(
        completeChapterExam({
          correctCount: finalCorrect,
          completedAt: new Date().toISOString(),
        })
      );

      router.replace({
        pathname: '/(exam)/chapter-results',
        params: { chapterId, correct: String(finalCorrect), total: String(questions.length) },
      });
      return;
    }

    // Animate transition
    Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }).start(() => {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setShowFeedback(false);
      setShowElimination(false);
      scrollRef.current?.scrollTo({ y: 0, animated: false });
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    });
  }, [currentIndex, questions.length, answers, selectedOptionId, question, chapterId, fadeAnim, dispatch, router]);

  if (!question || !chapter || !subjectMeta) return null;

  const getOptionStyle = (optId: string) => {
    if (!showFeedback) {
      return {
        bg: colors.surface,
        border: colors.surfaceBorder,
        textColor: colors.text,
      };
    }
    if (optId === question.correctOptionId) {
      return {
        bg: '#22C55E18',
        border: '#22C55E',
        textColor: '#16A34A',
      };
    }
    if (optId === selectedOptionId && !isCorrect) {
      return {
        bg: '#EF444418',
        border: '#EF4444',
        textColor: '#DC2626',
      };
    }
    return {
      bg: colors.surface,
      border: colors.surfaceBorder,
      textColor: colors.textTertiary,
    };
  };

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={[styles.backArrow, { color: colors.text }]}>{'<'}</Text>
          </Pressable>
          <View style={styles.topCenter}>
            <Text style={[Typography.label, { color: colors.textSecondary }]}>
              {subjectMeta.emoji} {language === 'te' ? chapter.nameTe : chapter.name}
            </Text>
          </View>
          <View style={[styles.progressBadge, { backgroundColor: subjectMeta.color + '20' }]}>
            <Text style={[styles.progressText, { color: subjectMeta.color }]}>
              {currentIndex + 1}/{questions.length}
            </Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={[styles.progressBarBg, { backgroundColor: colors.surfaceBorder }]}>
          <View
            style={[
              styles.progressBarFill,
              {
                backgroundColor: subjectMeta.color,
                width: `${((currentIndex + (showFeedback ? 1 : 0)) / questions.length) * 100}%`,
              },
            ]}
          />
        </View>

        <ScrollView
          ref={scrollRef}
          style={styles.scrollArea}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Animated.View style={{ opacity: fadeAnim }}>
            {/* Difficulty Badge */}
            <View style={styles.diffRow}>
              <View style={[styles.diffBadge, { backgroundColor: DIFFICULTY_COLORS[question.difficulty] + '20' }]}>
                <Text style={[styles.diffText, { color: DIFFICULTY_COLORS[question.difficulty] }]}>
                  {question.difficulty.toUpperCase()}
                </Text>
              </View>
            </View>

            {/* Question */}
            <JournalCard delay={0} style={styles.questionCard}>
              <Text style={[Typography.h3, { color: colors.text, lineHeight: 26 }]}>
                {language === 'te' ? question.textTe : question.text}
              </Text>
            </JournalCard>

            {/* Options */}
            <View style={styles.optionsList}>
              {question.options.map((opt, idx) => {
                const optStyle = getOptionStyle(opt.id);
                const label = String.fromCharCode(65 + idx); // A, B, C, D

                return (
                  <Pressable
                    key={opt.id}
                    onPress={() => handleSelectOption(opt.id)}
                    disabled={showFeedback}
                    style={[
                      styles.optionRow,
                      {
                        backgroundColor: optStyle.bg,
                        borderColor: optStyle.border,
                        borderWidth: showFeedback && (opt.id === question.correctOptionId || opt.id === selectedOptionId) ? 2 : 1,
                      },
                    ]}
                  >
                    <View style={[styles.optionLabel, { backgroundColor: optStyle.border + '30' }]}>
                      <Text style={[styles.optionLabelText, { color: optStyle.textColor }]}>{label}</Text>
                    </View>
                    <Text style={[Typography.body, { color: optStyle.textColor, flex: 1 }]}>
                      {language === 'te' ? opt.textTe : opt.text}
                    </Text>
                    {showFeedback && opt.id === question.correctOptionId && (
                      <Text style={styles.checkMark}>{'✓'}</Text>
                    )}
                    {showFeedback && opt.id === selectedOptionId && !isCorrect && (
                      <Text style={styles.crossMark}>{'✗'}</Text>
                    )}
                  </Pressable>
                );
              })}
            </View>

            {/* Feedback Section */}
            {showFeedback && (
              <View style={styles.feedbackSection}>
                {/* Correct/Wrong Banner */}
                <View
                  style={[
                    styles.resultBanner,
                    { backgroundColor: isCorrect ? '#22C55E18' : '#EF444418' },
                  ]}
                >
                  <Text style={[Typography.h3, { color: isCorrect ? '#16A34A' : '#DC2626' }]}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </Text>
                  <Text style={[Typography.bodySm, { color: isCorrect ? '#16A34A' : '#DC2626', marginTop: 2 }]}>
                    {isCorrect
                      ? 'Great job!'
                      : `Answer: ${String.fromCharCode(65 + question.options.findIndex((o) => o.id === question.correctOptionId))}`}
                  </Text>
                </View>

                {/* Explanation */}
                <JournalCard delay={0} style={styles.explanationCard}>
                  <HandwrittenText variant="handSm">Explanation</HandwrittenText>
                  <Text style={[Typography.body, { color: colors.text, marginTop: Spacing.sm, lineHeight: 22 }]}>
                    {language === 'te' ? question.explanationTe : question.explanation}
                  </Text>
                </JournalCard>

                {/* Elimination Toggle */}
                <Pressable
                  onPress={() => setShowElimination((prev) => !prev)}
                  style={[styles.elimToggle, { borderColor: colors.surfaceBorder }]}
                >
                  <Text style={[Typography.bodySm, { color: colors.primary }]}>
                    {showElimination ? 'Hide' : 'Show'} Elimination Technique
                  </Text>
                </Pressable>

                {showElimination && (
                  <JournalCard delay={0} style={styles.elimCard}>
                    <HandwrittenText variant="handSm">Elimination Technique</HandwrittenText>
                    <Text style={[Typography.body, { color: colors.text, marginTop: Spacing.sm, lineHeight: 22 }]}>
                      {language === 'te' ? question.eliminationTechniqueTe : question.eliminationTechnique}
                    </Text>
                  </JournalCard>
                )}
              </View>
            )}
          </Animated.View>
        </ScrollView>

        {/* Bottom Action */}
        {showFeedback && (
          <View style={styles.bottomBar}>
            <View style={styles.scoreCounter}>
              <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>
                Score: {correctCount + (isCorrect ? 1 : 0)}/{currentIndex + 1}
              </Text>
            </View>
            <PuffyButton
              title={currentIndex >= questions.length - 1 ? 'See Results' : 'Next Question'}
              onPress={handleNext}
              icon={currentIndex >= questions.length - 1 ? undefined : '>'}
            />
          </View>
        )}
      </SafeAreaView>
    </DotGridBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 20,
  },
  topCenter: {
    flex: 1,
    alignItems: 'center',
  },
  progressBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BorderRadius.md,
  },
  progressText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 13,
  },
  progressBarBg: {
    height: 4,
    marginHorizontal: Spacing.lg,
    borderRadius: 2,
    marginBottom: Spacing.sm,
  },
  progressBarFill: {
    height: 4,
    borderRadius: 2,
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.lg,
    paddingBottom: 120,
  },
  diffRow: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
  },
  diffBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
  },
  diffText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 11,
    letterSpacing: 0.5,
  },
  questionCard: {
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
    width: 32,
    height: 32,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionLabelText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 14,
  },
  checkMark: {
    fontSize: 20,
    color: '#16A34A',
    fontWeight: 'bold',
  },
  crossMark: {
    fontSize: 20,
    color: '#DC2626',
    fontWeight: 'bold',
  },
  feedbackSection: {
    marginTop: Spacing.xl,
    gap: Spacing.md,
  },
  resultBanner: {
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  explanationCard: {},
  elimToggle: {
    alignSelf: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderWidth: 1,
    borderRadius: BorderRadius.md,
  },
  elimCard: {},
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xxl,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  scoreCounter: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
  },
});
