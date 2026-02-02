import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { Typography, Spacing } from '../constants/theme';

const logo = require('../../assets/logo.png');

interface Props {
  onFinish: () => void;
}

export const SplashScreen: React.FC<Props> = ({ onFinish }) => {
  const { colors } = useTheme();
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoRotate = useRef(new Animated.Value(-15)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(20)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Logo spring in
    Animated.parallel([
      Animated.spring(logoScale, {
        toValue: 1,
        damping: 12,
        stiffness: 100,
        useNativeDriver: true,
      }),
      Animated.spring(logoRotate, {
        toValue: 0,
        damping: 12,
        useNativeDriver: true,
      }),
    ]).start();

    // Title fade in after 400ms
    const titleTimer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(titleTranslateY, {
          toValue: 0,
          damping: 14,
          useNativeDriver: true,
        }),
      ]).start();
    }, 400);

    // Tagline fade in after 800ms
    const taglineTimer = setTimeout(() => {
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 800);

    // Finish after 2500ms
    const finishTimer = setTimeout(onFinish, 2500);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(taglineTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  const logoRotateInterpolated = logoRotate.interpolate({
    inputRange: [-15, 0],
    outputRange: ['-15deg', '0deg'],
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [
              { scale: logoScale },
              { rotate: logoRotateInterpolated },
            ],
          },
        ]}
      >
        <Image source={logo} style={styles.logoImage} resizeMode="contain" />
      </Animated.View>

      <Animated.View style={{ opacity: titleOpacity, transform: [{ translateY: titleTranslateY }] }}>
        <Text style={[Typography.display, { color: colors.text, textAlign: 'center' }]}>
          VaNi
        </Text>
      </Animated.View>

      <Animated.View style={{ opacity: taglineOpacity }}>
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
  logoImage: {
    width: 180,
    height: 180,
  },
});
