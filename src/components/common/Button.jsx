import styled from 'styled-components';
import { theme } from 'theme';

const Container = styled.button`
  background-color: ${theme.pointColor};
  color: white;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = () => {
  return <Container>B</Container>;
};
