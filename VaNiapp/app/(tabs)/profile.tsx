import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { StickyNote } from '../../src/components/ui/StickyNote';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing } from '../../src/constants/theme';

export default function ProfileScreen() {
  const { colors } = useTheme();

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <Text style={{ fontSize: 24 }}>{'\u270D\uFE0F'}</Text>
          <Text style={[Typography.h1, { color: colors.text }]}>About Me</Text>
        </View>

        <StickyNote color="teal" rotation={1} delay={100}>
          <View style={styles.profileCard}>
            <View style={[styles.avatar, { backgroundColor: colors.primaryLight }]}>
              <Text style={styles.avatarEmoji}>{'\uD83E\uDDD1\u200D\uD83C\uDF93'}</Text>
            </View>
            <Text style={[Typography.h2, { color: colors.text }]}>Student</Text>
            <HandwrittenText variant="hand">NEET 2026 Aspirant</HandwrittenText>
          </View>
        </StickyNote>

        <JournalCard delay={200} style={{ marginTop: Spacing.lg }}>
          <View style={styles.infoRow}>
            <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Exam</Text>
            <Text style={[Typography.body, { color: colors.text, fontFamily: 'PlusJakartaSans_600SemiBold' }]}>NEET</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: colors.surfaceBorder }]} />
          <View style={styles.infoRow}>
            <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Language</Text>
            <Text style={[Typography.body, { color: colors.text, fontFamily: 'PlusJakartaSans_600SemiBold' }]}>English</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: colors.surfaceBorder }]} />
          <View style={styles.infoRow}>
            <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Trial Status</Text>
            <Text style={[Typography.body, { color: colors.correct, fontFamily: 'PlusJakartaSans_600SemiBold' }]}>Active</Text>
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
  profileCard: {
    alignItems: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.md,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  avatarEmoji: {
    fontSize: 40,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  divider: {
    height: 1,
  },
});
