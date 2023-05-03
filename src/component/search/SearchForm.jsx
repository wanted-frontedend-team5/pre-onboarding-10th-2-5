import { useCallback, useState } from 'react';
import { SEARCH } from 'constant/search/search';
import { getChangeKeywordList } from 'handler/searchCacheHandler';
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

  const onChangeSearchInput = async e => {
    e.preventDefault();
    const inputKeyword = e.target.value;
    setKeyword(inputKeyword);
    if (inputKeyword.length === 0) {
      setKeywordList([]);
      return;
    }
    setLoading(true);
    const data = await getChangeKeywordList(inputKeyword);
    if (data) setKeywordList(data);
    setLoading(false);
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
