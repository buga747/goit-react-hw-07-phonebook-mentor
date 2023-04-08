import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const agent = axios.create({
  baseURL: 'https://643116fa3adb159651656085.mockapi.io',
});

export const fetchWords = createAsyncThunk(
  'words/fetchWords',
  async (signal, { rejectWithValue }) => {
    try {
      const response = await agent.get('/words', { signal });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWord = createAsyncThunk(
  'words/deleteWord',
  async (id, { rejectWithValue }) => {
    try {
      const response = await agent.delete(`/words/${id}`);
      return response.data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addWord = createAsyncThunk(
  'words/addWord',
  async (word, { rejectWithValue }) => {
    try {
      const response = await agent.post('/words', word);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkWord = createAsyncThunk(
  'words/checkWord',
  async (word, { rejectWithValue }) => {
    try {
      const response = await agent.put(`/words/${word.id}`, word);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editWord = createAsyncThunk(
  'words/editWord',
  async (word, { rejectWithValue }) => {
    try {
      const response = await agent.put(`/words/${word.id}`, word);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
