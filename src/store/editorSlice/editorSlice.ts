import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EditorState } from './editorSlice.interface';

const initialState: EditorState = {
  editorValue: '',
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setEditorValue: (state, action: PayloadAction<string>) => {
      state.editorValue = action.payload;
    },
  },
});

export const { setEditorValue } = editorSlice.actions;
export default editorSlice.reducer;
