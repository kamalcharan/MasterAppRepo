import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';

import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { StickyNote } from '../../src/components/ui/StickyNote';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { PuffyButton } from '../../src/components/ui/PuffyButton';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';
import { SUBJECT_META } from '../../src/constants/subjects';
import { getChapterById } from '../../src/data/chapters';
import { getQuestionsByChapter } from '../../src/data/questions';
import { RootState } from '../../src/store';

export default function ChapterResultsScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { chapterId, correct, total } = useLocalSearchParams<{
    chapterId: string;
    correct: string;
    total: string;
  }>();
  const language = useSelector((state: RootState) => state.auth.user?.language ?? 'en');

  const chapter = chapterId ? getChapterById(chapterId) : null;
  const subjectMeta = chapter ? SUBJECT_META[chapter.subjectId] : null;
  const questions = useMemo(() => (chapterId ? getQuestionsByChapter(chapterId) : []), [chapterId]);

  const correctNum = parseInt(correct ?? '0', 10);
  const totalNum = parseInt(total ?? '0', 10);
  const wrongNum = totalNum - correctNum;
  const percentage = totalNum > 0 ? Math.round((correctNum / totalNum) * 100) : 0;

  // Difficulty breakdown from the last session answers in Redux
  const lastSession = useSelector((state: RootState) => {
    const h = state.practice.chapterHistory;
    return h.length > 0 ? h[0] : null;
  });

  const difficultyStats = useMemo(() => {
    if (!lastSession || !questions.length) return null;
    const stats = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } };
    for (const q of questions) {
      stats[q.difficulty].total++;
      const ans = lastSession.answers.find((a) => a.questionId === q.id);
      if (ans?.selectedOptionId === q.correctOptionId) {
        stats[q.difficulty].correct++;
      }
    }
    return stats;
  }, [lastSession, questions]);

  const getGrade = () => {
    if (percentage >= 90) return { label: 'Excellent!', emoji: '🌟', color: '#22C55E' };
    if (percentage >= 70) return { label: 'Good Job!', emoji: '👍', color: '#3B82F6' };
    if (percentage >= 50) return { label: 'Keep Going', emoji: '💪', color: '#F59E0B' };
    return { label: 'Needs Practice', emoji: '📖', color: '#EF4444' };
  };

  const grade = getGrade();

  const handleRetry = () => {
    router.replace({ pathname: '/(exam)/chapter-question', params: { chapterId: chapterId! } });
  };

  const handleBackToSubjects = () => {
    router.replace('/(exam)/subject-select');
  };

  const handleGoHome = () => {
    router.replace('/(tabs)');
  };

  if (!chapter || !subjectMeta) return null;

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Grade Banner */}
          <View style={[styles.gradeBanner, { backgroundColor: grade.color + '15' }]}>
            <Text style={styles.gradeEmoji}>{grade.emoji}</Text>
            <HandwrittenText variant="hand">{grade.label}</HandwrittenText>
            <Text style={[Typography.bodySm, { color: colors.textSecondary, marginTop: 4 }]}>
              {subjectMeta.emoji} {language === 'te' ? chapter.nameTe : chapter.name}
            </Text>
          </View>

          {/* Score Circle */}
          <JournalCard delay={100} style={styles.scoreCard}>
            <View style={styles.scoreRow}>
              <View style={[styles.scoreCircle, { borderColor: grade.color }]}>
                <Text style={[styles.scorePercent, { color: grade.color }]}>{percentage}%</Text>
              </View>
              <View style={styles.scoreDetails}>
                <View style={styles.scoreItem}>
                  <View style={[styles.dot, { backgroundColor: '#22C55E' }]} />
                  <Text style={[Typography.body, { color: colors.text }]}>{correctNum} Correct</Text>
                </View>
                <View style={styles.scoreItem}>
                  <View style={[styles.dot, { backgroundColor: '#EF4444' }]} />
                  <Text style={[Typography.body, { color: colors.text }]}>{wrongNum} Wrong</Text>
                </View>
                <View style={styles.scoreItem}>
                  <View style={[styles.dot, { backgroundColor: '#64748B' }]} />
                  <Text style={[Typography.body, { color: colors.text }]}>{totalNum} Total</Text>
                </View>
              </View>
            </View>
          </JournalCard>

          {/* Difficulty Breakdown */}
          {difficultyStats && (
            <JournalCard delay={200} style={styles.diffCard}>
              <Text style={[Typography.label, { color: colors.textTertiary, marginBottom: Spacing.md }]}>
                DIFFICULTY BREAKDOWN
              </Text>
              {(['easy', 'medium', 'hard'] as const).map((diff) => {
                const s = difficultyStats[diff];
                const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
                const diffColor =
                  diff === 'easy' ? '#22C55E' : diff === 'medium' ? '#F59E0B' : '#EF4444';

                return (
                  <View key={diff} style={styles.diffRow}>
                    <View style={[styles.diffLabel, { backgroundColor: diffColor + '20' }]}>
                      <Text style={[styles.diffLabelText, { color: diffColor }]}>
                        {diff.toUpperCase()}
                      </Text>
                    </View>
                    <View style={styles.diffBarBg}>
                      <View
                        style={[styles.diffBarFill, { width: `${pct}%`, backgroundColor: diffColor }]}
                      />
                    </View>
                    <Text style={[Typography.bodySm, { color: colors.textSecondary, width: 60, textAlign: 'right' }]}>
                      {s.correct}/{s.total}
                    </Text>
                  </View>
                );
              })}
            </JournalCard>
          )}

          {/* Motivational Note */}
          <StickyNote color="yellow" rotation={1} delay={300}>
            <Text style={[Typography.bodySm, { color: colors.text }]}>
              {percentage >= 70
                ? 'Strong foundation! Try the other chapter or take a full Practice Exam.'
                : 'Review the explanations and elimination techniques, then retry this chapter.'}
            </Text>
          </StickyNote>

          {/* Actions */}
          <View style={styles.actions}>
            <PuffyButton title="Retry Chapter" onPress={handleRetry} variant="secondary" />
            <PuffyButton title="Pick Another Subject" onPress={handleBackToSubjects} variant="ghost" />
            <PuffyButton title="Back to Dashboard" onPress={handleGoHome} variant="ghost" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </DotGridBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: Spacing.lg,
    gap: Spacing.lg,
    paddingBottom: 40,
  },
  gradeBanner: {
    alignItems: 'center',
    padding: Spacing.xl,
    borderRadius: BorderRadius.xl,
  },
  gradeEmoji: {
    fontSize: 48,
    marginBottom: Spacing.sm,
  },
  scoreCard: {},
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xl,
  },
  scoreCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scorePercent: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 28,
  },
  scoreDetails: {
    flex: 1,
    gap: Spacing.sm,
  },
  scoreItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  diffCard: {},
  diffRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  diffLabel: {
    width: 70,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: BorderRadius.sm,
    alignItems: 'center',
  },
  diffLabelText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 10,
    letterSpacing: 0.5,
  },
  diffBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(0,0,0,0.06)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  diffBarFill: {
    height: 8,
    borderRadius: 4,
  },
  actions: {
    gap: Spacing.md,
    marginTop: Spacing.md,
  },
});
