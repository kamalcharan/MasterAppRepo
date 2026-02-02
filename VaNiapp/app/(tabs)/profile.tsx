import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { StickyNote } from '../../src/components/ui/StickyNote';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';
import { RootState } from '../../src/store';
import { SUBJECT_META } from '../../src/constants/subjects';

export default function ProfileScreen() {
  const { colors } = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);

  const examLabel =
    user?.exam === 'BOTH' ? 'NEET + CUET' : user?.exam ?? 'NEET';
  const langLabel = user?.language === 'te' ? 'Telugu' : 'English';
  const subjectNames = (user?.selectedSubjects ?? [])
    .map((id) => SUBJECT_META[id]?.name ?? id)
    .join(', ');

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          <View style={styles.header}>
            <Text style={{ fontSize: 24 }}>{'\u270D\uFE0F'}</Text>
            <Text style={[Typography.h1, { color: colors.text }]}>About Me</Text>
          </View>

          <StickyNote color="teal" rotation={1} delay={100}>
            <View style={styles.profileCard}>
              <View style={[styles.avatar, { backgroundColor: colors.primaryLight }]}>
                <Text style={styles.avatarEmoji}>{'\uD83E\uDDD1\u200D\uD83C\uDF93'}</Text>
              </View>
              <Text style={[Typography.h2, { color: colors.text }]}>
                {user?.name ?? 'Student'}
              </Text>
              <HandwrittenText variant="hand">{`${examLabel} Aspirant`}</HandwrittenText>
            </View>
          </StickyNote>

          <JournalCard delay={200}>
            <View style={styles.infoRow}>
              <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Exam</Text>
              <Text style={[Typography.body, { color: colors.text, fontFamily: 'PlusJakartaSans_600SemiBold' }]}>
                {examLabel}
              </Text>
            </View>
            <View style={[styles.divider, { backgroundColor: colors.surfaceBorder }]} />
            <View style={styles.infoRow}>
              <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Language</Text>
              <Text style={[Typography.body, { color: colors.text, fontFamily: 'PlusJakartaSans_600SemiBold' }]}>
                {langLabel}
              </Text>
            </View>
            <View style={[styles.divider, { backgroundColor: colors.surfaceBorder }]} />
            <View style={styles.infoRow}>
              <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>Trial Status</Text>
              <Text style={[Typography.body, { color: colors.correct, fontFamily: 'PlusJakartaSans_600SemiBold' }]}>
                Active
              </Text>
            </View>
          </JournalCard>

          {subjectNames.length > 0 && (
            <JournalCard rotation={-0.5} delay={300}>
              <Text style={[Typography.label, { color: colors.textTertiary, marginBottom: Spacing.md }]}>
                MY SUBJECTS
              </Text>
              <View style={styles.subjectChips}>
                {(user?.selectedSubjects ?? []).map((id) => {
                  const meta = SUBJECT_META[id];
                  if (!meta) return null;
                  return (
                    <View
                      key={id}
                      style={[styles.subjectChip, { backgroundColor: meta.color + '18' }]}
                    >
                      <Text style={styles.chipEmoji}>{meta.emoji}</Text>
                      <Text style={[Typography.bodySm, { color: colors.text }]}>
                        {meta.name}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </JournalCard>
          )}
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
    alignItems: 'center',
    gap: 12,
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
  subjectChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  subjectChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
  },
  chipEmoji: {
    fontSize: 16,
  },
});
