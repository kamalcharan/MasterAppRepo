import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';
import { RootState } from '../../src/store';
import { SUBJECT_META } from '../../src/constants/subjects';

export default function DashboardScreen() {
  const { colors, mode, toggle } = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);
  const chapterHistory = useSelector((state: RootState) => state.practice.chapterHistory);
  const practiceHistory = useSelector((state: RootState) => state.practice.practiceHistory);
  const router = useRouter();

  const displaySubjects = useMemo(() => {
    const ids = user?.selectedSubjects ?? ['physics', 'chemistry', 'botany', 'zoology'];
    return ids.map((id) => ({
      id,
      ...(SUBJECT_META[id] ?? { name: id, emoji: '\uD83D\uDCDA', color: '#64748B' }),
    }));
  }, [user?.selectedSubjects]);

  const greeting = user?.name ? `Hey, ${user.name}` : 'Study Board';
  const totalTests = chapterHistory.length + practiceHistory.length;

  const avgScore = useMemo(() => {
    if (chapterHistory.length === 0) return null;
    const totalPct = chapterHistory.reduce((sum, s) => {
      const pct =
        s.totalQuestions > 0 && s.correctCount !== null
          ? (s.correctCount / s.totalQuestions) * 100
          : 0;
      return sum + pct;
    }, 0);
    return Math.round(totalPct / chapterHistory.length);
  }, [chapterHistory]);

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={[Typography.label, { color: colors.textTertiary }]}>
                {user?.exam ?? 'NEET'} PREP
              </Text>
              <Text style={[Typography.h1, { color: colors.text, marginTop: 4 }]}>{greeting}</Text>
            </View>
            <Pressable onPress={toggle} style={styles.themeToggle}>
              <Text style={styles.themeEmoji}>
                {mode === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19'}
              </Text>
            </Pressable>
          </View>

          {/* Exam Mode Cards */}
          <View style={styles.modeSection}>
            <HandwrittenText variant="hand" rotation={-1}>
              Pick a mode
            </HandwrittenText>
            <View style={styles.modeCards}>
              {/* Chapter Exam */}
              <Pressable
                style={styles.modeCardWrap}
                onPress={() => router.push('/(exam)/subject-select')}
              >
                <JournalCard delay={100} style={styles.modeCard}>
                  <Text style={styles.modeIcon}>{'\uD83D\uDCD6'}</Text>
                  <Text style={[Typography.h3, { color: colors.text, textAlign: 'center' }]}>
                    Chapter{'\n'}Exam
                  </Text>
                  <Text
                    style={[
                      Typography.bodySm,
                      { color: colors.textSecondary, textAlign: 'center', marginTop: 6 },
                    ]}
                  >
                    25 Qs per chapter{'\n'}Instant feedback
                  </Text>
                </JournalCard>
              </Pressable>

              {/* Practice Exam */}
              <Pressable
                style={styles.modeCardWrap}
                onPress={() => router.push('/(exam)/practice-start')}
              >
                <JournalCard delay={200} style={styles.modeCard}>
                  <Text style={styles.modeIcon}>{'\uD83C\uDFAF'}</Text>
                  <Text style={[Typography.h3, { color: colors.text, textAlign: 'center' }]}>
                    Practice{'\n'}Exam
                  </Text>
                  <Text
                    style={[
                      Typography.bodySm,
                      { color: colors.textSecondary, textAlign: 'center', marginTop: 6 },
                    ]}
                  >
                    200 Qs, 3h 20m{'\n'}NEET format
                  </Text>
                </JournalCard>
              </Pressable>
            </View>
          </View>

          {/* Subject Grid — quick jump to chapter-select */}
          <View style={styles.sectionHeader}>
            <HandwrittenText variant="hand" rotation={-1}>
              Your subjects
            </HandwrittenText>
          </View>

          <View style={styles.subjectGrid}>
            {displaySubjects.map((subject, idx) => (
              <Pressable
                key={subject.id}
                style={styles.subjectWrap}
                onPress={() =>
                  router.push({
                    pathname: '/(exam)/chapter-select',
                    params: { subjectId: subject.id },
                  })
                }
              >
                <JournalCard delay={300 + idx * 80} style={styles.subjectCard}>
                  <View style={[styles.subjectIconBg, { backgroundColor: subject.color + '20' }]}>
                    <Text style={styles.subjectEmoji}>{subject.emoji}</Text>
                  </View>
                  <Text
                    style={[
                      Typography.h3,
                      { color: colors.text, marginTop: Spacing.sm, textAlign: 'center' },
                    ]}
                    numberOfLines={1}
                  >
                    {subject.name}
                  </Text>
                </JournalCard>
              </Pressable>
            ))}
          </View>

          {/* Quick Stats */}
          <JournalCard rotation={0.5} delay={600}>
            <Text
              style={[Typography.label, { color: colors.textTertiary, marginBottom: Spacing.md }]}
            >
              QUICK STATS
            </Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={[Typography.h1, { color: colors.primary }]}>{totalTests}</Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Tests</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: colors.surfaceBorder }]} />
              <View style={styles.statItem}>
                <Text style={[Typography.h1, { color: colors.correct }]}>
                  {avgScore !== null ? `${avgScore}%` : '--%'}
                </Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Avg Score</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: colors.surfaceBorder }]} />
              <View style={styles.statItem}>
                <Text style={[Typography.h1, { color: colors.warning }]}>
                  {chapterHistory.length}
                </Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Chapters</Text>
              </View>
            </View>
          </JournalCard>
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
    gap: Spacing.xl,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  themeToggle: {
    padding: Spacing.sm,
  },
  themeEmoji: {
    fontSize: 24,
  },
  modeSection: {
    gap: Spacing.md,
  },
  modeCards: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  modeCardWrap: {
    flex: 1,
  },
  modeCard: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
  },
  modeIcon: {
    fontSize: 36,
    marginBottom: Spacing.sm,
  },
  sectionHeader: {
    marginTop: Spacing.sm,
  },
  subjectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  subjectWrap: {
    width: '47%',
  },
  subjectCard: {
    alignItems: 'center',
  },
  subjectIconBg: {
    width: 56,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectEmoji: {
    fontSize: 28,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statDivider: {
    width: 1,
    height: 40,
  },
});
