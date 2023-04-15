import { LearnModeSelection } from 'components/LearnModeSelection/LearnModeSelection';
import { Title } from 'components/Title/Title';
import React from 'react';

export function Learn() {
  return (
    <div>
      <Title title="Choose training mode" />
      <LearnModeSelection />
    </div>
  );
}
