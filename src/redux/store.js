import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { wordsReducer } from './words/wordsSlice';
import { filterReducer } from './filter/filterSlice';

const rootReducer = combineReducers({
  words: wordsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
