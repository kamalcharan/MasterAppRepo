import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
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

  return (
    <Animated.View
      entering={FadeInDown.delay(delay).springify().damping(18)}
      style={[
        styles.note,
        shadow,
        {
          backgroundColor: bg,
          borderTopColor: mode === 'dark' ? colorMap[color].light : colorMap[color].dark,
          transform: [{ rotate: `${rotation}deg` }],
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
