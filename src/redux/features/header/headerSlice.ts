import { createSlice } from '@reduxjs/toolkit'

export interface HeaderState {
  isActive: boolean;
}

const initialState: HeaderState = {
  isActive: false,
}

export const userSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    activeHeader: (state, action) => {
      state.isActive = action.payload;
    },
  }
});

export const { activeHeader, } = userSlice.actions

export default userSlice.reducer