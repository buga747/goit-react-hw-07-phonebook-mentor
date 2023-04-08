import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { deleteWord, checkWord } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { WordModalEdit } from 'components/WordModalEdit/WordsModalEdit';
import { ButtonWrapper, Wrapper } from './WordListItem.styled';
import Button from '@mui/material/Button';

export function WordListItem({ word }) {
  const dispatch = useDispatch();
  const [isChecked, setIsCheched] = useState(word.isChecked);

  const handleDelete = id => {
    dispatch(deleteWord(id));
  };

  const handleCheck = () => {
    dispatch(checkWord({ ...word, isChecked: !isChecked }));
    setIsCheched(prev => !prev);
  };

  return (
    <li>
      <Wrapper>
        <FormControlLabel
          control={<Checkbox checked={isChecked} />}
          label=""
          onClick={handleCheck}
        />

        <h2>
          <span>English: </span>
          {word.engWord}
        </h2>
        <h2>
          <span>Українською: </span>
          {word.ukrWord}
        </h2>
        <ButtonWrapper>
          <WordModalEdit words={word} />
          <Button
            onClick={() => {
              handleDelete(word.id);
            }}
          >
            Delete word
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </li>
  );
}
