import { SEARCH } from 'constant/search/search';
import { SearchedItem } from './SearchedItem';

export const SearchedItemList = ({ isLoading, curkeyword, keywordList }) => {
  if (isLoading) {
    return (
      <ul>
        <SearchedItem name={curkeyword} />
        <hr />
        <SearchedItem name={SEARCH.MESSAGE.STATUS.LOADING} />
      </ul>
    );
  }

  if (keywordList.length === 0) {
    return (
      <ul>
        <SearchedItem name={SEARCH.MESSAGE.STATUS.KEYWORD_NONE} />
      </ul>
    );
  }

  const keywordArraySlice = keywordList.slice(0, SEARCH.MAX_LIST_LENGTH);

  return (
    <ul>
      <SearchedItem name={curkeyword} />
      <p>{SEARCH.MESSAGE.RECOMMAND_KEYWORD}</p>
      {keywordArraySlice.map(keyword => (
        <SearchedItem key={keyword.id} name={keyword.name} />
      ))}
    </ul>
  );
};
