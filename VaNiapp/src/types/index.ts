export type ThemeMode = 'light' | 'dark';
export type ExamType = 'NEET' | 'CUET' | 'BOTH';
export type Language = 'en' | 'te';

export type SubjectId = 'physics' | 'chemistry' | 'botany' | 'zoology';

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

export interface Question {
  id: string;
  chapterId: string;
  text: string;
  textTe: string;
  options: Option[];
  correctOptionId: string;
  explanation: string;
  explanationTe: string;
  difficulty: 'easy' | 'medium' | 'hard';
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

export interface PracticeSession {
  id: string;
  chapterId: string;
  startedAt: string;
  completedAt: string | null;
  answers: UserAnswer[];
  score: number | null;
  totalQuestions: number;
  timeLimitMs: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  exam: ExamType;
  language: Language;
  trialStartDate: string;
  questionsUsed: number;
  trialQuestionsLimit: number;
  trialDaysLimit: number;
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
