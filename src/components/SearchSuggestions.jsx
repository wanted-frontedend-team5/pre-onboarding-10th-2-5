import styled from 'styled-components';

const SuggestionsContainer = styled.div`
  position: absolute;

  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  border-radius: 1.5rem;
  z-index: 1;

  background-color: white;
`;

export const SearchSuggestions = () => {
  return (
    <SuggestionsContainer>
      <div>adfasd</div>
      <div>adfasd</div>
      <div>adfasd</div>
      <div>adfasd</div>
    </SuggestionsContainer>
  );
};
