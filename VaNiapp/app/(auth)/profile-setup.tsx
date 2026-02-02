import React, { useState } from 'react';
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
import { ExamType, Language } from '../../src/types';

const exams: { id: ExamType; label: string; emoji: string }[] = [
  { id: 'NEET', label: 'NEET', emoji: '\uD83E\uDE7A' },
  { id: 'CUET', label: 'CUET', emoji: '\uD83C\uDF93' },
  { id: 'BOTH', label: 'Both', emoji: '\uD83D\uDCAA' },
];

const languages: { id: Language; label: string; native: string }[] = [
  { id: 'en', label: 'English', native: 'English' },
  { id: 'te', label: 'Telugu', native: '\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41' },
];

export default function ProfileSetupScreen() {
  const { colors, mode } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [exam, setExam] = useState<ExamType | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const canContinue = name.trim().length >= 2 && exam !== null;

  const handleContinue = () => {
    if (!canContinue || !exam) return;

    dispatch(
      setUser({
        id: '',
        name: name.trim(),
        email: '',
        exam,
        language,
        trialStartDate: new Date().toISOString(),
        questionsUsed: 0,
        trialQuestionsLimit: 25,
        trialDaysLimit: 3,
      })
    );

    router.replace('/(auth)/trial-welcome');
  };

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
                    onPress={() => setExam(e.id)}
                    style={[
                      styles.chip,
                      {
                        backgroundColor:
                          exam === e.id
                            ? colors.primary
                            : colors.surface,
                        borderColor:
                          exam === e.id
                            ? colors.primary
                            : colors.surfaceBorder,
                      },
                    ]}
                  >
                    <Text style={styles.chipEmoji}>{e.emoji}</Text>
                    <Text
                      style={[
                        Typography.body,
                        {
                          color: exam === e.id
                            ? (mode === 'dark' ? '#0F172A' : '#FFFFFF')
                            : colors.text,
                          fontFamily: 'PlusJakartaSans_600SemiBold',
                        },
                      ]}
                    >
                      {e.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </JournalCard>

          {/* Language */}
          <StickyNote color="teal" rotation={-1} delay={300}>
            <View style={styles.section}>
              <Text style={[Typography.h3, { color: colors.text }]}>
                Preferred language?
              </Text>
              <View style={styles.chips}>
                {languages.map((l) => (
                  <Pressable
                    key={l.id}
                    onPress={() => setLanguage(l.id)}
                    style={[
                      styles.chip,
                      {
                        backgroundColor:
                          language === l.id
                            ? colors.primary
                            : colors.surface,
                        borderColor:
                          language === l.id
                            ? colors.primary
                            : colors.surfaceBorder,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        Typography.body,
                        {
                          color: language === l.id
                            ? (mode === 'dark' ? '#0F172A' : '#FFFFFF')
                            : colors.text,
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
  chipEmoji: {
    fontSize: 20,
  },
  actions: {
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
});
