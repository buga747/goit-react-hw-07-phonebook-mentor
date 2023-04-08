import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editWord } from 'redux/operations';
import { toast } from 'react-toastify';
import { selectWords } from 'redux/selectors';

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
    const ukrWord = evt.currentTarget.ukrWord.value;

    const isEngWordExist = wordsToCheck.some(word => word.engWord === engWord);
    if (isEngWordExist) {
      toast.error(`${engWord} is already in the list`);
      return;
    }

    const isUkrWordExist = wordsToCheck.some(word => word.ukrWord === ukrWord);
    if (isUkrWordExist) {
      toast.error(`${ukrWord} вже є у Вашому списку`);
      return;
    }

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
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}
