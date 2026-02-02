import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { PuffyButton } from '../../src/components/ui/PuffyButton';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';
import { supabase } from '../../src/lib/supabase';
import { useDispatch } from 'react-redux';
import { setAuthenticated, setOnboardingComplete } from '../../src/store/slices/authSlice';

export default function SignInScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Oops', 'Please fill in all fields');
      return;
    }

    setLoading(true);

    if (supabase) {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        Alert.alert('Sign In Failed', error.message);
        setLoading(false);
        return;
      }
    }

    dispatch(setAuthenticated(true));
    dispatch(setOnboardingComplete());
    setLoading(false);
    router.replace('/(tabs)');
  };

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.header}>
              <Text style={styles.headerEmoji}>{'\uD83D\uDC4B'}</Text>
              <Text style={[Typography.h1, { color: colors.text }]}>
                Welcome Back
              </Text>
              <HandwrittenText variant="hand" rotation={1}>
                missed you bestie
              </HandwrittenText>
            </View>

            <JournalCard rotation={0.3}>
              <View style={styles.form}>
                <View style={styles.field}>
                  <Text style={[Typography.label, { color: colors.textSecondary }]}>EMAIL</Text>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        color: colors.text,
                        backgroundColor: colors.surface,
                        borderColor: colors.surfaceBorder,
                      },
                    ]}
                    placeholder="you@email.com"
                    placeholderTextColor={colors.textTertiary}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                  />
                </View>

                <View style={styles.field}>
                  <Text style={[Typography.label, { color: colors.textSecondary }]}>PASSWORD</Text>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        color: colors.text,
                        backgroundColor: colors.surface,
                        borderColor: colors.surfaceBorder,
                      },
                    ]}
                    placeholder="your password"
                    placeholderTextColor={colors.textTertiary}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </View>
              </View>
            </JournalCard>

            <View style={styles.actions}>
              <PuffyButton
                title={loading ? 'Signing In...' : 'Sign In'}
                icon={'\u2728'}
                onPress={handleSignIn}
                disabled={loading}
              />

              <PuffyButton
                title="Don't have an account? Sign Up"
                variant="ghost"
                onPress={() => router.push('/(auth)/sign-up')}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </DotGridBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    padding: Spacing.xl,
    justifyContent: 'center',
    gap: Spacing.xxl,
  },
  header: {
    alignItems: 'center',
    gap: Spacing.md,
  },
  headerEmoji: {
    fontSize: 48,
  },
  form: {
    gap: Spacing.xl,
  },
  field: {
    gap: Spacing.sm,
  },
  input: {
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md + 4,
  },
  actions: {
    alignItems: 'center',
    gap: Spacing.md,
  },
});
