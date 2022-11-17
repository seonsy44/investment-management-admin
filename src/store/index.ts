import { configureStore } from '@reduxjs/toolkit';
import { accountQuerySlice } from './accountQuerySlice';
import { headerTitleSlice } from './headerTitleSlice';
import { reLoginModalSlice } from './reLoginModalSlice';
import { userQuerySlice } from './userQuerySlice';

export const store = configureStore({
  reducer: {
    [accountQuerySlice.name]: accountQuerySlice.reducer,
    [userQuerySlice.name]: userQuerySlice.reducer,
    [headerTitleSlice.name]: headerTitleSlice.reducer,
    [reLoginModalSlice.name]: reLoginModalSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
