import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { useTheme } from '../hooks/useTheme';
import { Typography, Spacing } from '../constants/theme';

interface Props {
  onFinish: () => void;
}

export const SplashScreen: React.FC<Props> = ({ onFinish }) => {
  const { colors } = useTheme();
  const logoScale = useSharedValue(0);
  const logoRotate = useSharedValue(-15);
  const titleOpacity = useSharedValue(0);
  const titleTranslateY = useSharedValue(20);
  const taglineOpacity = useSharedValue(0);

  useEffect(() => {
    logoScale.value = withSpring(1, { damping: 12, stiffness: 100 });
    logoRotate.value = withSpring(0, { damping: 12 });
    titleOpacity.value = withDelay(400, withTiming(1, { duration: 500 }));
    titleTranslateY.value = withDelay(400, withSpring(0, { damping: 14 }));
    taglineOpacity.value = withDelay(800, withTiming(1, { duration: 500 }));

    const timer = setTimeout(() => {
      runOnJS(onFinish)();
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const logoStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { rotate: `${logoRotate.value}deg` },
    ],
  }));

  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{ translateY: titleTranslateY.value }],
  }));

  const taglineStyle = useAnimatedStyle(() => ({
    opacity: taglineOpacity.value,
  }));

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Animated.View style={[styles.logoContainer, logoStyle]}>
        <View style={[styles.logoBg, { backgroundColor: colors.primaryLight }]}>
          <Text style={styles.logoEmoji}>{'\uD83D\uDCD6'}</Text>
          <View style={styles.sparkle}>
            <Text style={styles.sparkleEmoji}>{'\u2728'}</Text>
          </View>
        </View>
      </Animated.View>

      <Animated.View style={titleStyle}>
        <Text style={[Typography.display, { color: colors.text, textAlign: 'center' }]}>
          VaNi
        </Text>
      </Animated.View>

      <Animated.View style={taglineStyle}>
        <Text
          style={[
            Typography.hand,
            { color: colors.textSecondary, textAlign: 'center', marginTop: Spacing.sm },
          ]}
        >
          writing my own future...
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.xl,
  },
  logoContainer: {
    marginBottom: Spacing.lg,
  },
  logoBg: {
    width: 120,
    height: 120,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoEmoji: {
    fontSize: 56,
  },
  sparkle: {
    position: 'absolute',
    top: -8,
    right: -8,
  },
  sparkleEmoji: {
    fontSize: 28,
  },
});
