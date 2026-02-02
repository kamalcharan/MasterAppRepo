import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';

import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { StickyNote } from '../../src/components/ui/StickyNote';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';
import { SUBJECT_META } from '../../src/constants/subjects';
import { NeetSubjectId } from '../../src/types';
import { getChaptersBySubject } from '../../src/data/chapters';
import { RootState } from '../../src/store';

export default function ChapterSelectScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const { subjectId } = useLocalSearchParams<{ subjectId: NeetSubjectId }>();
  const language = useSelector((state: RootState) => state.auth.user?.language ?? 'en');

  const subject = subjectId ? SUBJECT_META[subjectId] : null;
  const chapters = subjectId ? getChaptersBySubject(subjectId as NeetSubjectId) : [];

  const handleChapter = (chapterId: string) => {
    router.push({ pathname: '/(exam)/chapter-question', params: { chapterId } });
  };

  const handleBack = () => {
    router.back();
  };

  if (!subject || !subjectId) return null;

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={handleBack} style={styles.backBtn}>
            <Text style={[styles.backArrow, { color: colors.text }]}>{'<'}</Text>
          </Pressable>
          <View style={styles.headerText}>
            <Text style={styles.subjectEmoji}>{subject.emoji}</Text>
            <HandwrittenText variant="hand">{subject.name}</HandwrittenText>
          </View>
        </View>

        {/* Info */}
        <StickyNote color="teal" rotation={-0.5} delay={50}>
          <Text style={[Typography.bodySm, { color: colors.text }]}>
            Pick a chapter below. Each has 25 questions with instant feedback after every answer.
          </Text>
        </StickyNote>

        {/* Chapter Cards */}
        <View style={styles.chapterList}>
          {chapters.map((chapter, idx) => (
            <Pressable key={chapter.id} onPress={() => handleChapter(chapter.id)}>
              <JournalCard delay={150 + idx * 100} style={styles.chapterCard}>
                <View style={styles.chapterRow}>
                  <View style={[styles.chapterBadge, { backgroundColor: subject.color + '20' }]}>
                    <Text style={[styles.chapterNum, { color: subject.color }]}>{idx + 1}</Text>
                  </View>
                  <View style={styles.chapterInfo}>
                    <Text style={[Typography.h3, { color: colors.text }]}>
                      {language === 'te' ? chapter.nameTe : chapter.name}
                    </Text>
                    <Text style={[Typography.bodySm, { color: colors.textSecondary, marginTop: 4 }]}>
                      {chapter.questionCount} questions
                    </Text>
                  </View>
                  <Text style={[styles.arrow, { color: colors.textTertiary }]}>{'>'}</Text>
                </View>
              </JournalCard>
            </Pressable>
          ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  subjectEmoji: {
    fontSize: 28,
  },
  chapterList: {
    marginTop: Spacing.lg,
    gap: Spacing.md,
  },
  chapterCard: {
    paddingVertical: Spacing.lg,
  },
  chapterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chapterBadge: {
    width: 44,
    height: 44,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  chapterNum: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 18,
  },
  chapterInfo: {
    flex: 1,
  },
  arrow: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 20,
    marginLeft: Spacing.sm,
  },
});
