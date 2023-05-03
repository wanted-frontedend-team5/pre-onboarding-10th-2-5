import GlobalStyle from 'GlobalStyle';
import Title from 'components/Title';
import SearchInput from 'components/SearchInput';
import { Container, SearchWrapper } from 'styles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Title />
        <SearchWrapper>
          <SearchInput></SearchInput>
        </SearchWrapper>
      </Container>
    </div>
  );
};

export default App;
