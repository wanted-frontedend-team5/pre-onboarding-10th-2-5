import GlobalStyle from 'GlobalStyle';
import Title from 'components/Title';
import SearchInput from 'components/SearchInput';
import { Container, SearchWrapper } from 'styles';
import { getSearchRecommend } from 'api/search';
import { useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetch = async e => {
    if (!isLoading) {
      setIsLoading(true);
      await getSearchRecommend(e.target.value);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Title />
        <SearchWrapper>
          <SearchInput fetch={fetch}></SearchInput>
        </SearchWrapper>
      </Container>
    </div>
  );
};

export default App;
