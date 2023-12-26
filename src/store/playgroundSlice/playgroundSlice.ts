import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PlaygroundState } from './playgroundSlice.interface';
import { getGraphiqlData } from './playgroundThunks';

const initialState: PlaygroundState = {
  editorValue: '',
  graphiqlApiUrl: 'https://rickandmortyapi.com/graphql',
  isLoading: false,
  responseData: null,
};

export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    setEditorValue: (state, action: PayloadAction<string>) => {
      state.editorValue = action.payload;
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
  },
});

export const { setEditorValue } = playgroundSlice.actions;
export default playgroundSlice.reducer;
