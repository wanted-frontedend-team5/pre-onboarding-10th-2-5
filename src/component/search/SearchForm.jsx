import { useState } from 'react';
import { SEARCH } from 'constant/search/search';
import { STATUS_CODE } from 'constant/api/statusCode';
import { getSearchResList } from 'api/search';
import { SearchedItemList } from './SearchedItemList';

export const SearchForm = () => {
  const [curKeyword, setKeyword] = useState('');
  const [keyWordList, setKeywordList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getChangeKeywordList = async keyword => {
    const res = await getSearchResList(keyword);
    if (res.status === STATUS_CODE.SEARCH_SUCCESS) {
      setKeywordList(res.data);
    }
  };

  const onChangeSearchInput = async e => {
    e.preventDefault();
    const inputKeyword = e.target.value;
    setKeyword(inputKeyword);
    if (inputKeyword.length > 0) {
      setLoading(true);
      await getChangeKeywordList(inputKeyword);
      setLoading(false);
    } else setKeywordList([]);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h1>{SEARCH.INPUT_HEADER}</h1>
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
