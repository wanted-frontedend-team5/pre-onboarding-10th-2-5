import { createGlobalStyle } from 'styled-components';
import { Search } from 'components/search/Search';

const App = () => {
  // todo : 기업 정보가 노출되면 안됩니다 .env를 사용해서 url을 써주세요.
  return (
    <>
      <GlobalStyle />
      <Search />
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
   font-size: 0.9rem;
   margin: 0;
   padding: 0;
   background-color: #bfe4ff;
  }
`;
