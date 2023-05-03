import styled from 'styled-components';
import { Input } from './common/Input';
import { Button } from './common/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBar = () => {
  return (
    <Container>
      <div>icon</div>
      <Input />
      <Button>search</Button>
    </Container>
  );
};
