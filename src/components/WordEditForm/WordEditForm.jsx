import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editWord } from 'redux/operations';

export function WordEditForm({ words, handleClose }) {
  const dispatch = useDispatch();

  const [word, setWord] = useState(words);

  const handleChange = evt => {
    setWord(prev => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const handleEditWord = evt => {
    evt.preventDefault();

    dispatch(editWord(word));
    evt.currentTarget.reset();
    handleClose();
  };

  return (
    <div>
      <form onSubmit={handleEditWord}>
        <div>
          <label>
            Ukrainian word
            <input
              type="text"
              name="ukrWord"
              value={word.ukrWord}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            English word
            <input
              type="text"
              name="engWord"
              value={word.engWord}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Edit Word</button>
      </form>
    </div>
  );
}
