import { createSelector } from '@reduxjs/toolkit';
import { selectWords } from 'redux/words/selectors';

export const selectFilterValue = state => state.filter;

export const selectFilteredWords = createSelector(
  [selectWords, selectFilterValue],
  (words, value) => {
    return words.filter(word => {
      return word.engWord.toLowerCase().includes(value.toLowerCase().trim());
    });
  }
);
