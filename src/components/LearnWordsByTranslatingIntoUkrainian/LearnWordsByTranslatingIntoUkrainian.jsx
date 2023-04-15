import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredWordsByUnKnown } from 'redux/words/selectors';

export function LearnWordsByTranslatingIntoUkrainian() {
  const words = useSelector(selectFilteredWordsByUnKnown);
  const [randomWord, setRandomWord] = useState('');

  const handleGetRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex].engWord);
  };

  return (
    <div>
      <h2>Practice in translating</h2>
      <button onClick={handleGetRandomWord}>Get Random Word</button>
      {randomWord && <p>{randomWord}</p>}
    </div>
  );
}
