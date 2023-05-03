import styled from 'styled-components';
import { theme } from 'theme';
import { SuggestionItem } from './SuggestionItem';

const SuggestionItemState = styled.p`
  margin-top: 1rem;
  font-size: ${theme.sm};
  text-align: center;
`;
export const SuggestionList = ({ suggestions, activeSuggestion }) => {
  return (
    <ul>
      {suggestions.length ? (
        suggestions.map((suggestion, index) => (
          <SuggestionItem
            id={suggestion.id}
            name={suggestion.name}
            activeSuggestion={activeSuggestion}
            index={index}
          />
        ))
      ) : (
        <SuggestionItemState>검색어 없음</SuggestionItemState>
      )}
    </ul>
  );
};
