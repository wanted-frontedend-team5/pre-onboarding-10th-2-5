import styled from 'styled-components';
import { Input } from './common/Input';
import { Button } from './common/Button';

const Container = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchBar = () => {
  return (
    <Container>
      <Form>
        <div>icon</div>
        <Input />
        <Button>search</Button>
      </Form>
    </Container>
  );
};
