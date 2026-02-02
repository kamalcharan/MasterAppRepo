import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing } from '../../src/constants/theme';

export default function HistoryScreen() {
  const { colors } = useTheme();

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <Text style={{ fontSize: 24 }}>{'\uD83D\uDCD3'}</Text>
          <Text style={[Typography.h1, { color: colors.text }]}>My Journal</Text>
        </View>

        <JournalCard delay={100} style={styles.emptyCard}>
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>{'\uD83D\uDCDD'}</Text>
            <Text style={[Typography.h3, { color: colors.text, textAlign: 'center' }]}>
              No entries yet
            </Text>
            <HandwrittenText variant="hand">
              Complete your first practice to see it here!
            </HandwrittenText>
          </View>
        </JournalCard>
      </SafeAreaView>
    </DotGridBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: Spacing.xl,
  },
  emptyCard: {
    alignItems: 'center',
  },
  emptyState: {
    alignItems: 'center',
    gap: Spacing.md,
    paddingVertical: Spacing.xxl,
  },
  emptyEmoji: {
    fontSize: 48,
  },
});
