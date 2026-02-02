import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius, Shadows } from '../../src/constants/theme';
import { SUBJECT_META } from '../../src/constants/subjects';
import { NeetSubjectId, NEET_SUBJECT_IDS } from '../../src/types';
import { getChaptersBySubject } from '../../src/data/chapters';

export default function SubjectSelectScreen() {
  const { colors, mode } = useTheme();
  const router = useRouter();

  const handleSubject = (subjectId: NeetSubjectId) => {
    router.push({ pathname: '/(exam)/chapter-select', params: { subjectId } });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={handleBack} style={styles.backBtn}>
            <Text style={[styles.backArrow, { color: colors.text }]}>{'<'}</Text>
          </Pressable>
          <View style={styles.headerText}>
            <HandwrittenText variant="hand">Chapter Exam</HandwrittenText>
            <Text style={[Typography.bodySm, { color: colors.textSecondary, marginTop: 2 }]}>
              Pick a subject to practice
            </Text>
          </View>
        </View>

        {/* Subject Cards */}
        <View style={styles.grid}>
          {NEET_SUBJECT_IDS.map((id, idx) => {
            const meta = SUBJECT_META[id];
            const chapters = getChaptersBySubject(id);
            const totalQs = chapters.reduce((sum, ch) => sum + ch.questionCount, 0);

            return (
              <Pressable key={id} onPress={() => handleSubject(id)} style={{ width: '47%' }}>
                <JournalCard delay={100 + idx * 80} style={styles.card}>
                  <View style={[styles.emojiCircle, { backgroundColor: meta.color + '20' }]}>
                    <Text style={styles.emoji}>{meta.emoji}</Text>
                  </View>
                  <Text
                    style={[Typography.h3, { color: colors.text, marginTop: Spacing.md, textAlign: 'center' }]}
                    numberOfLines={1}
                  >
                    {meta.name}
                  </Text>
                  <Text style={[Typography.bodySm, { color: colors.textSecondary, marginTop: 4, textAlign: 'center' }]}>
                    {chapters.length} chapters  {totalQs} Qs
                  </Text>
                </JournalCard>
              </Pressable>
            );
          })}
        </View>
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
    marginBottom: Spacing.xl,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  backArrow: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 22,
  },
  headerText: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
  },
  emojiCircle: {
    width: 64,
    height: 64,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 32,
  },
});
