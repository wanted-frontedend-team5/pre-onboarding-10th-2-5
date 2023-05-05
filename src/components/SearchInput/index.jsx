import React, { useState, useCallback, useEffect } from 'react';
import { ListView } from 'components/ListView';
import { getResultByKeyword, debounce } from './utils';
import * as _ from './style';

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeInput = useCallback(e => {
    debounce(async keyword => {
      try {
        setLoading(true);
        const data = await getResultByKeyword(keyword);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 500)(e.target.value);
  }, []);

  useEffect(() => {
    if (inputValue) {
      getResultByKeyword(inputValue)
        .then(data => setData(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }
  }, [inputValue]);

  return (
    <_.SearchInpitWrap>
      <_.Input onChange={onChangeInput} value={inputValue} />
      <_.SearchButton>검색</_.SearchButton>
      <ListView inputValue={inputValue} />
    </_.SearchInpitWrap>
  );
};
