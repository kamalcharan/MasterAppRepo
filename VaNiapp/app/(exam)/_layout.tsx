import { Stack } from 'expo-router';
import { useTheme } from '../../src/hooks/useTheme';

export default function ExamLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="subject-select" />
      <Stack.Screen name="chapter-select" />
      <Stack.Screen name="chapter-question" />
      <Stack.Screen name="chapter-results" />
      <Stack.Screen name="practice-start" />
      <Stack.Screen name="practice-question" options={{ gestureEnabled: false }} />
      <Stack.Screen name="practice-results" />
    </Stack>
  );
}
