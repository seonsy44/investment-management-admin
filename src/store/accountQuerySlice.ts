import { createSlice } from '@reduxjs/toolkit';

export type AccountQueryState = {
  page: number;
  limit: number;
  is_active: string | null;
  broker_id: string | null;
  status: string | null;
};

const initialState: AccountQueryState = {
  page: 1,
  limit: 30,
  is_active: null,
  broker_id: null,
  status: null,
};

export const accountQuerySlice = createSlice({
  name: 'accountQuery',
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
    setBrokerId: (state, action: { payload: string }) => {
      if (action.payload === 'all') state.broker_id = null;
      else state.broker_id = action.payload;
      state.page = 1;
    },
    setStatus: (state, action: { payload: string }) => {
      if (action.payload === 'all') state.status = null;
      else state.status = action.payload;
      state.page = 1;
    },
  },
});

export const { setPage, setIsActive, setBrokerId, setStatus } = accountQuerySlice.actions;
