import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { Input } from './common/Input';
import { Button } from './common/Button';

const Container = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;

  width: 30rem;
  height: 3rem;
  border-radius: 1.5rem;

  color: gray;
  background-color: white;

  :hover {
    cursor: pointer;
  }
`;

const Icon = styled(AiOutlineSearch)`
  display: flex;
  margin: 0 0.8rem;
  height: 2rem;
  width: 2rem;
`;

export const SearchBar = () => {
  return (
    <Container>
      <Form>
        <Icon />
        <Input />
        <Button>search</Button>
      </Form>
    </Container>
  );
};
