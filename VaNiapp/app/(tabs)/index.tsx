import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { StickyNote } from '../../src/components/ui/StickyNote';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';

const subjects = [
  { id: 'physics', name: 'Physics', icon: '\u269B\uFE0F', color: '#3B82F6', chapters: 3 },
  { id: 'chemistry', name: 'Chemistry', icon: '\u2697\uFE0F', color: '#F97316', chapters: 3 },
  { id: 'botany', name: 'Botany', icon: '\uD83C\uDF3F', color: '#22C55E', chapters: 3 },
  { id: 'zoology', name: 'Zoology', icon: '\uD83E\uDD8B', color: '#A855F7', chapters: 3 },
];

export default function DashboardScreen() {
  const { colors, mode, toggle } = useTheme();

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={[Typography.label, { color: colors.textTertiary }]}>STUDY LOG v1.0</Text>
              <Text style={[Typography.h1, { color: colors.text, marginTop: 4 }]}>
                Study Board
              </Text>
            </View>
            <Pressable onPress={toggle} style={styles.themeToggle}>
              <Text style={styles.themeEmoji}>
                {mode === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19'}
              </Text>
            </Pressable>
          </View>

          {/* Trial Status */}
          <StickyNote color="yellow" rotation={-1} delay={100}>
            <View style={styles.trialRow}>
              <View>
                <HandwrittenText variant="handSm">Trial Active</HandwrittenText>
                <Text style={[Typography.h2, { color: colors.text }]}>3 days left</Text>
              </View>
              <View style={styles.trialBadge}>
                <Text style={styles.trialBadgeText}>25 Q's</Text>
              </View>
            </View>
          </StickyNote>

          {/* Subject Grid */}
          <View style={styles.sectionHeader}>
            <HandwrittenText variant="hand" rotation={-1}>Pick a subject</HandwrittenText>
          </View>

          <View style={styles.subjectGrid}>
            {subjects.map((subject, idx) => (
              <JournalCard key={subject.id} delay={200 + idx * 80} style={styles.subjectCard}>
                <View style={[styles.subjectIconBg, { backgroundColor: subject.color + '20' }]}>
                  <Text style={styles.subjectEmoji}>{subject.icon}</Text>
                </View>
                <Text style={[Typography.h3, { color: colors.text, marginTop: Spacing.sm }]}>
                  {subject.name}
                </Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>
                  {subject.chapters} chapters
                </Text>
              </JournalCard>
            ))}
          </View>

          {/* Quick Stats */}
          <JournalCard rotation={0.5} delay={600}>
            <Text style={[Typography.label, { color: colors.textTertiary, marginBottom: Spacing.md }]}>
              QUICK STATS
            </Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={[Typography.h1, { color: colors.primary }]}>0</Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Tests</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: colors.surfaceBorder }]} />
              <View style={styles.statItem}>
                <Text style={[Typography.h1, { color: colors.correct }]}>--%</Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Avg Score</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: colors.surfaceBorder }]} />
              <View style={styles.statItem}>
                <Text style={[Typography.h1, { color: colors.warning }]}>0m</Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Time</Text>
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
  trialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trialBadge: {
    backgroundColor: 'rgba(0,0,0,0.08)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: BorderRadius.md,
  },
  trialBadgeText: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 14,
    color: '#78716C',
  },
  sectionHeader: {
    marginTop: Spacing.sm,
  },
  subjectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  subjectCard: {
    width: '47%',
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
