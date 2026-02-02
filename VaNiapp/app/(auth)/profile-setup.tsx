import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { StickyNote } from '../../src/components/ui/StickyNote';
import { PuffyButton } from '../../src/components/ui/PuffyButton';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';
import { useDispatch } from 'react-redux';
import { setUser } from '../../src/store/slices/authSlice';
import {
  ExamType,
  Language,
  SubjectId,
  SubjectCategory,
  CUET_SUBJECTS,
  CUET_MAX_SUBJECTS,
  NEET_SUBJECT_IDS,
} from '../../src/types';

const exams: { id: ExamType; label: string; emoji: string; desc: string }[] = [
  { id: 'NEET', label: 'NEET', emoji: '\uD83E\uDE7A', desc: '4 subjects (fixed)' },
  { id: 'CUET', label: 'CUET', emoji: '\uD83C\uDF93', desc: 'Pick up to 6' },
  { id: 'BOTH', label: 'Both', emoji: '\uD83D\uDCAA', desc: 'NEET + CUET subjects' },
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

export default function ProfileSetupScreen() {
  const { colors, mode } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [exam, setExam] = useState<ExamType | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [cuetSubjects, setCuetSubjects] = useState<SubjectId[]>([]);

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

  const getSelectedSubjects = (): SubjectId[] => {
    if (exam === 'NEET') return [...NEET_SUBJECT_IDS];
    if (exam === 'CUET') return cuetSubjects;
    if (exam === 'BOTH') {
      const combined = new Set<SubjectId>([...NEET_SUBJECT_IDS, ...cuetSubjects]);
      return Array.from(combined);
    }
    return [];
  };

  const canContinue =
    name.trim().length >= 2 &&
    exam !== null &&
    (!needsSubjectPicker || cuetSubjects.length >= 1);

  const handleContinue = () => {
    if (!canContinue || !exam) return;

    dispatch(
      setUser({
        id: '',
        name: name.trim(),
        email: '',
        exam,
        language,
        selectedSubjects: getSelectedSubjects(),
        trialStartDate: new Date().toISOString(),
        questionsUsed: 0,
        trialQuestionsLimit: 25,
        trialDaysLimit: 3,
      })
    );

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
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.headerEmoji}>{'\uD83D\uDCDD'}</Text>
            <Text style={[Typography.h1, { color: colors.text }]}>About You</Text>
            <HandwrittenText variant="hand" rotation={-1}>
              tell us a bit...
            </HandwrittenText>
          </View>

          {/* Name */}
          <JournalCard rotation={-0.3} delay={100}>
            <View style={styles.section}>
              <Text style={[Typography.h3, { color: colors.text }]}>What should we call you?</Text>
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
          <JournalCard rotation={0.3} delay={200}>
            <View style={styles.section}>
              <Text style={[Typography.h3, { color: colors.text }]}>Which exam?</Text>
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
                    <Text style={styles.chipEmoji}>{e.emoji}</Text>
                    <View>
                      <Text
                        style={[
                          Typography.body,
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
                          Typography.bodySm,
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

          {/* CUET Subject Picker */}
          {needsSubjectPicker && (
            <JournalCard rotation={-0.2} delay={300}>
              <View style={styles.section}>
                <View style={styles.subjectHeader}>
                  <Text style={[Typography.h3, { color: colors.text }]}>
                    Pick your CUET subjects
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
                    {cuetSubjects.length}/{CUET_MAX_SUBJECTS} selected
                  </Text>
                </View>

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
                                isDisabled && { opacity: 0.4 },
                              ]}
                            >
                              <Text style={styles.subjectChipEmoji}>{subj.emoji}</Text>
                              <Text
                                style={[
                                  Typography.bodySm,
                                  {
                                    color: selectedTextColor(isSelected),
                                    fontFamily: 'PlusJakartaSans_600SemiBold',
                                  },
                                ]}
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

                {exam === 'BOTH' && (
                  <StickyNote color="yellow" rotation={0.5}>
                    <HandwrittenText variant="handSm">
                      NEET subjects (Physics, Chemistry, Botany, Zoology) are auto-included!
                    </HandwrittenText>
                  </StickyNote>
                )}
              </View>
            </JournalCard>
          )}

          {/* Language */}
          <StickyNote color="teal" rotation={-1} delay={needsSubjectPicker ? 400 : 300}>
            <View style={styles.section}>
              <Text style={[Typography.h3, { color: colors.text }]}>
                Preferred language?
              </Text>
              <View style={styles.chips}>
                {languages.map((l) => (
                  <Pressable
                    key={l.id}
                    onPress={() => setLanguage(l.id)}
                    style={[styles.chip, selectedColor(language === l.id)]}
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
              <HandwrittenText variant="handSm">
                you can switch anytime!
              </HandwrittenText>
            </View>
          </StickyNote>

          <View style={styles.actions}>
            <PuffyButton
              title="Continue"
              icon={'\u2728'}
              onPress={handleContinue}
              disabled={!canContinue}
            />
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
    padding: Spacing.xl,
    gap: Spacing.xl,
    paddingBottom: Spacing.xxxl,
  },
  header: {
    alignItems: 'center',
    gap: Spacing.md,
    marginTop: Spacing.lg,
  },
  headerEmoji: {
    fontSize: 48,
  },
  section: {
    gap: Spacing.md,
  },
  subjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    gap: Spacing.md,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
  },
  examChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    flex: 1,
    minWidth: '45%' as unknown as number,
  },
  chipEmoji: {
    fontSize: 24,
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
  subjectChipEmoji: {
    fontSize: 16,
  },
  actions: {
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
});
