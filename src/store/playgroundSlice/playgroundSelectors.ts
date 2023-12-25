import { RootState } from '../store';

export const editorValueSelector = (state: RootState) =>
  state.playground.editorValue;

export const responseDataSelector = (state: RootState) =>
  state.playground.responseData;

export const loadingStatusSelector = (state: RootState) =>
  state.playground.isLoading;
