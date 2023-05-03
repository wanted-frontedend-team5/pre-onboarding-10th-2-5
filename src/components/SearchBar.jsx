import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
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
        <div>
          <BsSearch></BsSearch>
        </div>
        <Input />
        <Button>search</Button>
      </Form>
    </Container>
  );
};
