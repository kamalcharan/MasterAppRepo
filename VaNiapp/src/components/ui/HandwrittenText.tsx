import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Typography } from '../../constants/theme';

type Variant = 'hand' | 'handLg' | 'handSm' | 'doodle';

interface Props {
  children: string;
  variant?: Variant;
  color?: string;
  rotation?: number;
  style?: TextStyle;
}

export const HandwrittenText: React.FC<Props> = ({
  children,
  variant = 'hand',
  color,
  rotation = 0,
  style,
}) => {
  const { colors } = useTheme();

  return (
    <Text
      style={[
        Typography[variant],
        {
          color: color || colors.textSecondary,
          transform: [{ rotate: `${rotation}deg` }],
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};
