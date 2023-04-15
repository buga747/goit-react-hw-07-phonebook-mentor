import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Wrapper } from './LearnModeSelection.styled';
import { LearnWordsByTranslatingIntoUkrainian } from 'components/LearnWordsByTranslatingIntoUkrainian/LearnWordsByTranslatingIntoUkrainian';

export function LearnModeSelection() {
  const [activeButton, setActiveButton] = useState('');

  const handleEnglishToUkrainianClick = () => {
    setActiveButton('englishToUkrainian');
  };

  const handleUkrainianToEnglishClick = () => {
    setActiveButton('ukrainianToEnglish');
  };

  return (
    <div>
      <Wrapper>
        <Button type="button" onClick={handleEnglishToUkrainianClick}>
          Translate from English into Ukrainian
        </Button>
        <Button type="button" onClick={handleUkrainianToEnglishClick}>
          Translate from Ukrainian into English
        </Button>
      </Wrapper>

      {activeButton === 'englishToUkrainian' && (
        <LearnWordsByTranslatingIntoUkrainian />
      )}
      {activeButton === 'ukrainianToEnglish' && (
        <div>Information for translating from Ukrainian into English</div>
      )}
    </div>
  );
}
