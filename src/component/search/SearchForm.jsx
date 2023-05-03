import { useState } from 'react';
import { STATUS_CODE } from 'constant/api/statusCode';
import { getSearchResList } from 'api/search';
import { SearchedItemList } from './SearchedItemList';

export const SearchForm = () => {
  const [curKeyword, setKeyword] = useState('');
  const [keyWordList, setKeywordList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getChangeKeywordList = async keyword => {
    if (curKeyword.length === 0) {
      setKeywordList([]);
      return;
    }
    const res = await getSearchResList(keyword);
    if (res.status === STATUS_CODE.SEARCH_SUCCESS) {
      setKeywordList(res.data);
    }
  };

  const onChangeSearchInput = async e => {
    setLoading(true);
    e.preventDefault();
    setKeyword(e.target.value);
    await getChangeKeywordList(e.target.value);
    setLoading(false);
  };

  return (
    <>
      <form>
        <h1>검색하기</h1>
        <input
          type="text"
          name="search"
          value={curKeyword}
          onChange={onChangeSearchInput}
        />
        <button type="submit">검색하기</button>
      </form>
      <SearchedItemList
        curkeyword={curKeyword}
        isLoading={isLoading}
        keywordList={keyWordList}
      />
    </>
  );
};
