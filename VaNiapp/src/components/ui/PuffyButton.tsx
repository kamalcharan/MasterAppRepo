import React, { useRef } from 'react';
import { Text, StyleSheet, Pressable, ViewStyle, TextStyle, Animated } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../../hooks/useTheme';
import { Typography, BorderRadius, Spacing, Shadows } from '../../constants/theme';

interface Props {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: string;
  disabled?: boolean;
  style?: ViewStyle;
}

export const PuffyButton: React.FC<Props> = ({
  title,
  onPress,
  variant = 'primary',
  icon,
  disabled = false,
  style,
}) => {
  const { colors, mode } = useTheme();
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      damping: 15,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      damping: 10,
      stiffness: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  const bgColor =
    variant === 'primary'
      ? mode === 'dark' ? '#FFFFFF' : '#0F172A'
      : variant === 'secondary'
        ? colors.primaryLight
        : 'transparent';

  const textColor =
    variant === 'primary'
      ? mode === 'dark' ? '#0F172A' : '#FFFFFF'
      : colors.primary;

  const shadow = variant !== 'ghost' ? (mode === 'dark' ? Shadows.puffyDark : Shadows.puffy) : {};

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        style={[
          styles.button,
          shadow,
          {
            backgroundColor: bgColor,
            opacity: disabled ? 0.5 : 1,
            borderWidth: variant === 'ghost' ? 1 : 0,
            borderColor: variant === 'ghost' ? colors.surfaceBorder : undefined,
          },
          style,
        ]}
      >
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <Text style={[Typography.button, { color: textColor } as TextStyle]}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.md,
    paddingVertical: Spacing.lg + 4,
    paddingHorizontal: Spacing.xxl,
    borderRadius: BorderRadius.xl,
  },
  icon: {
    fontSize: 20,
  },
});
