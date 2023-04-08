import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWord } from 'redux/operations';
import { toast } from 'react-toastify';
import { selectWords } from 'redux/selectors';
import Button from '@mui/material/Button';

import { StyledForm, StyledTextField } from './WordAddForm.styled';

export function WordAddForm({ handleClose }) {
  const dispatch = useDispatch();
  const words = useSelector(selectWords);

  const handleAddWord = evt => {
    evt.preventDefault();

    const engWord = evt.currentTarget.engWord.value;
    const ukrWord = evt.currentTarget.ukrWord.value;

    const wordObj = {
      engWord,
      ukrWord,
      isChecked: false,
    };

    const isEngWordExist = words.some(word => word.engWord === engWord);
    if (isEngWordExist) {
      toast.error(`${engWord} is already in the list`);
      return;
    }

    const isUkrWordExist = words.some(word => word.ukrWord === ukrWord);
    if (isUkrWordExist) {
      toast.error(`${ukrWord} вже є у Вашому списку`);
      return;
    }

    if (engWord === '' || ukrWord === '') {
      toast.error(`You need to insert value`);
      return;
    }

    dispatch(addWord(wordObj));
    evt.currentTarget.reset();
    handleClose();
  };

  return (
    <div>
      <StyledForm onSubmit={handleAddWord}>
        <StyledTextField
          id="engWord"
          label="Word in English"
          variant="outlined"
          type="text"
          name="engWord"
        />
        <StyledTextField
          id="ukrWord"
          label="Translation"
          variant="outlined"
          type="text"
          name="ukrWord"
        />
        <Button type="submit">Add Word</Button>
      </StyledForm>
    </div>
  );
}
