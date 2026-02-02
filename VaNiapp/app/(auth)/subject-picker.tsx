import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { StickyNote } from '../../src/components/ui/StickyNote';
import { PuffyButton } from '../../src/components/ui/PuffyButton';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';
import { updateSubjects } from '../../src/store/slices/authSlice';
import { RootState } from '../../src/store';
import {
  SubjectId,
  SubjectCategory,
  CUET_SUBJECTS,
  CUET_MAX_SUBJECTS,
  NEET_SUBJECT_IDS,
} from '../../src/types';

const CATEGORY_ORDER: SubjectCategory[] = [
  'Science',
  'Commerce',
  'Arts / Humanities',
  'Other',
  'General Test',
];

export default function SubjectPickerScreen() {
  const { colors, mode } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const isBoth = user?.exam === 'BOTH';
  const [selected, setSelected] = useState<SubjectId[]>([]);

  const groupedSubjects = useMemo(() => {
    const groups: Record<string, typeof CUET_SUBJECTS> = {};
    for (const cat of CATEGORY_ORDER) {
      const items = CUET_SUBJECTS.filter((s) => s.category === cat);
      if (items.length > 0) groups[cat] = items;
    }
    return groups;
  }, []);

  const toggleSubject = (id: SubjectId) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id);
      if (prev.length >= CUET_MAX_SUBJECTS) return prev;
      return [...prev, id];
    });
  };

  const handleConfirm = () => {
    if (selected.length < 1) return;

    let finalSubjects: SubjectId[];
    if (isBoth) {
      const combined = new Set<SubjectId>([...NEET_SUBJECT_IDS, ...selected]);
      finalSubjects = Array.from(combined);
    } else {
      finalSubjects = selected;
    }

    dispatch(updateSubjects(finalSubjects));
    router.replace('/(auth)/trial-welcome');
  };

  const selectedColor = (active: boolean) => ({
    backgroundColor: active ? colors.primary : colors.surface,
    borderColor: active ? colors.primary : colors.surfaceBorder,
  });

  const selectedTextColor = (active: boolean) =>
    active ? (mode === 'dark' ? '#0F172A' : '#FFFFFF') : colors.text;

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.headerSection}>
          <Text style={styles.headerEmoji}>{'\uD83D\uDCDA'}</Text>
          <Text style={[Typography.h1, { color: colors.text }]}>Pick Your Subjects</Text>
          <HandwrittenText variant="hand" rotation={-1}>
            {isBoth ? 'NEET 4 auto-included + pick CUET' : 'choose up to 6 for CUET'}
          </HandwrittenText>

          <View style={styles.counter}>
            <Text
              style={[
                Typography.h3,
                {
                  color: selected.length >= CUET_MAX_SUBJECTS
                    ? colors.warning
                    : colors.primary,
                },
              ]}
            >
              {selected.length} / {CUET_MAX_SUBJECTS}
            </Text>
            <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>
              selected
            </Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          {isBoth && (
            <StickyNote color="yellow" rotation={0.5} delay={0}>
              <HandwrittenText variant="handSm">
                Physics, Chemistry, Botany & Zoology are already in!
              </HandwrittenText>
            </StickyNote>
          )}

          {CATEGORY_ORDER.map((category) => {
            const items = groupedSubjects[category];
            if (!items) return null;
            return (
              <View key={category} style={styles.categoryBlock}>
                <Text style={[Typography.label, { color: colors.textTertiary }]}>
                  {category.toUpperCase()}
                </Text>
                <View style={styles.subjectGrid}>
                  {items.map((subj) => {
                    const isSelected = selected.includes(subj.id);
                    const isDisabled =
                      !isSelected && selected.length >= CUET_MAX_SUBJECTS;
                    return (
                      <Pressable
                        key={subj.id}
                        onPress={() => !isDisabled && toggleSubject(subj.id)}
                        style={[
                          styles.subjectChip,
                          selectedColor(isSelected),
                          isDisabled && { opacity: 0.35 },
                        ]}
                      >
                        <Text style={styles.chipEmoji}>{subj.emoji}</Text>
                        <Text
                          style={[
                            Typography.bodySm,
                            {
                              color: selectedTextColor(isSelected),
                              fontFamily: 'PlusJakartaSans_600SemiBold',
                            },
                          ]}
                          numberOfLines={1}
                        >
                          {subj.name}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.footer}>
          <PuffyButton
            title={`Confirm ${selected.length} Subject${selected.length !== 1 ? 's' : ''}`}
            icon={'\u2728'}
            onPress={handleConfirm}
            disabled={selected.length < 1}
          />
        </View>
      </SafeAreaView>
    </DotGridBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.md,
  },
  headerEmoji: {
    fontSize: 40,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  scroll: {
    padding: Spacing.xl,
    gap: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  categoryBlock: {
    gap: Spacing.md,
  },
  subjectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  subjectChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
  },
  chipEmoji: {
    fontSize: 18,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
  },
});
