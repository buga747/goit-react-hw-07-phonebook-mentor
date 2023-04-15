import React from 'react';
import { useSelector } from 'react-redux';
import { selectWordsByKnown } from 'redux/words/selectors';

export function KnownWords() {
  const words = useSelector(selectWordsByKnown);
  return (
    <ul>
      {words.map(word => (
        <li>{word.engWord}</li>
      ))}
    </ul>
  );
}
