import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
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

  return (
    <Animated.View
      entering={FadeInDown.delay(delay).springify().damping(18)}
      style={[
        styles.card,
        shadow,
        {
          backgroundColor: colors.card,
          borderColor: colors.cardBorder,
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
  card: {
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    borderWidth: 1,
  },
});
