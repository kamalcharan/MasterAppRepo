import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile, ExamType, Language } from '../../types';

interface AuthState {
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  user: UserProfile | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  hasCompletedOnboarding: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setOnboardingComplete: (state) => {
      state.hasCompletedOnboarding = true;
    },
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload;
    },
    updateExam: (state, action: PayloadAction<ExamType>) => {
      if (state.user) state.user.exam = action.payload;
    },
    updateLanguage: (state, action: PayloadAction<Language>) => {
      if (state.user) state.user.language = action.payload;
    },
    incrementQuestionsUsed: (state, action: PayloadAction<number>) => {
      if (state.user) state.user.questionsUsed += action.payload;
    },
    logout: () => initialState,
  },
});

export const {
  setAuthenticated,
  setOnboardingComplete,
  setUser,
  updateExam,
  updateLanguage,
  incrementQuestionsUsed,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
