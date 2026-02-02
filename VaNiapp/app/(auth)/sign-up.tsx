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
import { setAuthenticated } from '../../src/store/slices/authSlice';

export default function SignUpScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Oops', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Oops', 'Passwords don\'t match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Oops', 'Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    if (supabase) {
      const { error } = await supabase.auth.signUp({ email: email.trim(), password });

      if (error) {
        Alert.alert('Sign Up Failed', error.message);
        setLoading(false);
        return;
      }
    }

    dispatch(setAuthenticated(true));
    setLoading(false);
    router.replace('/(auth)/profile-setup');
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
              <Text style={styles.headerEmoji}>{'\u270D\uFE0F'}</Text>
              <Text style={[Typography.h1, { color: colors.text }]}>
                Create Account
              </Text>
              <HandwrittenText variant="hand" rotation={-1}>
                join the smart gang
              </HandwrittenText>
            </View>

            <JournalCard rotation={-0.3}>
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
                    placeholder="min. 6 characters"
                    placeholderTextColor={colors.textTertiary}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </View>

                <View style={styles.field}>
                  <Text style={[Typography.label, { color: colors.textSecondary }]}>CONFIRM PASSWORD</Text>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        color: colors.text,
                        backgroundColor: colors.surface,
                        borderColor: colors.surfaceBorder,
                      },
                    ]}
                    placeholder="type it again"
                    placeholderTextColor={colors.textTertiary}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                  />
                </View>
              </View>
            </JournalCard>

            <View style={styles.actions}>
              <PuffyButton
                title={loading ? 'Creating...' : 'Sign Up'}
                icon={'\uD83D\uDE80'}
                onPress={handleSignUp}
                disabled={loading}
              />

              <PuffyButton
                title="Already have an account? Sign In"
                variant="ghost"
                onPress={() => router.push('/(auth)/sign-in')}
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
