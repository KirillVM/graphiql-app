import { configureStore } from '@reduxjs/toolkit';
import editorSliceReducer from './editorSlice/editorSlice';

export const store = configureStore({
  reducer: {
    editor: editorSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
