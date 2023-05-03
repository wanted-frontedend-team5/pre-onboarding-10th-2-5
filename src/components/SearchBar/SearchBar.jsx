import * as Styled from './SearchBar.styles';

export const SearchBar = () => {
  return (
    <Styled.SearchBar>
      <Styled.SearchIcon />
      <Styled.Input />

      <Styled.Button>검색</Styled.Button>
    </Styled.SearchBar>
  );
};
