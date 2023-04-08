import React from 'react';
import { WordsList } from '../components/WordsList/WordsList';
import { WordModalAdd } from 'components/WordModalAdd/WordModalAdd';

export function Home() {
  return (
    <div>
      <WordModalAdd />
      <WordsList />
    </div>
  );
}
