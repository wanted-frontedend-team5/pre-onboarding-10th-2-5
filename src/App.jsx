import styled from 'styled-components';
import { colors } from 'styles/constants/colors';
import { flexbox } from 'styles/utils/flex';

export const App = () => {
  // todo : 기업 정보가 노출되면 안됩니다 .env를 사용해서 url을 써주세요.
  const type = 'submit';
  return (
    <TestComponent>
      <header>init project</header>
      <TestButton type={type}>123</TestButton>
    </TestComponent>
  );
};

const TestComponent = styled.div`
  ${flexbox()}
`;

const TestButton = styled.button`
  background: ${colors.blue};
  color: ${colors.white};
`;
