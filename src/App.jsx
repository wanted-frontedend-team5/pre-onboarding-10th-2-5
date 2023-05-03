import { useEffect, useState } from 'react';
import GlobalStyle from 'GlobalStyle';
import { Container, SearchWrapper } from 'styles';
import { getSearchRecommend } from 'api/search';
import Title from 'components/Title';
import SearchInput from 'components/SearchInput';
import Recommend from 'components/Recommend';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const handleChangeValue = async e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query === '') return;

    const timer = setTimeout(async () => {
      const res = await getSearchRecommend(query);
      setData(res.data);
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (query === '') setData([]);
  }, [query]);

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Title />
        <SearchWrapper>
          <SearchInput onChange={handleChangeValue}></SearchInput>
          <Recommend list={data} />
        </SearchWrapper>
      </Container>
    </div>
  );
};

export default App;
