import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { deleteWord, checkWord } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { WordModalEdit } from 'components/WordModalEdit/WordsModalEdit';

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
      <FormControlLabel
        control={<Checkbox checked={isChecked} />}
        label="Label"
        onClick={handleCheck}
      />
      <p>{word.ukrWord}</p> <p>{word.engWord}</p>{' '}
      <button
        onClick={() => {
          handleDelete(word.id);
        }}
      >
        Delete word
      </button>
      <WordModalEdit words={word} />
    </li>
  );
}
