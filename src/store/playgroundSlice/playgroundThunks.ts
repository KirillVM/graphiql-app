import { createAsyncThunk } from '@reduxjs/toolkit';
import graphiqlApi from '../../services/graphiqlApi/graphiqlApi';
import { RootState } from '../store';

export const getGraphiqlData = createAsyncThunk<
  object,
  null,
  { state: RootState }
>('playground/getGraphiqlData', async (_arg, { getState }) => {
  const state = getState();
  const response = await graphiqlApi.baseQuery({
    url: state.playground.graphiqlApiUrl,
    data: state.playground.editorValue,
  });
  return response;
});
