import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import { deleteWord, checkWord } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { WordModalEdit } from 'components/WordModalEdit/WordsModalEdit';
import { ButtonWrapper, Label } from './WordListItem.styled';
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
    <tr>
      <td>
        <Label
          control={<Checkbox checked={isChecked} />}
          label=""
          onClick={handleCheck}
        />
      </td>
      <td>{word.engWord}</td>
      <td>{word.ukrWord}</td>
      <td>
        <ButtonWrapper>
          <WordModalEdit words={word} />
          <Button
            onClick={() => {
              handleDelete(word.id);
            }}
          >
            Delete
          </Button>
        </ButtonWrapper>
      </td>
    </tr>
  );
}
