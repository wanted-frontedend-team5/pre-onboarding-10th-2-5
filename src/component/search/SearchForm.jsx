import { useCallback, useEffect, useState } from 'react';
import { SearchCacheService } from 'lib/SearchCacheService';
import { SEARCH } from 'constant/search/search';
import { STATUS_CODE } from 'constant/api/statusCode';
import { getSearchResList } from 'api/search';
import { SearchedItemList } from './SearchedItemList';
import {
  InputBox,
  SearchButton,
  SearchInput,
  SearchedListBox,
} from './style/SearchStyle';

export const SearchForm = () => {
  const [curKeyword, setKeyword] = useState('');
  const [keyWordList, setKeywordList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isShowList, setShow] = useState(false);

  const getChangeKeywordList = async keyword => {
    const cacheCheck = SearchCacheService.checkKeyword(keyword);

    if (cacheCheck) {
      setKeywordList(cacheCheck.data);
      return;
    }

    const res = await getSearchResList(keyword);
    if (res.status === STATUS_CODE.SEARCH_SUCCESS) {
      if (res.data.length > 0) {
        setKeywordList(res.data);
      }
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

  const onFocusSearchInput = () => {
    setShow(true);
  };

  const onBlurSearchInput = () => {
    setShow(false);
  };

  const setKeywordHandler = useCallback(value => {
    setKeyword(value);
  }, []);

  useEffect(() => {
    if (keyWordList.length > 0)
      SearchCacheService.putDataCache(curKeyword, keyWordList);
  }, [curKeyword, keyWordList]);

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <InputBox>
          <SearchInput
            type="text"
            name="search"
            value={curKeyword}
            onChange={onChangeSearchInput}
            onFocus={onFocusSearchInput}
            onBlur={onBlurSearchInput}
            placeholder={SEARCH.MESSAGE.INPUT_PLACEHOLDER}
          />
          <SearchButton type="submit">🔍</SearchButton>
        </InputBox>
      </form>
      {isShowList && (
        <SearchedListBox>
          <SearchedItemList
            curkeyword={curKeyword}
            isLoading={isLoading}
            keywordList={keyWordList}
            setKeyword={setKeywordHandler}
          />
        </SearchedListBox>
      )}
    </>
  );
};
