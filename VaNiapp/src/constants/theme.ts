export const Colors = {
  light: {
    background: '#fdfcf0',
    surface: '#FFFFFF',
    surfaceBorder: '#E5E7EB',
    card: '#FFFFFF',
    cardBorder: '#F3F4F6',
    text: '#0F172A',
    textSecondary: '#64748B',
    textTertiary: '#94A3B8',
    primary: '#2563EB',
    primaryLight: '#DBEAFE',
    primaryDark: '#1D4ED8',
    // Highlighter palette
    highlighterYellow: '#FEF08A',
    highlighterPink: '#FBCFE8',
    highlighterTeal: '#99F6E4',
    // Subject colors
    physics: '#3B82F6',
    chemistry: '#F97316',
    botany: '#22C55E',
    zoology: '#A855F7',
    // Functional
    correct: '#16A34A',
    correctBg: '#DCFCE7',
    incorrect: '#DC2626',
    incorrectBg: '#FEE2E2',
    skipped: '#9CA3AF',
    skippedBg: '#F3F4F6',
    warning: '#F59E0B',
    // UI
    tabBar: '#FFFFFF',
    tabBarBorder: '#E5E7EB',
    tabActive: '#2563EB',
    tabInactive: '#9CA3AF',
    dotGrid: '#D1D5DB',
    washiTape: 'rgba(251, 207, 232, 0.6)',
  },
  dark: {
    background: '#121212',
    surface: '#1E1E1E',
    surfaceBorder: '#2A2A2A',
    card: '#1E293B',
    cardBorder: '#334155',
    text: '#F1F5F9',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    primary: '#3B82F6',
    primaryLight: '#1E3A5F',
    primaryDark: '#60A5FA',
    highlighterYellow: '#854D0E',
    highlighterPink: '#9D174D',
    highlighterTeal: '#115E59',
    physics: '#60A5FA',
    chemistry: '#FB923C',
    botany: '#4ADE80',
    zoology: '#C084FC',
    correct: '#4ADE80',
    correctBg: '#14532D',
    incorrect: '#F87171',
    incorrectBg: '#7F1D1D',
    skipped: '#6B7280',
    skippedBg: '#1F2937',
    warning: '#FBBF24',
    tabBar: '#1E1E1E',
    tabBarBorder: '#2A2A2A',
    tabActive: '#60A5FA',
    tabInactive: '#6B7280',
    dotGrid: '#262626',
    washiTape: 'rgba(157, 23, 77, 0.4)',
  },
} as const;

export const Typography = {
  display: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 40,
    lineHeight: 44,
    letterSpacing: -1.5,
  },
  h1: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -0.8,
  },
  h2: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.4,
  },
  h3: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 18,
    lineHeight: 24,
  },
  body: {
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  bodySm: {
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  hand: {
    fontFamily: 'Caveat_700Bold',
    fontSize: 22,
    lineHeight: 28,
  },
  handLg: {
    fontFamily: 'Caveat_700Bold',
    fontSize: 32,
    lineHeight: 38,
  },
  handSm: {
    fontFamily: 'Caveat_700Bold',
    fontSize: 18,
    lineHeight: 22,
  },
  doodle: {
    fontFamily: 'IndieFlower_400Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  label: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
  },
  button: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 18,
    lineHeight: 24,
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const BorderRadius = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  round: 9999,
} as const;

export const DotGrid = {
  size: 1.2,
  spacing: 24,
} as const;

export const Shadows = {
  puffy: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 25,
    elevation: 3,
  },
  puffyDark: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 25,
    elevation: 5,
  },
} as const;
