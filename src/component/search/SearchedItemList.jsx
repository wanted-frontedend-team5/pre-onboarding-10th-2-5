import { SEARCH } from 'constant/search/message';
import { SearchedItem } from './SearchedItem';

export const SearchedItemList = ({ isLoading, curkeyword, keywordList }) => {
  if (isLoading) {
    return (
      <ul>
        <SearchedItem name={curkeyword} />
        <hr />
        <SearchedItem name={SEARCH.STATUS.LODING} />
      </ul>
    );
  }

  if (keywordList.length === 0) {
    return (
      <ul>
        <SearchedItem name={curkeyword} />
        <p>{SEARCH.RECOMMAND_KEYWORD}</p>
        <SearchedItem name={SEARCH.STATUS.KEYWORD_NONE} />
      </ul>
    );
  }

  return (
    <ul>
      <SearchedItem name={curkeyword} />
      <p>{SEARCH.RECOMMAND_KEYWORD}</p>
      {keywordList.map(keyword => (
        <SearchedItem key={keyword.id} name={keyword.name} />
      ))}
    </ul>
  );
};
