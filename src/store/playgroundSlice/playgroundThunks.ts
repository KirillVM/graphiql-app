import { createAsyncThunk } from '@reduxjs/toolkit';
import graphiqlApi from '../../services/graphiqlApi/graphiqlApi';
import { RootState } from '../store';
import {
  GraphQLSchema,
  buildClientSchema,
  getIntrospectionQuery,
} from 'graphql';

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

export const getApiShema = createAsyncThunk<GraphQLSchema, string>(
  'playground/getApiShema',
  async (url) => {
    const response = await graphiqlApi.baseQuery({
      url: url,
      data: getIntrospectionQuery(),
    });
    return buildClientSchema(await response.data);
  }
);
