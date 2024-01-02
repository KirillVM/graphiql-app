import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PlaygroundState } from './playgroundSlice.interface';
import { getGraphiqlData, getApiShema } from './playgroundThunks';
import { GraphQLSchema } from 'graphql';

const initialState: PlaygroundState = {
  editorValue: '',
  graphiqlApiUrl: '',
  isLoading: false,
  responseData: null,
  apiSchema: undefined,
  invalidApi: false,
};

export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    setEditorValue: (state, action: PayloadAction<string>) => {
      state.editorValue = action.payload;
    },
    setGraphiqlApiUrl: (state, action: PayloadAction<string>) => {
      state.graphiqlApiUrl = action.payload;
      state.editorValue = '';
      state.responseData = null;
      state.apiSchema = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGraphiqlData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGraphiqlData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responseData = action.payload;
    });
    builder.addCase(
      getApiShema.fulfilled,
      (state, action: PayloadAction<GraphQLSchema>) => {
        state.apiSchema = action.payload;
        state.invalidApi = false;
      }
    );
    builder.addCase(getApiShema.rejected, (state) => {
      state.apiSchema = undefined;
      state.invalidApi = true;
    });
  },
});

export const { setEditorValue, setGraphiqlApiUrl } = playgroundSlice.actions;
export default playgroundSlice.reducer;
