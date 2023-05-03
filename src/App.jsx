import { GlobalStyle } from 'common/GlobalStyle';
import { Header } from 'components/Header';

const App = () => {
  // todo : 기업 정보가 노출되면 안됩니다 .env를 사용해서 url을 써주세요.
  return (
    <div>
      <GlobalStyle />
      <Header />
    </div>
  );
};

export default App;
