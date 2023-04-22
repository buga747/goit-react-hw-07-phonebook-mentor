import { createSelector } from '@reduxjs/toolkit';

export const selectWords = state => state.words.items;

export const selectFilterValue = state => state.filter;

export const selectExamWords = state => state.words.examWords;

export const selectWordsByKnown = state =>
  state.words.items.filter(word => word.isChecked);

export const selectWordsByUnKnown = state =>
  state.words.items.filter(word => !word.isChecked);

export const selectFilteredWordsByUnKnown = createSelector(
  [selectWordsByUnKnown, selectFilterValue],
  (words, value) => {
    return words.filter(word => {
      return word.engWord.toLowerCase().includes(value.toLowerCase().trim());
    });
  }
);

export const selectFilteredWordsByKnown = createSelector(
  [selectWordsByKnown, selectFilterValue],
  (words, value) => {
    return words.filter(word => {
      return word.engWord.toLowerCase().includes(value.toLowerCase().trim());
    });
  }
);

export const selectUnknownEngWords = createSelector(
  [selectWordsByUnKnown],
  words => {
    return words.map(word => word.engWord);
  }
);
