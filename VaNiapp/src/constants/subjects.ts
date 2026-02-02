// Subject display metadata — shared across dashboard, profile, and future screens
export const SUBJECT_META: Record<string, { name: string; emoji: string; color: string }> = {
  // NEET subjects
  physics: { name: 'Physics', emoji: '\u269B\uFE0F', color: '#3B82F6' },
  chemistry: { name: 'Chemistry', emoji: '\uD83E\uDDEA', color: '#F97316' },
  botany: { name: 'Botany', emoji: '\uD83C\uDF3F', color: '#22C55E' },
  zoology: { name: 'Zoology', emoji: '\uD83E\uDD8B', color: '#A855F7' },
  // CUET Science
  mathematics: { name: 'Mathematics', emoji: '\uD83D\uDCCF', color: '#EF4444' },
  biology: { name: 'Biology', emoji: '\uD83E\uDDEC', color: '#22C55E' },
  // CUET Commerce
  accountancy: { name: 'Accountancy', emoji: '\uD83D\uDCCA', color: '#14B8A6' },
  'business-studies': { name: 'Business Studies', emoji: '\uD83D\uDCBC', color: '#8B5CF6' },
  economics: { name: 'Economics', emoji: '\uD83D\uDCB9', color: '#F59E0B' },
  // CUET Arts / Humanities
  history: { name: 'History', emoji: '\uD83C\uDFDB\uFE0F', color: '#92400E' },
  geography: { name: 'Geography', emoji: '\uD83C\uDF0D', color: '#059669' },
  'political-science': { name: 'Political Science', emoji: '\uD83D\uDDF3\uFE0F', color: '#6366F1' },
  sociology: { name: 'Sociology', emoji: '\uD83D\uDC65', color: '#EC4899' },
  psychology: { name: 'Psychology', emoji: '\uD83E\uDDE0', color: '#F472B6' },
  philosophy: { name: 'Philosophy', emoji: '\uD83D\uDCA1', color: '#A78BFA' },
  anthropology: { name: 'Anthropology', emoji: '\uD83D\uDD2C', color: '#78716C' },
  // CUET Other
  'computer-science': { name: 'Computer Science', emoji: '\uD83D\uDCBB', color: '#0EA5E9' },
  'environmental-studies': { name: 'Env. Studies', emoji: '\uD83C\uDF3F', color: '#16A34A' },
  'physical-education': { name: 'Physical Ed.', emoji: '\uD83C\uDFC3', color: '#EA580C' },
  'fine-arts': { name: 'Fine Arts', emoji: '\uD83C\uDFA8', color: '#DB2777' },
  'home-science': { name: 'Home Science', emoji: '\uD83C\uDFE0', color: '#D97706' },
  'mass-media': { name: 'Mass Media', emoji: '\uD83D\uDCF0', color: '#4F46E5' },
  // General Test
  'general-test': { name: 'General Test', emoji: '\uD83D\uDDD2\uFE0F', color: '#64748B' },
};
