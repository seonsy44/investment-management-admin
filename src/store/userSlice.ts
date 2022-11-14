import { createSlice } from '@reduxjs/toolkit';
import { User } from '@type/user';

const initialState: User = {
  accessToken: '',
  user: {
    email: '',
    id: -1,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: { payload: User }) => action.payload,
    logout: (state, action) => initialState,
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
