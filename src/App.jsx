import styled from 'styled-components';
import { flexbox } from 'styles/utils/flex';

const App = () => {
  // todo : 기업 정보가 노출되면 안됩니다 .env를 사용해서 url을 써주세요.
  const type = 'submit';
  return (
    <TestComponent>
      <header>init project</header>
      <button type={type}>123</button>
    </TestComponent>
  );
};

export default App;

const TestComponent = styled.div`
  ${flexbox()}
`;
