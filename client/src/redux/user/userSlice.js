import { createSlice } from '@reduxjs/toolkit';
import { sign } from 'jsonwebtoken';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({ 
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }
});

export const { signInStart, signInSuccess, signInFail } = userSlice.actions; // export the actions

export default userSlice.reducer; // export the reducer