import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { StickyNote } from '../../src/components/ui/StickyNote';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { PuffyButton } from '../../src/components/ui/PuffyButton';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';
import { NEET_SCORING } from '../../src/types';

const INFO_ROWS = [
  { label: 'Total Questions', value: '200', detail: '50 per subject' },
  { label: 'Section A', value: '35 Qs', detail: 'All mandatory, per subject' },
  { label: 'Section B', value: '15 Qs', detail: 'Attempt any 10, per subject' },
  { label: 'Duration', value: '3h 20m', detail: '200 minutes total' },
  { label: 'Correct Answer', value: '+4', detail: 'marks' },
  { label: 'Wrong Answer', value: '-1', detail: 'mark (negative)' },
  { label: 'Unanswered', value: '0', detail: 'marks' },
  { label: 'Maximum Marks', value: '720', detail: '180 scored × 4' },
];

export default function PracticeStartScreen() {
  const { colors } = useTheme();
  const router = useRouter();

  const handleStart = () => {
    router.push('/(exam)/practice-question');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerEmoji}>{'\uD83C\uDFAF'}</Text>
            <HandwrittenText variant="hand">Practice Exam</HandwrittenText>
            <Text style={[Typography.bodySm, { color: colors.textSecondary, marginTop: 4 }]}>
              Full NEET format mock test
            </Text>
          </View>

          {/* Format Card */}
          <JournalCard delay={100}>
            <Text style={[Typography.label, { color: colors.textTertiary, marginBottom: Spacing.md }]}>
              EXAM FORMAT
            </Text>
            {INFO_ROWS.map((row, idx) => (
              <View
                key={row.label}
                style={[
                  styles.infoRow,
                  idx < INFO_ROWS.length - 1 && {
                    borderBottomWidth: 1,
                    borderBottomColor: colors.surfaceBorder,
                  },
                ]}
              >
                <Text style={[Typography.bodySm, { color: colors.textSecondary, flex: 1 }]}>
                  {row.label}
                </Text>
                <Text style={[Typography.h3, { color: colors.text }]}>{row.value}</Text>
                <Text
                  style={[Typography.bodySm, { color: colors.textTertiary, width: 90, textAlign: 'right' }]}
                >
                  {row.detail}
                </Text>
              </View>
            ))}
          </JournalCard>

          {/* Subjects */}
          <JournalCard delay={200}>
            <Text style={[Typography.label, { color: colors.textTertiary, marginBottom: Spacing.md }]}>
              SUBJECTS
            </Text>
            <View style={styles.subjectRow}>
              {[
                { emoji: '\u269B\uFE0F', name: 'Physics' },
                { emoji: '\uD83E\uDDEA', name: 'Chemistry' },
                { emoji: '\uD83C\uDF3F', name: 'Botany' },
                { emoji: '\uD83E\uDD8B', name: 'Zoology' },
              ].map((s) => (
                <View key={s.name} style={styles.subjectChip}>
                  <Text style={styles.subjectChipEmoji}>{s.emoji}</Text>
                  <Text style={[Typography.bodySm, { color: colors.text }]}>{s.name}</Text>
                </View>
              ))}
            </View>
          </JournalCard>

          {/* Instructions */}
          <StickyNote color="pink" rotation={1} delay={300}>
            <Text style={[Typography.bodySm, { color: colors.text, lineHeight: 20 }]}>
              {'\u2022'} You can navigate between questions freely{'\n'}
              {'\u2022'} Mark questions for review and come back{'\n'}
              {'\u2022'} No feedback until you submit the entire exam{'\n'}
              {'\u2022'} Timer starts as soon as you begin
            </Text>
          </StickyNote>

          {/* Actions */}
          <View style={styles.actions}>
            <PuffyButton title="Start Exam" onPress={handleStart} icon={'\uD83D\uDE80'} />
            <PuffyButton title="Go Back" onPress={handleBack} variant="ghost" />
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
  header: {
    alignItems: 'center',
    paddingVertical: Spacing.lg,
  },
  headerEmoji: {
    fontSize: 48,
    marginBottom: Spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
  },
  subjectRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  subjectChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
  subjectChipEmoji: {
    fontSize: 18,
  },
  actions: {
    gap: Spacing.md,
    marginTop: Spacing.md,
  },
});
