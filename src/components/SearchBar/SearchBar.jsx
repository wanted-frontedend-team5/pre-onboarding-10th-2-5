import * as Styled from './SearchBar.styles';

export const SearchBar = ({ value }) => {
  return (
    <Styled.SearchBar>
      <Styled.Input value={value} />

      <Styled.Button>검색</Styled.Button>
    </Styled.SearchBar>
  );
};
