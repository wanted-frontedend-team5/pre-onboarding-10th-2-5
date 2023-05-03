import GlobalStyle from 'GlobalStyles';
import Input from 'components/Input';
import { SearchBar } from 'components/SearchBar';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

const App = () => {
  // todo : 기업 정보가 노출되면 안됩니다 .env를 사용해서 url을 써주세요.
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
      <SearchBar />
    </ThemeProvider>
  );
};

export default App;
