import { createSlice } from '@reduxjs/toolkit';

export type UserQueryState = {
  page: number;
  limit: number;
  is_active: string | null;
  is_staff: string | null;
};

const initialState: UserQueryState = {
  page: 1,
  limit: 30,
  is_active: null,
  is_staff: null,
};

export const userQuerySlice = createSlice({
  name: 'userQuery',
  initialState,
  reducers: {
    setPage: (state, action: { payload: number }) => {
      state.page = action.payload;
    },
    setIsActive: (state, action: { payload: string }) => {
      if (action.payload === 'all') state.is_active = null;
      else state.is_active = action.payload;
      state.page = 1;
    },
    setIsStaff: (state, action: { payload: string }) => {
      if (action.payload === 'all') state.is_staff = null;
      else state.is_staff = action.payload;
      state.page = 1;
    },
  },
});

export const { setPage, setIsActive, setIsStaff } = userQuerySlice.actions;
