import { WordListItem } from 'components/WordListItem/WordListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords } from 'redux/operations';
import { selectFilteredWords } from 'redux/selectors';
import { Table } from './WordList.styled';

export const WordsList = () => {
  const dispatch = useDispatch();

  const words = useSelector(selectFilteredWords);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <Table>
      <thead>
        <tr>
          <th>Select</th>
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
  );
};
