import { createSlice } from '@reduxjs/toolkit';
import {
  deleteWord,
  fetchWords,
  addWord,
  checkWord,
  editWord,
} from './operations';

export const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // fetchWords
      .addCase(fetchWords.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        return { items: action.payload, isLoading: false, error: null };
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
        state.items.push(action.payload);
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

export const wordsReducer = wordsSlice.reducer;

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
