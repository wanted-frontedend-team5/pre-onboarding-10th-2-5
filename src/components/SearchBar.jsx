import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { Input } from './common/Input';
import { Button } from './common/Button';
import { SearchSuggestions } from './SearchSuggestions';

const Container = styled.div``;

const Form = styled.form`
  position: relative;
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Icon = styled(AiOutlineSearch)`
  margin: 0 0.8rem;
  height: 2rem;
  width: 2rem;
`;

export const SearchBar = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchFocus = () => {
    setShowSuggestions(true);
  };

  return (
    <Container>
      <Form>
        <InputWrapper onClick={handleSearchFocus}>
          <Icon />
          <Input />
        </InputWrapper>
        <Button>search</Button>
        <SearchSuggestions />
      </Form>
    </Container>
  );
};
