import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { clearLocalStorage, persistLocalStorage } from './../../../utils/persist.utility.ts'

export interface UserState {
  email: string | null;
  token: string | null;
}

const initialState: UserState = {
  email: '',
  token: '',
}

export const UserKey = 'user';

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : initialState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage(UserKey, result);
      return result;
    },
    deleteUser: () => {
      clearLocalStorage(UserKey);
      return initialState;
    },
  }
});

export const { createUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer