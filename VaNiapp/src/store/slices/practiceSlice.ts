import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ExamSession,
  ChapterExamSession,
  PracticeExamSession,
  UserAnswer,
  NeetSubjectId,
  NEET_SCORING,
} from '../../types';

interface ExamState {
  currentSession: ExamSession | null;
  chapterHistory: ChapterExamSession[];
  practiceHistory: PracticeExamSession[];
}

const initialState: ExamState = {
  currentSession: null,
  chapterHistory: [],
  practiceHistory: [],
};

const practiceSlice = createSlice({
  name: 'practice',
  initialState,
  reducers: {
    startChapterExam: (state, action: PayloadAction<ChapterExamSession>) => {
      state.currentSession = action.payload;
    },

    startPracticeExam: (state, action: PayloadAction<PracticeExamSession>) => {
      state.currentSession = action.payload;
    },

    updateAnswer: (state, action: PayloadAction<UserAnswer>) => {
      if (!state.currentSession) return;
      const idx = state.currentSession.answers.findIndex(
        (a) => a.questionId === action.payload.questionId
      );
      if (idx >= 0) {
        state.currentSession.answers[idx] = action.payload;
      } else {
        state.currentSession.answers.push(action.payload);
      }
    },

    completeChapterExam: (
      state,
      action: PayloadAction<{ correctCount: number; completedAt: string }>
    ) => {
      if (!state.currentSession || state.currentSession.mode !== 'chapter') return;
      state.currentSession.correctCount = action.payload.correctCount;
      state.currentSession.completedAt = action.payload.completedAt;
      state.chapterHistory.unshift(state.currentSession);
      state.currentSession = null;
    },

    completePracticeExam: (
      state,
      action: PayloadAction<{
        score: number;
        subjectScores: Record<
          NeetSubjectId,
          { correct: number; wrong: number; unanswered: number; score: number }
        >;
        completedAt: string;
      }>
    ) => {
      if (!state.currentSession || state.currentSession.mode !== 'practice') return;
      state.currentSession.score = action.payload.score;
      state.currentSession.subjectScores = action.payload.subjectScores;
      state.currentSession.completedAt = action.payload.completedAt;
      state.practiceHistory.unshift(state.currentSession);
      state.currentSession = null;
    },

    clearCurrentSession: (state) => {
      state.currentSession = null;
    },
  },
});

export const {
  startChapterExam,
  startPracticeExam,
  updateAnswer,
  completeChapterExam,
  completePracticeExam,
  clearCurrentSession,
} = practiceSlice.actions;

export default practiceSlice.reducer;

// --- Scoring helpers ---

/** Calculate NEET score for a set of answers given the correct answer map */
export function calculateNeetScore(
  answers: UserAnswer[],
  correctAnswerMap: Record<string, string>
): { correct: number; wrong: number; unanswered: number; score: number } {
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;

  for (const answer of answers) {
    if (!answer.selectedOptionId) {
      unanswered++;
    } else if (answer.selectedOptionId === correctAnswerMap[answer.questionId]) {
      correct++;
    } else {
      wrong++;
    }
  }

  const score =
    correct * NEET_SCORING.correct + wrong * NEET_SCORING.wrong + unanswered * NEET_SCORING.unanswered;

  return { correct, wrong, unanswered, score };
}

/** Calculate per-subject NEET scores */
export function calculateSubjectScores(
  answers: UserAnswer[],
  correctAnswerMap: Record<string, string>,
  questionSubjectMap: Record<string, NeetSubjectId>
): Record<NeetSubjectId, { correct: number; wrong: number; unanswered: number; score: number }> {
  const subjects: NeetSubjectId[] = ['physics', 'chemistry', 'botany', 'zoology'];
  const result = {} as Record<
    NeetSubjectId,
    { correct: number; wrong: number; unanswered: number; score: number }
  >;

  for (const subjectId of subjects) {
    const subjectAnswers = answers.filter(
      (a) => questionSubjectMap[a.questionId] === subjectId
    );
    result[subjectId] = calculateNeetScore(subjectAnswers, correctAnswerMap);
  }

  return result;
}
