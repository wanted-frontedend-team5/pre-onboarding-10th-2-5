import styled from 'styled-components';

import { theme } from 'theme';
import { SuggestionItem } from './SuggestionItem';

const SuggestionsContainer = styled.div`
  position: absolute;

  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  border-radius: 1.5rem;
  z-index: 2;

  background-color: white;
`;

const SuggestionListContainer = styled.div`
  &:first-child {
    padding-top: 1.5rem;
  }

  &:last-child {
    padding-bottom: 1.5rem;
  }
`;

const Title = styled.p`
  font-size: ${theme.sm};
  padding-left: 1.5rem;
`;

export const SearchSuggestions = ({ suggestions }) => {
  return (
    <SuggestionsContainer>
      <SuggestionListContainer>
        <Title>추천 검색어</Title>
        <ul>
          {suggestions.length ? (
            suggestions.map(suggestion => (
              <SuggestionItem id={suggestion.id} name={suggestion.name} />
            ))
          ) : (
            <Title>검색어 없음</Title>
          )}
        </ul>
      </SuggestionListContainer>
    </SuggestionsContainer>
  );
};
