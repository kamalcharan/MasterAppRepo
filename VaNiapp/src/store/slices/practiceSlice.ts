import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PracticeSession, UserAnswer } from '../../types';

interface PracticeState {
  currentSession: PracticeSession | null;
  history: PracticeSession[];
}

const initialState: PracticeState = {
  currentSession: null,
  history: [],
};

const practiceSlice = createSlice({
  name: 'practice',
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<PracticeSession>) => {
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
    completeSession: (state, action: PayloadAction<{ score: number; completedAt: string }>) => {
      if (!state.currentSession) return;
      state.currentSession.score = action.payload.score;
      state.currentSession.completedAt = action.payload.completedAt;
      state.history.unshift(state.currentSession);
      state.currentSession = null;
    },
    clearCurrentSession: (state) => {
      state.currentSession = null;
    },
  },
});

export const { startSession, updateAnswer, completeSession, clearCurrentSession } =
  practiceSlice.actions;

export default practiceSlice.reducer;
