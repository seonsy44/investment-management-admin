import { configureStore } from '@reduxjs/toolkit';
import { accountQuerySlice } from './accountQuerySlice';
import { headerTitleSlice } from './headerTitleSlice';

export const store = configureStore({
  reducer: {
    [accountQuerySlice.name]: accountQuerySlice.reducer,
    [headerTitleSlice.name]: headerTitleSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
