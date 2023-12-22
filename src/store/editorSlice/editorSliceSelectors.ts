import { RootState } from '../store';

export const editorValueSelector = (state: RootState) =>
  state.editor.editorValue;
