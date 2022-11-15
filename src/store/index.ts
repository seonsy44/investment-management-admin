import { configureStore } from '@reduxjs/toolkit';
import { accountQuerySlice } from './accountQuerySlice';

export const store = configureStore({
  reducer: {
    [accountQuerySlice.name]: accountQuerySlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
