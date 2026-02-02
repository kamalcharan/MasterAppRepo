import { useEffect, useState, useMemo, useCallback } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import {
  useFonts,
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans';
import { Caveat_700Bold } from '@expo-google-fonts/caveat';
import { IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import * as NativeSplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '../src/store';
import { Colors } from '../src/constants/theme';
import { ThemeContext, ThemeContextValue } from '../src/hooks/useTheme';
import { ThemeMode } from '../src/types';
import { SplashScreen } from '../src/components/SplashScreen';

NativeSplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const systemScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>(systemScheme === 'dark' ? 'dark' : 'light');
  const [showSplash, setShowSplash] = useState(true);

  const [fontsLoaded, fontError] = useFonts({
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_800ExtraBold,
    Caveat_700Bold,
    IndieFlower_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      NativeSplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const toggleTheme = useCallback(() => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const themeValue = useMemo<ThemeContextValue>(
    () => ({
      mode: themeMode,
      colors: themeMode === 'light' ? Colors.light : Colors.dark,
      toggle: toggleTheme,
    }),
    [themeMode, toggleTheme]
  );

  if (!fontsLoaded && !fontError) {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.light.background, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.light.primary} />
      </View>
    );
  }

  if (showSplash) {
    return (
      <ThemeContext.Provider value={themeValue}>
        <SplashScreen onFinish={() => setShowSplash(false)} />
      </ThemeContext.Provider>
    );
  }

  const colors = themeValue.colors;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeContext.Provider value={themeValue}>
            <StatusBar style={themeMode === 'dark' ? 'light' : 'dark'} />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.background },
                animation: 'fade',
              }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="(exam)" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen
                name="edit-profile"
                options={{
                  presentation: 'modal',
                  animation: 'slide_from_bottom',
                }}
              />
            </Stack>
          </ThemeContext.Provider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
