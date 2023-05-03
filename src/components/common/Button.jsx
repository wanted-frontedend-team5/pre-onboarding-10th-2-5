import styled from 'styled-components';
import { theme } from 'theme';

const Container = styled.button`
  display: flex;
  align-items: center;

  height: 100%;
  width: 5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  padding-left: 1rem;

  background-color: ${theme.pointColor};
  color: white;

  :hover {
    cursor: pointer;
  }
`;

export const Button = () => {
  return <Container>검색</Container>;
};
