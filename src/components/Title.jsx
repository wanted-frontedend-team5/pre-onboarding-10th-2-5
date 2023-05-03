import styled from 'styled-components';
import { theme } from 'theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${theme.lg};
  font-weight: 600;
  margin-bottom: 1.5rem;

  p {
    &:first-child {
      margin-bottom: 1rem;
    }
  }
`;

export const Title = () => {
  return (
    <Container>
      <p>국내 모든 임상시험 검색하고</p>
      <p>온라인으로 참여하기</p>
    </Container>
  );
};
