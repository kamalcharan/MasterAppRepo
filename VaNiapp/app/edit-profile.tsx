import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { DotGridBackground } from '../src/components/ui/DotGridBackground';
import { JournalCard } from '../src/components/ui/JournalCard';
import { StickyNote } from '../src/components/ui/StickyNote';
import { PuffyButton } from '../src/components/ui/PuffyButton';
import { HandwrittenText } from '../src/components/ui/HandwrittenText';
import { useTheme } from '../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../src/constants/theme';
import { RootState } from '../src/store';
import {
  setUser,
  updateSubjects,
} from '../src/store/slices/authSlice';
import {
  ExamType,
  Language,
  SubjectId,
  SubjectCategory,
  CUET_SUBJECTS,
  CUET_MAX_SUBJECTS,
  NEET_SUBJECT_IDS,
} from '../src/types';

const exams: { id: ExamType; label: string; emoji: string; desc: string }[] = [
  { id: 'NEET', label: 'NEET', emoji: '\uD83E\uDE7A', desc: '4 fixed' },
  { id: 'CUET', label: 'CUET', emoji: '\uD83C\uDF93', desc: 'Pick 6' },
  { id: 'BOTH', label: 'Both', emoji: '\uD83D\uDCAA', desc: 'NEET + CUET' },
];

const languages: { id: Language; label: string; native: string }[] = [
  { id: 'en', label: 'English', native: 'English' },
  { id: 'te', label: 'Telugu', native: '\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41' },
];

const CATEGORY_ORDER: SubjectCategory[] = [
  'Science',
  'Commerce',
  'Arts / Humanities',
  'Other',
  'General Test',
];

export default function EditProfileScreen() {
  const { colors, mode } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const [name, setName] = useState(user?.name ?? '');
  const [exam, setExam] = useState<ExamType>(user?.exam ?? 'NEET');
  const [language, setLanguage] = useState<Language>(user?.language ?? 'en');

  // Initialize CUET subjects from current profile (exclude NEET subjects)
  const existingCuet = (user?.selectedSubjects ?? []).filter(
    (id) => !(['physics', 'chemistry', 'botany', 'zoology'] as string[]).includes(id)
  );
  const [cuetSubjects, setCuetSubjects] = useState<SubjectId[]>(existingCuet);

  const needsSubjectPicker = exam === 'CUET' || exam === 'BOTH';

  const groupedSubjects = useMemo(() => {
    const groups: Record<string, typeof CUET_SUBJECTS> = {};
    for (const cat of CATEGORY_ORDER) {
      const items = CUET_SUBJECTS.filter((s) => s.category === cat);
      if (items.length > 0) groups[cat] = items;
    }
    return groups;
  }, []);

  const toggleCuetSubject = (id: SubjectId) => {
    setCuetSubjects((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id);
      if (prev.length >= CUET_MAX_SUBJECTS) return prev;
      return [...prev, id];
    });
  };

  const canSave =
    name.trim().length >= 2 &&
    (!needsSubjectPicker || cuetSubjects.length >= 1);

  const handleSave = () => {
    if (!canSave || !user) return;

    let finalSubjects: SubjectId[];
    if (exam === 'NEET') {
      finalSubjects = [...NEET_SUBJECT_IDS];
    } else if (exam === 'CUET') {
      finalSubjects = cuetSubjects;
    } else {
      const combined = new Set<SubjectId>([...NEET_SUBJECT_IDS, ...cuetSubjects]);
      finalSubjects = Array.from(combined);
    }

    dispatch(
      setUser({
        ...user,
        name: name.trim(),
        exam,
        language,
        selectedSubjects: finalSubjects,
      })
    );

    router.back();
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
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={{ fontSize: 22 }}>{'\u2190'}</Text>
          </Pressable>
          <Text style={[Typography.h2, { color: colors.text }]}>Edit Profile</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Name */}
          <JournalCard rotation={-0.3}>
            <View style={styles.section}>
              <Text style={[Typography.h3, { color: colors.text }]}>Name</Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    color: colors.text,
                    backgroundColor: colors.surface,
                    borderColor: colors.surfaceBorder,
                  },
                ]}
                placeholder="Your name"
                placeholderTextColor={colors.textTertiary}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>
          </JournalCard>

          {/* Exam */}
          <JournalCard rotation={0.2}>
            <View style={styles.section}>
              <Text style={[Typography.h3, { color: colors.text }]}>Exam</Text>
              <View style={styles.chips}>
                {exams.map((e) => (
                  <Pressable
                    key={e.id}
                    onPress={() => {
                      setExam(e.id);
                      if (e.id === 'NEET') setCuetSubjects([]);
                    }}
                    style={[styles.examChip, selectedColor(exam === e.id)]}
                  >
                    <Text style={{ fontSize: 20 }}>{e.emoji}</Text>
                    <View>
                      <Text
                        style={[
                          Typography.bodySm,
                          {
                            color: selectedTextColor(exam === e.id),
                            fontFamily: 'PlusJakartaSans_600SemiBold',
                          },
                        ]}
                      >
                        {e.label}
                      </Text>
                      <Text
                        style={[
                          { fontSize: 11, fontFamily: 'PlusJakartaSans_400Regular' },
                          {
                            color: exam === e.id
                              ? (mode === 'dark' ? '#334155' : '#DBEAFE')
                              : colors.textTertiary,
                          },
                        ]}
                      >
                        {e.desc}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            </View>
          </JournalCard>

          {/* CUET Subjects */}
          {needsSubjectPicker && (
            <JournalCard rotation={-0.2}>
              <View style={styles.section}>
                <View style={styles.subjectHeader}>
                  <Text style={[Typography.h3, { color: colors.text }]}>
                    CUET Subjects
                  </Text>
                  <Text
                    style={[
                      Typography.bodySm,
                      {
                        color: cuetSubjects.length >= CUET_MAX_SUBJECTS
                          ? colors.warning
                          : colors.textSecondary,
                      },
                    ]}
                  >
                    {cuetSubjects.length}/{CUET_MAX_SUBJECTS}
                  </Text>
                </View>

                {exam === 'BOTH' && (
                  <StickyNote color="yellow" rotation={0.5}>
                    <HandwrittenText variant="handSm">
                      NEET subjects auto-included!
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
                      <View style={styles.subjectChips}>
                        {items.map((subj) => {
                          const isSelected = cuetSubjects.includes(subj.id);
                          const isDisabled =
                            !isSelected && cuetSubjects.length >= CUET_MAX_SUBJECTS;
                          return (
                            <Pressable
                              key={subj.id}
                              onPress={() => !isDisabled && toggleCuetSubject(subj.id)}
                              style={[
                                styles.subjectChip,
                                selectedColor(isSelected),
                                isDisabled && { opacity: 0.35 },
                              ]}
                            >
                              <Text style={{ fontSize: 15 }}>{subj.emoji}</Text>
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
              </View>
            </JournalCard>
          )}

          {/* Language */}
          <StickyNote color="teal" rotation={-1}>
            <View style={styles.section}>
              <Text style={[Typography.h3, { color: colors.text }]}>Language</Text>
              <View style={styles.chips}>
                {languages.map((l) => (
                  <Pressable
                    key={l.id}
                    onPress={() => setLanguage(l.id)}
                    style={[styles.langChip, selectedColor(language === l.id)]}
                  >
                    <Text
                      style={[
                        Typography.body,
                        {
                          color: selectedTextColor(language === l.id),
                          fontFamily: 'PlusJakartaSans_600SemiBold',
                        },
                      ]}
                    >
                      {l.native}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </StickyNote>
        </ScrollView>

        {/* Save */}
        <View style={styles.footer}>
          <PuffyButton
            title="Save Changes"
            icon={'\u2728'}
            onPress={handleSave}
            disabled={!canSave}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    padding: Spacing.xl,
    gap: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  section: {
    gap: Spacing.md,
  },
  input: {
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md + 4,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  examChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
  },
  langChip: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
  },
  subjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBlock: {
    gap: Spacing.sm,
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
    paddingVertical: Spacing.sm + 2,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
  },
});
