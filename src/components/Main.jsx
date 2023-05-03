import styled from 'styled-components';
import { theme } from 'theme';
import { SearchBar } from './SearchBar';
import { Title } from './Title';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20rem;
  background-color: ${theme.bgColor};
`;

export const Main = () => {
  return (
    <Container>
      <Title />
      <SearchBar />
    </Container>
  );
};
