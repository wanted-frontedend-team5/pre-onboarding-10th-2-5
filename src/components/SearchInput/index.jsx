import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  Container,
  Input,
  InputWrapper,
  SearchButton,
  SearchIcon,
} from './styles';

function index() {
  return (
    <Container>
      <InputWrapper>
        <Input>
          <label htmlFor="searchBar">
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <input
              type="text"
              id="searchBar"
              placeholder="질환명을 입력해 주세요."
            />
          </label>
        </Input>
      </InputWrapper>
      <SearchButton>검색</SearchButton>
    </Container>
  );
}

export default index;
