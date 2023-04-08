import React from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from 'redux/operations';

export function WordAddForm({ handleClose }) {
  const dispatch = useDispatch();
  const handleAddWord = evt => {
    evt.preventDefault();
    const wordObj = {
      engWord: evt.currentTarget.engWord.value,
      ukrWord: evt.currentTarget.ukrWord.value,
      isChecked: false,
    };
    dispatch(addWord(wordObj));
    evt.currentTarget.reset();
    handleClose();
  };

  return (
    <div>
      <form onSubmit={handleAddWord}>
        <div>
          <label>
            Ukrainian word
            <input type="text" name="ukrWord" />
          </label>
        </div>
        <div>
          <label>
            English word
            <input type="text" name="engWord" />
          </label>
        </div>
        <button type="submit">Add Word</button>
      </form>
    </div>
  );
}
