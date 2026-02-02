import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Animated } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { BorderRadius, Spacing, Shadows } from '../../constants/theme';

interface Props {
  children: React.ReactNode;
  rotation?: number;
  delay?: number;
  style?: StyleProp<ViewStyle>;
}

export const JournalCard: React.FC<Props> = ({
  children,
  rotation = 0,
  delay = 0,
  style,
}) => {
  const { colors, mode } = useTheme();
  const shadow = mode === 'dark' ? Shadows.puffyDark : Shadows.puffy;

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.parallel([
        Animated.spring(opacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          damping: 18,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View
      style={[
        styles.card,
        shadow,
        {
          backgroundColor: colors.card,
          borderColor: colors.cardBorder,
          transform: [{ rotate: `${rotation}deg` }, { translateY }],
          opacity,
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    borderWidth: 1,
  },
});
