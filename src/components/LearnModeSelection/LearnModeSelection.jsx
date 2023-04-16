import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Wrapper } from './LearnModeSelection.styled';
import { LearnWordsByTranslatingIntoUkrainian } from 'components/LearnWordsByTranslatingIntoUkrainian/LearnWordsByTranslatingIntoUkrainian';
import { LearnWordsByTranslatingIntoEnglish } from 'components/LearnWordsByTranslatingIntoEnglish/LearnWordsByTranslatingIntoEnglish';
import { RepeatAllWords } from 'components/RepeatAllWords/RepeatAllWords';

export function LearnModeSelection() {
  const [activeButton, setActiveButton] = useState('');

  const handleEnglishToUkrainianClick = () => {
    setActiveButton('englishToUkrainian');
  };

  const handleUkrainianToEnglishClick = () => {
    setActiveButton('ukrainianToEnglish');
  };
  const handleAllWordsTrainingClick = () => {
    setActiveButton('allWordsTraining');
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
        <Button type="button" onClick={handleAllWordsTrainingClick}>
          Practice all words
        </Button>
      </Wrapper>

      {activeButton === 'englishToUkrainian' && (
        <LearnWordsByTranslatingIntoUkrainian />
      )}
      {activeButton === 'ukrainianToEnglish' && (
        <LearnWordsByTranslatingIntoEnglish />
      )}
      {activeButton === 'allWordsTraining' && <RepeatAllWords />}
    </div>
  );
}
