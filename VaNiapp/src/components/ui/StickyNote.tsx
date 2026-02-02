import React, { useEffect, useRef } from 'react';
import { StyleSheet, StyleProp, ViewStyle, Animated } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { BorderRadius, Spacing, Shadows } from '../../constants/theme';

type StickyColor = 'yellow' | 'pink' | 'teal';

interface Props {
  children: React.ReactNode;
  color?: StickyColor;
  rotation?: number;
  delay?: number;
  style?: StyleProp<ViewStyle>;
}

const colorMap: Record<StickyColor, { light: string; dark: string }> = {
  yellow: { light: '#FEF08A', dark: '#854D0E' },
  pink: { light: '#FBCFE8', dark: '#9D174D' },
  teal: { light: '#99F6E4', dark: '#115E59' },
};

export const StickyNote: React.FC<Props> = ({
  children,
  color = 'yellow',
  rotation = 1,
  delay = 0,
  style,
}) => {
  const { mode } = useTheme();
  const bg = mode === 'dark' ? colorMap[color].dark : colorMap[color].light;
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
        styles.note,
        shadow,
        {
          backgroundColor: bg,
          borderTopColor: mode === 'dark' ? colorMap[color].light : colorMap[color].dark,
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
  note: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    borderTopWidth: 4,
  },
});
