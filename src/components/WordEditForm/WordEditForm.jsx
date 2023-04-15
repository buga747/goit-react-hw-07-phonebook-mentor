import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editWord } from 'redux/operations';
import { toast } from 'react-toastify';
import { selectWords } from 'redux/words/selectors';
import Button from '@mui/material/Button';

import {
  ButtonWrapper,
  StyledForm,
  StyledTextField,
} from './WordEditForm.styled';

export function WordEditForm({ words, handleClose }) {
  const dispatch = useDispatch();
  const wordsToCheck = useSelector(selectWords);

  const [word, setWord] = useState(words);

  const handleChange = evt => {
    setWord(prev => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const handleEditWord = evt => {
    evt.preventDefault();
    console.log(words);
    const engWord = evt.currentTarget.engWord.value;

    const isEngWordExist = wordsToCheck.some(word => word.engWord === engWord);
    if (isEngWordExist) {
      toast.error(`${engWord} is already in the list`);
      return;
    }

    dispatch(editWord(word));
    evt.currentTarget.reset();
    handleClose();
  };

  return (
    <div>
      <StyledForm onSubmit={handleEditWord}>
        <div>
          <StyledTextField
            id="engWord"
            label="Word in English"
            variant="outlined"
            type="text"
            name="engWord"
            value={word.engWord}
            onChange={handleChange}
          />
          <StyledTextField
            id="engWord"
            label="Translation"
            variant="outlined"
            type="text"
            name="ukrWord"
            value={word.ukrWord}
            onChange={handleChange}
          />
        </div>
        <ButtonWrapper>
          <Button type="submit">Edit Word</Button>
          <Button type="button" onClick={handleClose}>
            Cancel
          </Button>
        </ButtonWrapper>
      </StyledForm>
    </div>
  );
}
