import { Stack } from 'expo-router';
import { useTheme } from '../../src/hooks/useTheme';

export default function AuthLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="profile-setup" />
      <Stack.Screen name="subject-picker" />
      <Stack.Screen name="trial-welcome" options={{ animation: 'fade' }} />
    </Stack>
  );
}
