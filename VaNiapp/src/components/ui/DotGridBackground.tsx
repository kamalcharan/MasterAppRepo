import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useTheme } from '../../hooks/useTheme';
import { DotGrid } from '../../constants/theme';

interface Props {
  children: React.ReactNode;
}

export const DotGridBackground: React.FC<Props> = ({ children }) => {
  const { colors } = useTheme();
  const cols = 20;
  const rows = 40;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Svg width="100%" height="100%">
          {Array.from({ length: rows }, (_, row) =>
            Array.from({ length: cols }, (_, col) => (
              <Circle
                key={`${row}-${col}`}
                cx={col * DotGrid.spacing + DotGrid.spacing / 2}
                cy={row * DotGrid.spacing + DotGrid.spacing / 2}
                r={DotGrid.size}
                fill={colors.dotGrid}
              />
            ))
          )}
        </Svg>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
