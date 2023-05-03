import { SearchedItem } from './SearchedItem';

export const SearchedItemList = ({ isLoading, curkeyword, keywordList }) => {
  if (isLoading) {
    return (
      <ul>
        <SearchedItem name={curkeyword} />
        <hr />
        <SearchedItem name="로딩중" />
      </ul>
    );
  }

  if (keywordList.length === 0) {
    return (
      <ul>
        <SearchedItem name={curkeyword} />
        <p>추천검색어</p>
        <SearchedItem name="검색어 없음" />
      </ul>
    );
  }

  return (
    <ul>
      <SearchedItem name={curkeyword} />
      <p>추천검색어</p>
      {keywordList.map(keyword => (
        <SearchedItem key={keyword.id} name={keyword.name} />
      ))}
    </ul>
  );
};
