import { createSelector } from '@reduxjs/toolkit';

export const selectWords = state => state.words.items;

export const selectFilterValue = state => state.filter;

export const selectFilteredWords = createSelector(
  [selectWords, selectFilterValue],
  (words, value) => {
    return words.filter(word => {
      return word.engWord.toLowerCase().includes(value.toLowerCase().trim());
    });
  }
);
