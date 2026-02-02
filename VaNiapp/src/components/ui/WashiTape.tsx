import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

interface Props {
  width?: number;
  rotation?: number;
  color?: string;
}

export const WashiTape: React.FC<Props> = ({
  width = 80,
  rotation = 3,
  color,
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.tape,
        {
          width,
          backgroundColor: color || colors.washiTape,
          transform: [{ rotate: `${rotation}deg` }],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  tape: {
    height: 15,
    borderRadius: 2,
  },
});
