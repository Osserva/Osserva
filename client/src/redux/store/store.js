// reducer store
import { configureStore } from '@reduxjs/toolkit';
import focusItemReducer from '../reducer/focusItemReducer';

const store = configureStore({
  reducer: {
    focusItems: focusItemReducer,
  },
});
