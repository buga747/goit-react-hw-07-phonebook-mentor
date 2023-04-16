import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredWordsByUnKnown,
  selectWords,
} from 'redux/words/selectors';
import { Button } from '@mui/material';
import { Word } from './LearnWordsByTranslatingIntoUkrainian.styled';
import { toast } from 'react-toastify';
import { checkWord } from 'redux/operations';

export function LearnWordsByTranslatingIntoUkrainian() {
  const dispatch = useDispatch();
  const allWords = useSelector(selectWords);
  const words = useSelector(selectFilteredWordsByUnKnown);

  const [randomWord, setRandomWord] = useState({});
  const [answerVariants, setAnswerVariants] = useState([]);

  useEffect(() => {
    console.log(randomWord);
  }, [randomWord]);

  const handleGetRandomWord = () => {
    if (words.length <= 3) {
      toast.error(`Add more words to train`);
      return;
    }

    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);

    setAnswerVariants(prev => {
      const newVariants = [words[randomIndex].ukrWord];

      for (let i = 0; newVariants.length < 4; i += 1) {
        const randomIndex = Math.floor(Math.random() * words.length);

        if (newVariants.includes(allWords[randomIndex].ukrWord)) {
          continue;
        } else {
          newVariants.push(allWords[randomIndex].ukrWord);
        }
      }

      return newVariants;
    });
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const randomAnswers = shuffleArray(answerVariants);

  const handleCHeckAnswer = evt => {
    console.log(evt.target.name);

    if (randomWord.ukrWord !== evt.target.name) {
      toast.error(`Please try again later`);
    }

    if (randomWord.ukrWord === evt.target.name) {
      toast.success(`Correct`);
      setRandomWord(prev => ({ ...prev, isChecked: true }));
      console.log(randomWord);
      dispatch(checkWord({ ...randomWord, isChecked: true }));
    }

    handleGetRandomWord();
  };

  return (
    <div>
      <h2>Practice in translating from English</h2>
      {words.length > 3 && <Button onClick={handleGetRandomWord}>Start</Button>}

      {randomWord.engWord && words.length > 3 ? (
        <div>
          <p>
            What does <Word>{randomWord.engWord}</Word> mean?
          </p>
          <ul>
            {randomAnswers.map(answer => (
              <li key={answer}>
                <button type="button" name={answer} onClick={handleCHeckAnswer}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {words.length <= 3 && (
        <p>Please select another mode to train or add new words</p>
      )}
    </div>
  );
}
