import React from 'react';
import { WordsList } from '../components/WordsList/WordsList';
import { WordModalAdd } from 'components/WordModalAdd/WordModalAdd';
import SearchInput from 'components/Filter/Filter';

export function Home() {
  return (
    <div>
      <WordModalAdd />
      <SearchInput />
      <WordsList />
    </div>
  );
}
