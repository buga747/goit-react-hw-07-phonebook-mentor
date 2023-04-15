import SearchInput from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';
import { WordsListKnown } from 'components/WordsListKnown/WordsListKnown';
import React from 'react';

export function Vocabulary() {
  return (
    <div>
      <Title title="Your Vocabulary" />
      <SearchInput />
      <WordsListKnown />
    </div>
  );
}
