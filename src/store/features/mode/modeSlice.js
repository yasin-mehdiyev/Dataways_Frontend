import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    togglerDarkMode: (state, action) => {
      state.darkMode = action.payload
    }
  },
})

export const { togglerDarkMode } = modeSlice.actions;

export default modeSlice.reducer;
