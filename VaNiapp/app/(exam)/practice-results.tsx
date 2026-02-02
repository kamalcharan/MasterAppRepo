import React from 'react';
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
import { RootState } from '../../src/store';
import { NeetSubjectId, NEET_SCORING } from '../../src/types';

const SUBJECTS: NeetSubjectId[] = ['physics', 'chemistry', 'botany', 'zoology'];

export default function PracticeResultsScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { score, correct, wrong, unanswered } = useLocalSearchParams<{
    score: string;
    correct: string;
    wrong: string;
    unanswered: string;
  }>();

  const lastExam = useSelector((state: RootState) => {
    const h = state.practice.practiceHistory;
    return h.length > 0 ? h[0] : null;
  });

  const scoreNum = parseInt(score ?? '0', 10);
  const correctNum = parseInt(correct ?? '0', 10);
  const wrongNum = parseInt(wrong ?? '0', 10);
  const unansweredNum = parseInt(unanswered ?? '0', 10);
  const percentage = Math.round((scoreNum / NEET_SCORING.maxMarks) * 100);

  const getGrade = () => {
    if (percentage >= 80) return { label: 'Outstanding!', emoji: '\uD83C\uDF1F', color: '#22C55E' };
    if (percentage >= 60) return { label: 'Well Done!', emoji: '\uD83D\uDC4D', color: '#3B82F6' };
    if (percentage >= 40) return { label: 'Good Effort', emoji: '\uD83D\uDCAA', color: '#F59E0B' };
    return { label: 'Keep Practicing', emoji: '\uD83D\uDCD6', color: '#EF4444' };
  };

  const grade = getGrade();

  const handleRetry = () => {
    router.replace('/(exam)/practice-start');
  };

  const handleGoHome = () => {
    router.replace('/(tabs)');
  };

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Grade Banner */}
          <View style={[styles.gradeBanner, { backgroundColor: grade.color + '15' }]}>
            <Text style={styles.gradeEmoji}>{grade.emoji}</Text>
            <HandwrittenText variant="hand">{grade.label}</HandwrittenText>
            <Text style={[Typography.bodySm, { color: colors.textSecondary, marginTop: 4 }]}>
              NEET Practice Exam
            </Text>
          </View>

          {/* Score Card */}
          <JournalCard delay={100}>
            <View style={styles.scoreCenter}>
              <View style={[styles.scoreCircle, { borderColor: grade.color }]}>
                <Text style={[styles.scoreNum, { color: grade.color }]}>{scoreNum}</Text>
                <Text style={[styles.scoreMax, { color: colors.textTertiary }]}>/{NEET_SCORING.maxMarks}</Text>
              </View>
              <Text style={[Typography.h3, { color: colors.text, marginTop: Spacing.md }]}>
                {percentage}% Score
              </Text>
            </View>

            <View style={[styles.statStrip, { borderTopColor: colors.surfaceBorder }]}>
              <View style={styles.statCell}>
                <Text style={[styles.statVal, { color: '#22C55E' }]}>{correctNum}</Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Correct</Text>
                <Text style={[styles.statPoints, { color: '#22C55E' }]}>+{correctNum * 4}</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: colors.surfaceBorder }]} />
              <View style={styles.statCell}>
                <Text style={[styles.statVal, { color: '#EF4444' }]}>{wrongNum}</Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Wrong</Text>
                <Text style={[styles.statPoints, { color: '#EF4444' }]}>{wrongNum > 0 ? `-${wrongNum}` : '0'}</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: colors.surfaceBorder }]} />
              <View style={styles.statCell}>
                <Text style={[styles.statVal, { color: '#64748B' }]}>{unansweredNum}</Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Skipped</Text>
                <Text style={[styles.statPoints, { color: '#64748B' }]}>0</Text>
              </View>
            </View>
          </JournalCard>

          {/* Per-Subject Breakdown */}
          {lastExam?.subjectScores && (
            <JournalCard delay={200}>
              <Text style={[Typography.label, { color: colors.textTertiary, marginBottom: Spacing.md }]}>
                SUBJECT BREAKDOWN
              </Text>
              {SUBJECTS.map((subjectId) => {
                const meta = SUBJECT_META[subjectId];
                const s = lastExam.subjectScores![subjectId];
                const maxSubject = 45 * NEET_SCORING.correct; // 180 marks per subject
                const pct = maxSubject > 0 ? Math.round((s.score / maxSubject) * 100) : 0;

                return (
                  <View key={subjectId} style={[styles.subjectRow, { borderBottomColor: colors.surfaceBorder }]}>
                    <View style={styles.subjectHeader}>
                      <Text style={[Typography.body, { color: colors.text }]}>
                        {meta.emoji} {meta.name}
                      </Text>
                      <Text style={[Typography.h3, { color: meta.color }]}>
                        {s.score}/{maxSubject}
                      </Text>
                    </View>
                    <View style={styles.subjectBarBg}>
                      <View
                        style={[
                          styles.subjectBarFill,
                          { width: `${Math.max(0, pct)}%`, backgroundColor: meta.color },
                        ]}
                      />
                    </View>
                    <View style={styles.subjectStats}>
                      <Text style={[styles.miniStat, { color: '#22C55E' }]}>
                        {s.correct} correct
                      </Text>
                      <Text style={[styles.miniStat, { color: '#EF4444' }]}>
                        {s.wrong} wrong
                      </Text>
                      <Text style={[styles.miniStat, { color: '#64748B' }]}>
                        {s.unanswered} skipped
                      </Text>
                    </View>
                  </View>
                );
              })}
            </JournalCard>
          )}

          {/* Advice */}
          <StickyNote color="yellow" rotation={-1} delay={300}>
            <Text style={[Typography.bodySm, { color: colors.text, lineHeight: 20 }]}>
              {percentage >= 60
                ? 'Strong performance! Focus on your weakest subject and try the Chapter Exam mode for targeted practice.'
                : 'Use Chapter Exam mode to strengthen individual chapters. Focus on the explanations and elimination techniques.'}
            </Text>
          </StickyNote>

          {/* Actions */}
          <View style={styles.actions}>
            <PuffyButton title="Retry Practice Exam" onPress={handleRetry} variant="secondary" />
            <PuffyButton title="Back to Dashboard" onPress={handleGoHome} />
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
  scoreCenter: {
    alignItems: 'center',
    paddingBottom: Spacing.lg,
  },
  scoreCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreNum: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 36,
  },
  scoreMax: {
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 14,
    marginTop: -4,
  },
  statStrip: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: Spacing.lg,
  },
  statCell: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  statVal: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 22,
  },
  statPoints: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: 50,
    alignSelf: 'center',
  },
  subjectRow: {
    paddingBottom: Spacing.md,
    marginBottom: Spacing.md,
    borderBottomWidth: 1,
    gap: 6,
  },
  subjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subjectBarBg: {
    height: 8,
    backgroundColor: 'rgba(0,0,0,0.06)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  subjectBarFill: {
    height: 8,
    borderRadius: 4,
  },
  subjectStats: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  miniStat: {
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 11,
  },
  actions: {
    gap: Spacing.md,
    marginTop: Spacing.md,
  },
});
