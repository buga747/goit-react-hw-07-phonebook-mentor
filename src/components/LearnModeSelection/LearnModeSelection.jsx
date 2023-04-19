import React, { useState } from 'react';
import {
  StyledButton,
  ButtonWrapper,
  Wrapper,
} from './LearnModeSelection.styled';
import { LearnWordsByTranslatingIntoUkrainian } from 'components/LearnWordsByTranslatingIntoUkrainian/LearnWordsByTranslatingIntoUkrainian';
import { LearnWordsByTranslatingIntoEnglish } from 'components/LearnWordsByTranslatingIntoEnglish/LearnWordsByTranslatingIntoEnglish';
import { RepeatAllWords } from 'components/RepeatAllWords/RepeatAllWords';
import { WordExamModal } from 'components/WordExamModal/WordExamModal';

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

  const handleExamTrainingClick = () => {
    setActiveButton('examTraining');
  };

  return (
    <div>
      <ButtonWrapper>
        <StyledButton type="button" onClick={handleEnglishToUkrainianClick}>
          Translate from English into Ukrainian
        </StyledButton>
        <StyledButton type="button" onClick={handleUkrainianToEnglishClick}>
          Translate from Ukrainian into English
        </StyledButton>
        <StyledButton type="button" onClick={handleAllWordsTrainingClick}>
          Practice all words
        </StyledButton>
        <StyledButton type="button" onClick={handleExamTrainingClick}>
          Exam{' '}
        </StyledButton>
      </ButtonWrapper>

      <Wrapper>
        {activeButton === 'englishToUkrainian' && (
          <LearnWordsByTranslatingIntoUkrainian />
        )}
        {activeButton === 'ukrainianToEnglish' && (
          <LearnWordsByTranslatingIntoEnglish />
        )}
        {activeButton === 'allWordsTraining' && <RepeatAllWords />}
        {activeButton === 'examTraining' && <WordExamModal />}
      </Wrapper>
    </div>
  );
}
