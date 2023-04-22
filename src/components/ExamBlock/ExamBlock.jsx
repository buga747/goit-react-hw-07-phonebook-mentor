import { ExamWrapper, Word, WordsNumberWrapper } from './ExamBlock.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectExamWords, selectWords } from 'redux/words/selectors';
import { shuffleItemsForExam } from 'utils/shuffleItemsForExam';
import { useEffect, useState } from 'react';
import { shuffleArray } from 'utils/shuffleArray';
import { removeExamWord, setExamWords } from 'redux/words/wordsSlice';
import { getExamAnswerVariants } from 'utils/getExamAnswerVariants';

export default function ExamBlock() {
  const dispatch = useDispatch();
  const [wordNumber, setWordNumber] = useState(1);
  const words = useSelector(selectWords);
  const examWords = useSelector(selectExamWords);
  const [examWord, setExamWord] = useState(null);
  const [answerVariants, setAnswerVariants] = useState([]);
  const [corectAnswers, setCorrectAnswers] = useState(0);
  const [inCorectAnswers, setIncorrectAnswers] = useState(0);

  useEffect(() => {
    const shuffledWords = shuffleItemsForExam(words);
    dispatch(setExamWords(shuffledWords));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setExamWord(examWords[0]);
    setAnswerVariants(getExamAnswerVariants(examWords, words, 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examWords]);

  const handleCheckAnswer = evt => {
    if (examWord.ukrWord === evt.target.name) {
      setCorrectAnswers(prev => prev + 1);
      dispatch(removeExamWord(examWord.id));
    } else {
      setIncorrectAnswers(prev => prev + 1);
      dispatch(removeExamWord(examWord.id));
    }
    setWordNumber(prev => prev + 1);
  };

  const randomAnswers = shuffleArray(answerVariants);

  return (
    <ExamWrapper>
      {examWord?.engWord && (
        <div>
          <WordsNumberWrapper>{wordNumber}/10</WordsNumberWrapper>{' '}
          <div>
            <p>
              Як перекладається <Word>{examWord.engWord}</Word>?
            </p>
            <ul>
              {randomAnswers.map(answer => (
                <li key={answer}>
                  <button
                    type="button"
                    name={answer}
                    onClick={handleCheckAnswer}
                  >
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {!examWords.length && (
        <div>
          <p>correct: {corectAnswers}</p>
          <p>incorrect: {inCorectAnswers}</p>
          <p>
            result {(corectAnswers / (inCorectAnswers + corectAnswers)) * 100}%
          </p>
        </div>
      )}
    </ExamWrapper>
  );
}
