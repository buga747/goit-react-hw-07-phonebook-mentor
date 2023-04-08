import { WordListItem } from 'components/WordListItem/WordListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords } from 'redux/operations';
import { selectWords } from 'redux/selectors';

export const WordsList = () => {
  const dispatch = useDispatch();

  const words = useSelector(selectWords);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <ul>
      {words.map(word => (
        <WordListItem key={word.id} word={word} />
      ))}
    </ul>
  );
};
