import { createSlice } from '@reduxjs/toolkit';

export type ReLoginModalState = boolean;

const initialState: ReLoginModalState = false;

export const reLoginModalSlice = createSlice({
  name: 'isShowReLoginModal',
  initialState,
  reducers: {
    showModal: () => true,
    unshowModal: () => false,
  },
});

export const { showModal, unshowModal } = reLoginModalSlice.actions;
