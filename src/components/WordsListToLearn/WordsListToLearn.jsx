import { WordListItem } from 'components/WordListItem/WordListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords } from 'redux/operations';
import { selectFilteredWordsByUnKnown } from 'redux/words/selectors';
import { Table } from './WordsListToLearn.styled';

export const WordsListToLearn = () => {
  const dispatch = useDispatch();

  const words = useSelector(selectFilteredWordsByUnKnown);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Know word</th>
            <th>English</th>
            <th>Ukrainian</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map(word => {
            return <WordListItem key={word.id} word={word} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};
