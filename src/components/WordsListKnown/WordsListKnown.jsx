import { WordListItem } from 'components/WordListItem/WordListItem';
import { useSelector } from 'react-redux';
import { selectFilteredWordsByKnown } from 'redux/words/selectors';
import { Table } from './WordsListKnown.styled';

export const WordsListKnown = () => {
  const words = useSelector(selectFilteredWordsByKnown);

  return (
    <div>
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
    </div>
  );
};
