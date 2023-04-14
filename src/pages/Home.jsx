import React from 'react';
import { WordsList } from '../components/WordsList/WordsList';
import { WordModalAdd } from 'components/WordModalAdd/WordModalAdd';
import SearchInput from 'components/SearchInput/SearchInput';

export function Home() {
  return (
    <div>
      <WordModalAdd />
      <SearchInput />
      <WordsList />
    </div>
  );
}
