import { ExamWrapper, Word, WordsNumberWrapper } from './ExamBlock.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectWords } from 'redux/words/selectors';
import { shuffleItemsForExam } from 'utils/shuffleItemsForExam';
import { useState } from 'react';
import { checkWord } from 'redux/operations';
import { useMemo } from 'react';
import { shuffleArray } from 'utils/shuffleArray';

export default function ExamBlock() {
  const dispatch = useDispatch();
  const [wordNumber, setWordNumber] = useState(0);
  const words = useSelector(selectWords);
  const examWords = useMemo(() => shuffleItemsForExam(words));
  const [examWord, setExamWord] = useState({});
  const [answerVariants, setAnswerVariants] = useState([]);
  const [result, setResult] = useState([]);

  const handleCheckAnswer = evt => {
    if (examWord.ukrWord === evt.target.name) {
      setExamWord(prev => ({ ...prev, isChecked: true }));
      setResult(prevResult => [...prevResult, { examWord: true }]);
      console.log(examWord);
      dispatch(checkWord({ ...examWord, isChecked: true }));
    } else {
      setExamWord(prev => ({ ...prev, isChecked: false }));
      console.log(examWord);
      dispatch(checkWord({ ...examWord, isChecked: false }));
      setResult(prevResult => [...prevResult, { examWord: false }]);
    }
    setWordNumber(prev => prev + 1);
    console.log(result);
    setExamWord(examWords[wordNumber]);
    console.log(examWords);
    setAnswerVariants(prev => {
      const newVariants = [examWords[wordNumber].ukrWord];

      for (let j = 1; newVariants.length < 4; j += 1) {
        const randomIndex = Math.floor(Math.random() * words.length);

        if (newVariants.includes(words[randomIndex].ukrWord)) {
          continue;
        } else {
          newVariants.push(words[randomIndex].ukrWord);
        }
      }

      return newVariants;
    });

    console.log(wordNumber);
  };

  const randomAnswers = shuffleArray(answerVariants);

  return (
    <ExamWrapper>
      <button type="button" onClick={handleCheckAnswer}>
        Start
      </button>
      {examWord.engWord && (
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
    </ExamWrapper>
  );
}
