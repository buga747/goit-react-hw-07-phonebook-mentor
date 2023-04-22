import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectWords } from 'redux/words/selectors';
import { Button } from '@mui/material';
import { Word } from './RepeatAllWords.styled';
import { toast } from 'react-toastify';
import { checkWord } from 'redux/operations';
import { shuffleArray } from 'utils/shuffleArray';
import LearningModeHeader from 'components/LearningModeHeader/LearningModeHeader';
import { getUkrAnswerVariants } from 'utils/getUkrAnswerVariants';

export function RepeatAllWords() {
  const dispatch = useDispatch();
  const allWords = useSelector(selectWords);

  const [randomWord, setRandomWord] = useState({});
  const [answerVariants, setAnswerVariants] = useState([]);

  const handleGetRandomWord = () => {
    if (allWords.length <= 3) {
      toast.error(`Add more words for practice`);
      return;
    }

    const randomIndex = Math.floor(Math.random() * allWords.length);
    setRandomWord(allWords[randomIndex]);

    setAnswerVariants(getUkrAnswerVariants(randomIndex, allWords, allWords, 4));
  };

  const randomAnswers = shuffleArray(answerVariants);

  const handleCHeckAnswer = evt => {
    console.log(evt.target.name);

    if (randomWord.ukrWord !== evt.target.name) {
      toast.error(`Please try again later`);
      setRandomWord(prev => ({ ...prev, isChecked: false }));
      console.log(randomWord);
      dispatch(checkWord({ ...randomWord, isChecked: false }));
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
      <LearningModeHeader title="Practice in all words translating" />
      {allWords.length > 3 && (
        <Button onClick={handleGetRandomWord}>Start</Button>
      )}

      {randomWord.engWord && allWords.length > 3 ? (
        <div>
          {' '}
          <div>
            <p>
              Як перекладається <Word>{randomWord.engWord}</Word>?
            </p>
            <ul>
              {randomAnswers.map(answer => (
                <li key={answer}>
                  <button
                    type="button"
                    name={answer}
                    onClick={handleCHeckAnswer}
                  >
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {allWords.length <= 3 && (
        <p>Please select another mode to train or add new words</p>
      )}
    </div>
  );
}
