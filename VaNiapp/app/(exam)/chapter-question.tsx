import React, { useState, useMemo, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import * as Haptics from 'expo-haptics';

import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';
import { RootState } from '../../src/store';
import { getQuestionsByChapter } from '../../src/data/questions';
import { getChapterById } from '../../src/data/chapters';
import { SUBJECT_META } from '../../src/constants/subjects';
import { NeetSubjectId, ChapterExamSession, UserAnswer } from '../../src/types';
import { startChapterExam, updateAnswer, completeChapterExam } from '../../src/store/slices/practiceSlice';

const DIFF_COLORS = { easy: '#22C55E', medium: '#F59E0B', hard: '#EF4444' };

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

  const question = questions[currentIndex];
  const isCorrect = selectedOptionId === question?.correctOptionId;

  const correctCount = useMemo(() => {
    return Object.entries(answers).filter(([qId, optId]) => {
      const q = questions.find((qq) => qq.id === qId);
      return q && optId === q.correctOptionId;
    }).length;
  }, [answers, questions]);

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

  const handleSelectOption = (optionId: string) => {
    if (showFeedback || !question) return;
    setSelectedOptionId(optionId);
    setShowFeedback(true);

    const correct = optionId === question.correctOptionId;
    Haptics.impactAsync(
      correct ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Heavy
    );

    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));

    dispatch(
      updateAnswer({
        questionId: question.id,
        selectedOptionId: optionId,
        isMarked: false,
        eliminatedOptionIds: [],
        timeSpentMs: 0,
      })
    );
  };

  const handleNext = () => {
    if (!question) return;

    if (currentIndex >= questions.length - 1) {
      // Last question — compute final score and go to results
      const allAnswers = { ...answers, [question.id]: selectedOptionId! };
      const finalCorrect = Object.entries(allAnswers).filter(([qId, optId]) => {
        const q = questions.find((qq) => qq.id === qId);
        return q && optId === q.correctOptionId;
      }).length;

      dispatch(
        completeChapterExam({
          correctCount: finalCorrect,
          completedAt: new Date().toISOString(),
        })
      );

      router.replace({
        pathname: '/(exam)/chapter-results',
        params: { chapterId: chapterId!, correct: String(finalCorrect), total: String(questions.length) },
      });
      return;
    }

    // Move to next question directly (no animation that blocks)
    setCurrentIndex((prev) => prev + 1);
    setSelectedOptionId(null);
    setShowFeedback(false);
    setShowElimination(false);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  if (!question || !chapter || !subjectMeta) return null;

  const getOptionStyle = (optId: string) => {
    if (!showFeedback) {
      return { bg: colors.surface, border: colors.surfaceBorder, text: colors.text };
    }
    if (optId === question.correctOptionId) {
      return { bg: '#22C55E18', border: '#22C55E', text: '#16A34A' };
    }
    if (optId === selectedOptionId && !isCorrect) {
      return { bg: '#EF444418', border: '#EF4444', text: '#DC2626' };
    }
    return { bg: colors.surface, border: colors.surfaceBorder, text: colors.textTertiary };
  };

  const isLast = currentIndex >= questions.length - 1;

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        {/* Top Bar */}
        <View style={[styles.topBar, { borderBottomColor: colors.surfaceBorder }]}>
          <Pressable onPress={() => router.back()} hitSlop={8} style={styles.backBtn}>
            <Text style={[styles.backArrow, { color: colors.text }]}>{'<'}</Text>
          </Pressable>
          <View style={styles.topCenter}>
            <Text style={[Typography.bodySm, { color: colors.textSecondary }]} numberOfLines={1}>
              {subjectMeta.emoji} {language === 'te' ? chapter.nameTe : chapter.name}
            </Text>
          </View>
          <View style={[styles.counterBadge, { backgroundColor: subjectMeta.color + '20' }]}>
            <Text style={[styles.counterText, { color: subjectMeta.color }]}>
              {currentIndex + 1}/{questions.length}
            </Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={[styles.progressBg, { backgroundColor: colors.surfaceBorder }]}>
          <View
            style={[
              styles.progressFill,
              {
                backgroundColor: subjectMeta.color,
                width: `${((currentIndex + (showFeedback ? 1 : 0)) / questions.length) * 100}%`,
              },
            ]}
          />
        </View>

        {/* Scrollable Question Content */}
        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Difficulty */}
          <View style={[styles.diffBadge, { backgroundColor: DIFF_COLORS[question.difficulty] + '20' }]}>
            <Text style={[styles.diffText, { color: DIFF_COLORS[question.difficulty] }]}>
              {question.difficulty.toUpperCase()}
            </Text>
          </View>

          {/* Question Text */}
          <View style={[styles.questionBox, { backgroundColor: colors.surface, borderColor: colors.surfaceBorder }]}>
            <Text style={[Typography.h3, { color: colors.text, lineHeight: 26 }]}>
              {language === 'te' ? question.textTe : question.text}
            </Text>
          </View>

          {/* Options */}
          <View style={styles.optionsList}>
            {question.options.map((opt, idx) => {
              const os = getOptionStyle(opt.id);
              const label = String.fromCharCode(65 + idx);
              return (
                <Pressable
                  key={opt.id}
                  onPress={() => handleSelectOption(opt.id)}
                  disabled={showFeedback}
                  style={[
                    styles.optionRow,
                    {
                      backgroundColor: os.bg,
                      borderColor: os.border,
                      borderWidth: showFeedback && (opt.id === question.correctOptionId || opt.id === selectedOptionId) ? 2 : 1,
                    },
                  ]}
                >
                  <View style={[styles.optLabel, { backgroundColor: os.border + '30' }]}>
                    <Text style={[styles.optLabelText, { color: os.text }]}>{label}</Text>
                  </View>
                  <Text style={[Typography.body, { color: os.text, flex: 1 }]}>
                    {language === 'te' ? opt.textTe : opt.text}
                  </Text>
                  {showFeedback && opt.id === question.correctOptionId && (
                    <Text style={{ fontSize: 18, color: '#16A34A' }}>{'\u2713'}</Text>
                  )}
                  {showFeedback && opt.id === selectedOptionId && !isCorrect && (
                    <Text style={{ fontSize: 18, color: '#DC2626' }}>{'\u2717'}</Text>
                  )}
                </Pressable>
              );
            })}
          </View>

          {/* Feedback Section */}
          {showFeedback && (
            <View style={styles.feedbackArea}>
              {/* Correct / Wrong banner */}
              <View style={[styles.banner, { backgroundColor: isCorrect ? '#22C55E18' : '#EF444418' }]}>
                <Text style={[Typography.h3, { color: isCorrect ? '#16A34A' : '#DC2626' }]}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </Text>
                {!isCorrect && (
                  <Text style={[Typography.bodySm, { color: '#DC2626', marginTop: 2 }]}>
                    Correct answer:{' '}
                    {String.fromCharCode(65 + question.options.findIndex((o) => o.id === question.correctOptionId))}
                  </Text>
                )}
              </View>

              {/* Explanation */}
              <JournalCard delay={0}>
                <HandwrittenText variant="handSm">Explanation</HandwrittenText>
                <Text style={[Typography.body, { color: colors.text, marginTop: Spacing.sm, lineHeight: 22 }]}>
                  {language === 'te' ? question.explanationTe : question.explanation}
                </Text>
              </JournalCard>

              {/* Elimination Technique toggle */}
              <Pressable
                onPress={() => setShowElimination((p) => !p)}
                style={[styles.elimBtn, { borderColor: colors.surfaceBorder }]}
              >
                <Text style={[Typography.bodySm, { color: colors.primary }]}>
                  {showElimination ? 'Hide' : 'Show'} Elimination Technique
                </Text>
              </Pressable>

              {showElimination && (
                <JournalCard delay={0}>
                  <HandwrittenText variant="handSm">Elimination Technique</HandwrittenText>
                  <Text style={[Typography.body, { color: colors.text, marginTop: Spacing.sm, lineHeight: 22 }]}>
                    {language === 'te' ? question.eliminationTechniqueTe : question.eliminationTechnique}
                  </Text>
                </JournalCard>
              )}
            </View>
          )}
        </ScrollView>

        {/* Fixed Bottom Bar — always visible after answering */}
        <View style={[styles.bottomBar, { backgroundColor: colors.background, borderTopColor: colors.surfaceBorder }]}>
          <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>
            {showFeedback
              ? `Score: ${correctCount + (isCorrect ? 1 : 0)}/${currentIndex + 1}`
              : `Question ${currentIndex + 1} of ${questions.length}`}
          </Text>

          {showFeedback ? (
            <Pressable
              onPress={handleNext}
              hitSlop={{ top: 12, bottom: 12, left: 16, right: 16 }}
              style={[styles.nextBtn, { backgroundColor: mode === 'dark' ? '#FFF' : '#0F172A' }]}
            >
              <Text
                style={[
                  styles.nextBtnText,
                  { color: mode === 'dark' ? '#0F172A' : '#FFF' },
                ]}
              >
                {isLast ? 'See Results' : 'Next Question  >'}
              </Text>
            </Pressable>
          ) : (
            <Text style={[Typography.bodySm, { color: colors.textTertiary }]}>
              Tap an option to answer
            </Text>
          )}
        </View>
      </SafeAreaView>
    </DotGridBackground>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
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
    paddingHorizontal: Spacing.sm,
  },
  counterBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BorderRadius.md,
  },
  counterText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 13,
  },
  progressBg: {
    height: 4,
    marginHorizontal: Spacing.lg,
    borderRadius: 2,
    marginVertical: 4,
  },
  progressFill: {
    height: 4,
    borderRadius: 2,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.lg,
    paddingBottom: 30,
  },
  diffBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    marginBottom: Spacing.md,
  },
  diffText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 11,
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
  optLabel: {
    width: 32,
    height: 32,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optLabelText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 14,
  },
  feedbackArea: {
    marginTop: Spacing.xl,
    gap: Spacing.md,
  },
  banner: {
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  elimBtn: {
    alignSelf: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderWidth: 1,
    borderRadius: BorderRadius.md,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderTopWidth: 1,
  },
  nextBtn: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: BorderRadius.xl,
  },
  nextBtnText: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 15,
  },
});
