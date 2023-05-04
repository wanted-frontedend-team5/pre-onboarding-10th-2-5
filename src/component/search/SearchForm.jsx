import { useEffect, useState } from 'react';
import { SEARCH } from 'constant/search/search';
import { getChangeKeywordList } from 'handler/searchCacheHandler';
import { useInput } from 'hooks/useInput';
import { SearchedItemList } from './SearchedItemList';
import {
  InputBox,
  SearchButton,
  SearchInput,
  SearchedListBox,
} from './style/SearchStyle';

export const SearchForm = () => {
  const [keyword, onChange] = useInput('');
  const [keyWordList, setKeywordList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isShowList, setShow] = useState(false);

  useEffect(() => {
    const checkKeyword = async () => {
      if (keyword.length === 0) {
        setKeywordList([]);
        return;
      }
      setLoading(true);
      const data = await getChangeKeywordList(keyword);
      if (data) setKeywordList(data);
      setLoading(false);
    };

    checkKeyword();
  }, [keyword]);

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  const onFocusSearchInput = () => {
    setShow(true);
  };

  const onBlurSearchInput = () => {
    setShow(false);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <InputBox>
          <SearchInput
            type="text"
            name="search"
            value={keyword}
            onChange={onChange}
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
            curkeyword={keyword}
            isLoading={isLoading}
            keywordList={keyWordList}
          />
        </SearchedListBox>
      )}
    </>
  );
};
