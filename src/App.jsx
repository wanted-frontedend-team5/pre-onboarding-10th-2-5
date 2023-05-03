import GlobalStyle from 'GlobalStyles';
import { Main } from 'components/Main';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

const App = () => {
  // todo : 기업 정보가 노출되면 안됩니다 .env를 사용해서 url을 써주세요.
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
