import { useEffect, useRef, useState } from 'react';
import GlobalStyle from 'GlobalStyle';
import { Container, SearchWrapper } from 'styles';
import { getSearchRecommend } from 'api/search';
import Title from 'components/Title';
import SearchInput from 'components/SearchInput';
import Recommend from 'components/Recommend';
import useOutSideRef from 'hooks/useOutSideRef';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [searchFocus, setSearchFocus] = useState(false);
  const inputRef = useRef(null);
  const outSideRef = useOutSideRef(setSearchFocus);

  const handleChangeValue = async e => {
    setQuery(e.target.value);
  };
  const handleFocus = () => setSearchFocus(true);

  useEffect(() => {
    if (query === '') return;

    const timer = setTimeout(async () => {
      const res = await getSearchRecommend(query);
      setData(res);
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Title />
        <SearchWrapper>
          <SearchInput
            ref={inputRef}
            onChange={handleChangeValue}
            onFocus={handleFocus}
            onClickOutSiede={outSideRef}
          />
          <Recommend list={data} searched={query !== ''} active={searchFocus} />
        </SearchWrapper>
      </Container>
    </div>
  );
};

export default App;
