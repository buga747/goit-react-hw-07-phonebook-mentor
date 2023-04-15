import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWord } from 'redux/operations';
import { toast } from 'react-toastify';
import { selectWords } from 'redux/words/selectors';
import Button from '@mui/material/Button';
import { FaBeer } from 'react-icons/fa';
import {
  InputWrapper,
  StyledForm,
  StyledTextField,
} from './WordAddForm.styled';

export function WordAddForm({ handleClose }) {
  const dispatch = useDispatch();
  const words = useSelector(selectWords);

  const [numWords, setNumWords] = useState(1);

  if (numWords === 0) {
    handleClose();
  }

  const handleAddWord = evt => {
    evt.preventDefault();

    const wordArray = [];
    const engWords = [];

    for (let i = 0; i < numWords; i += 1) {
      const engWord = evt.currentTarget[`engWord${i}`].value;
      const ukrWord = evt.currentTarget[`ukrWord${i}`].value;

      console.log(engWord);
      console.log(ukrWord);

      if (engWords.includes(engWord)) {
        toast.error(
          `${engWord} is already in the list. Please check the table.`
        );
        return;
      }

      engWords.push(engWord);

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

      wordArray.push(wordObj);
    }

    wordArray.forEach(word => dispatch(addWord(word)));

    evt.currentTarget.reset();
    handleClose();
  };

  const handleAddMoreWords = () => {
    setNumWords(numWords + 1);
  };
  const wordInputs = [];

  const handleDeleteWord = idx => {
    console.log(idx);
    wordInputs.splice(idx, 1);
    setNumWords(numWords - 1);
  };

  for (let i = 0; i < numWords; i += 1) {
    wordInputs.push(
      <InputWrapper key={i * 365}>
        <StyledTextField
          id={`engWord${i}`}
          label="Word in English"
          variant="outlined"
          type="text"
          name={`engWord${i}`}
        />
        <StyledTextField
          id={`ukrWord${i}`}
          label="Translation"
          variant="outlined"
          type="text"
          name={`ukrWord${i}`}
        />

        <Button type="button" onClick={() => handleDeleteWord(i)}>
          <FaBeer />
        </Button>
      </InputWrapper>
    );
  }

  return (
    <div>
      <StyledForm onSubmit={handleAddWord}>
        {wordInputs}
        <Button type="button" onClick={handleAddMoreWords}>
          Add one more
        </Button>
        <Button type="submit">Add Words to table</Button>
      </StyledForm>
    </div>
  );
}
