import styled from 'styled-components';

const SuggestionsContainer = styled.div`
  position: absolute;

  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  border-radius: 1.5rem;
  z-index: 2;

  background-color: white;
`;

export const SearchSuggestions = () => {
  return (
    <SuggestionsContainer>
      <div>adf</div>
      <div>adf</div>
      <div>adf</div>
    </SuggestionsContainer>
  );
};
