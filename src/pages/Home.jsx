import React from 'react';
import { WordsListToLearn } from '../components/WordsListToLearn/WordsListToLearn';
import { WordModalAdd } from 'components/WordModalAdd/WordModalAdd';
import SearchInput from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';

export function Home() {
  return (
    <div>
      <Title title="Words to learn" />

      <WordModalAdd />
      <SearchInput />
      <WordsListToLearn />
    </div>
  );
}
