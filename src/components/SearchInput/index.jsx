import { FiSearch } from 'react-icons/fi';
import { forwardRef } from 'react';
import {
  Container,
  Input,
  InputWrapper,
  SearchButton,
  SearchIcon,
} from './styles';

function SearchInput({ onChange, onFocus, onClickOutSiede }, ref) {
  return (
    <Container ref={onClickOutSiede}>
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
              ref={ref}
              onChange={onChange}
              onFocus={onFocus}
            />
          </label>
        </Input>
      </InputWrapper>
      <SearchButton>검색</SearchButton>
    </Container>
  );
}

export default forwardRef(SearchInput);
