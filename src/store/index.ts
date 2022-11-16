import { configureStore } from '@reduxjs/toolkit';
import { accountQuerySlice } from './accountQuerySlice';
import { headerTitleSlice } from './headerTitleSlice';
import { userQuerySlice } from './userQuerySlice';

export const store = configureStore({
  reducer: {
    [accountQuerySlice.name]: accountQuerySlice.reducer,
    [userQuerySlice.name]: userQuerySlice.reducer,
    [headerTitleSlice.name]: headerTitleSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
