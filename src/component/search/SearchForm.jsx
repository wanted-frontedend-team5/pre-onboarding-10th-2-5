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
  const [keyword, onChange, setValue] = useInput('');
  const [keyWordList, setKeywordList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isShowList, setShow] = useState(true);
  const [focusIndex, setFocusIndex] = useState(0);

  const SEARCH_LENGTH =
    keyWordList.length <= SEARCH.MAX_LIST_LENGTH
      ? keyWordList.length
      : SEARCH.MAX_LIST_LENGTH;

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
      setFocusIndex(0);
    };

    checkKeyword();
  }, [keyword]);

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  const onKeyDownHandler = event => {
    const index = focusIndex;

    switch (event.keyCode) {
      case SEARCH.KEY.ENTER:
        if (!keyWordList[focusIndex]) return;
        setValue(keyWordList[focusIndex % SEARCH_LENGTH].name);
        setShow(false);
        setFocusIndex(0);
        break;
      case SEARCH.KEY.ARROW_DOWN:
        setFocusIndex((index + 1) % SEARCH_LENGTH);
        break;
      case SEARCH.KEY.ARROW_UP:
        setFocusIndex(index === 0 ? SEARCH_LENGTH - 1 : index - 1);
        break;
      default:
        break;
    }
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
            onKeyDown={onKeyDownHandler}
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
            focusIndex={focusIndex}
          />
        </SearchedListBox>
      )}
    </>
  );
};
