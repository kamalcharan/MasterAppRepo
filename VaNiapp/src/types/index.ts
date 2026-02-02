export type ThemeMode = 'light' | 'dark';
export type ExamType = 'NEET' | 'CUET' | 'BOTH';
export type Language = 'en' | 'te';

// NEET fixed subjects
export type NeetSubjectId = 'physics' | 'chemistry' | 'botany' | 'zoology';

// All CUET domain subject IDs
export type CuetSubjectId =
  // Science
  | 'physics'
  | 'chemistry'
  | 'mathematics'
  | 'biology'
  // Commerce
  | 'accountancy'
  | 'business-studies'
  | 'economics'
  // Arts / Humanities
  | 'history'
  | 'geography'
  | 'political-science'
  | 'sociology'
  | 'psychology'
  | 'philosophy'
  | 'anthropology'
  // Other Domain
  | 'computer-science'
  | 'environmental-studies'
  | 'physical-education'
  | 'fine-arts'
  | 'home-science'
  | 'mass-media'
  // General Test
  | 'general-test';

export type SubjectId = NeetSubjectId | CuetSubjectId;

export type SubjectCategory =
  | 'Science'
  | 'Commerce'
  | 'Arts / Humanities'
  | 'Other'
  | 'General Test';

export interface SubjectOption {
  id: CuetSubjectId;
  name: string;
  emoji: string;
  category: SubjectCategory;
}

// Full CUET subject catalog
export const CUET_SUBJECTS: SubjectOption[] = [
  // Science
  { id: 'physics', name: 'Physics', emoji: '\u269B\uFE0F', category: 'Science' },
  { id: 'chemistry', name: 'Chemistry', emoji: '\uD83E\uDDEA', category: 'Science' },
  { id: 'mathematics', name: 'Mathematics', emoji: '\uD83D\uDCCF', category: 'Science' },
  { id: 'biology', name: 'Biology / Biotech', emoji: '\uD83E\uDDEC', category: 'Science' },
  // Commerce
  { id: 'accountancy', name: 'Accountancy', emoji: '\uD83D\uDCCA', category: 'Commerce' },
  { id: 'business-studies', name: 'Business Studies', emoji: '\uD83D\uDCBC', category: 'Commerce' },
  { id: 'economics', name: 'Economics', emoji: '\uD83D\uDCB9', category: 'Commerce' },
  // Arts / Humanities
  { id: 'history', name: 'History', emoji: '\uD83C\uDFDB\uFE0F', category: 'Arts / Humanities' },
  { id: 'geography', name: 'Geography', emoji: '\uD83C\uDF0D', category: 'Arts / Humanities' },
  { id: 'political-science', name: 'Political Science', emoji: '\uD83D\uDDF3\uFE0F', category: 'Arts / Humanities' },
  { id: 'sociology', name: 'Sociology', emoji: '\uD83D\uDC65', category: 'Arts / Humanities' },
  { id: 'psychology', name: 'Psychology', emoji: '\uD83E\uDDE0', category: 'Arts / Humanities' },
  { id: 'philosophy', name: 'Philosophy', emoji: '\uD83D\uDCA1', category: 'Arts / Humanities' },
  { id: 'anthropology', name: 'Anthropology', emoji: '\uD83D\uDD2C', category: 'Arts / Humanities' },
  // Other Domain
  { id: 'computer-science', name: 'Computer Science', emoji: '\uD83D\uDCBB', category: 'Other' },
  { id: 'environmental-studies', name: 'Environmental Studies', emoji: '\uD83C\uDF3F', category: 'Other' },
  { id: 'physical-education', name: 'Physical Education', emoji: '\uD83C\uDFC3', category: 'Other' },
  { id: 'fine-arts', name: 'Fine Arts', emoji: '\uD83C\uDFA8', category: 'Other' },
  { id: 'home-science', name: 'Home Science', emoji: '\uD83C\uDFE0', category: 'Other' },
  { id: 'mass-media', name: 'Mass Media / Journalism', emoji: '\uD83D\uDCF0', category: 'Other' },
  // General Test
  { id: 'general-test', name: 'General Test', emoji: '\uD83D\uDDD2\uFE0F', category: 'General Test' },
];

export const NEET_SUBJECT_IDS: NeetSubjectId[] = ['physics', 'chemistry', 'botany', 'zoology'];

export const CUET_MAX_SUBJECTS = 6;

export interface Subject {
  id: SubjectId;
  name: string;
  nameTe: string;
  icon: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  name: string;
  nameTe: string;
  subjectId: SubjectId;
  questionCount: number;
  timeMinutes: number;
}

export type Difficulty = 'easy' | 'medium' | 'hard';
export type ExamMode = 'chapter' | 'practice';
export type NeetSection = 'A' | 'B';

// NEET scoring constants
export const NEET_SCORING = {
  correct: 4,
  wrong: -1,
  unanswered: 0,
  maxMarks: 720,           // 180 scored × 4
  totalQuestions: 200,      // 50 per subject
  scoredQuestions: 180,     // 45 per subject
  sectionA: 35,             // per subject, all mandatory
  sectionB: 15,             // per subject, attempt 10
  sectionBAttempt: 10,
  timeLimitMs: 200 * 60 * 1000, // 3hr 20min
} as const;

export interface Question {
  id: string;
  chapterId: string;
  subjectId: NeetSubjectId;
  text: string;
  textTe: string;
  options: Option[];
  correctOptionId: string;
  explanation: string;
  explanationTe: string;
  eliminationTechnique: string;
  eliminationTechniqueTe: string;
  difficulty: Difficulty;
}

export interface Option {
  id: string;
  text: string;
  textTe: string;
}

export interface UserAnswer {
  questionId: string;
  selectedOptionId: string | null;
  isMarked: boolean;
  eliminatedOptionIds: string[];
  timeSpentMs: number;
}

export interface ChapterExamSession {
  id: string;
  mode: 'chapter';
  chapterId: string;
  subjectId: NeetSubjectId;
  startedAt: string;
  completedAt: string | null;
  answers: UserAnswer[];
  totalQuestions: number;
  correctCount: number | null;
}

export interface PracticeExamSession {
  id: string;
  mode: 'practice';
  startedAt: string;
  completedAt: string | null;
  answers: UserAnswer[];
  totalQuestions: number;
  timeLimitMs: number;
  score: number | null;
  maxMarks: number;
  subjectScores: Record<NeetSubjectId, { correct: number; wrong: number; unanswered: number; score: number }> | null;
}

export type ExamSession = ChapterExamSession | PracticeExamSession;

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  exam: ExamType;
  language: Language;
  selectedSubjects: SubjectId[];
}

export type AppScreen =
  | 'splash'
  | 'onboarding'
  | 'auth'
  | 'dashboard'
  | 'subject-select'
  | 'chapter-select'
  | 'practice'
  | 'results'
  | 'review'
  | 'feedback'
  | 'paywall'
  | 'profile'
  | 'history';
