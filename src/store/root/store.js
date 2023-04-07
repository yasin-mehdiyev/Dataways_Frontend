import { configureStore } from '@reduxjs/toolkit';
// Slices
import modeReducer from '../features/mode/modeSlice';
import navbarReducer from '../features/navbar/navbarSlice';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    navbar: navbarReducer
  },
});
