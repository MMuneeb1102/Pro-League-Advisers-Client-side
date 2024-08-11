import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './slices/auth/signupSlice.js';
import signinReducer from './slices/auth/signinSlice.js';

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
  },
})
