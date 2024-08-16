import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './slices/auth/signupSlice.js';
import signinReducer from './slices/auth/signinSlice.js';
import userReducer from './slices/user/userSlice.js'
import tournamentReducer from './slices/tournament/tournamentSlice.js'

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
    user: userReducer,
    tournament: tournamentReducer,
  },
})
