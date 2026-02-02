import { createContext, useContext } from 'react';
import { Colors } from '../constants/theme';
import { ThemeMode } from '../types';

export type ThemeColors = typeof Colors.light | typeof Colors.dark;

export interface ThemeContextValue {
  mode: ThemeMode;
  colors: ThemeColors;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  mode: 'light',
  colors: Colors.light,
  toggle: () => {},
});

export const useTheme = () => useContext(ThemeContext);
