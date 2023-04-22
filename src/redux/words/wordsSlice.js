import { createSlice } from '@reduxjs/toolkit';
import {
  deleteWord,
  fetchWords,
  addWord,
  checkWord,
  editWord,
} from '../operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  examWords: [],
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState: initialState,
  reducers: {
    setWordKnown: (state, action) => {
      state.isLoading = action.payload;
    },
    setExamWords: (state, action) => {
      return { ...state, examWords: action.payload };
    },
    removeExamWord: (state, action) => {
      const index = state.examWords.findIndex(
        word => word.id === action.payload
      );
      state.examWords.splice(index, 1);
    },
  },
  extraReducers: builder => {
    builder
      // fetchWords
      .addCase(fetchWords.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        return { ...state, items: action.payload };
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // deleteWord
      .addCase(deleteWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWord.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(word => word.id === action.payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteWord.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // addWord
      .addCase(addWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(addWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload);
      })
      .addCase(addWord.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // checkWord
      .addCase(checkWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(checkWord.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          word => word.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(checkWord.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // editWord
      .addCase(editWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(editWord.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          word => word.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(editWord.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setWordKnown, setExamWords, removeExamWord } =
  wordsSlice.actions;

export const wordsReducer = wordsSlice.reducer;
