import { SEARCH } from 'constant/search/search';
import { SearchedItem } from './SearchedItem';
import { SearchDes, ListBox } from './style/SearchStyle';

export const SearchedItemList = ({ isLoading, curkeyword, keywordList }) => {
  if (isLoading) {
    return (
      <ListBox>
        <SearchedItem name={curkeyword} />
        <hr />
        <SearchDes>{SEARCH.MESSAGE.STATUS.LOADING}</SearchDes>
      </ListBox>
    );
  }

  if (keywordList.length === 0) {
    if (curkeyword.length === 0) {
      return <SearchDes>{SEARCH.MESSAGE.START_SEARCH}</SearchDes>;
    }

    return (
      <ListBox>
        <SearchedItem name={curkeyword} />
        <hr />
        <SearchDes>{SEARCH.MESSAGE.STATUS.KEYWORD_NONE}</SearchDes>
      </ListBox>
    );
  }

  const keywordArraySlice = keywordList.slice(0, SEARCH.MAX_LIST_LENGTH);

  return (
    <ListBox>
      <SearchedItem name={curkeyword} />
      <SearchDes>{SEARCH.RECOMMAND_KEYWORD}</SearchDes>
      {keywordArraySlice.map(keyword => (
        <SearchedItem key={keyword.id} name={keyword.name} />
      ))}
    </ListBox>
  );
};
