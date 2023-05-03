import styled from 'styled-components';
import { theme } from 'theme';
import { SuggestionItem } from './SuggestionItem';

const SuggestionItemState = styled.p`
  margin-top: 1rem;
  font-size: ${theme.sm};
  text-align: center;
`;
export const SuggestionList = ({ suggestions }) => {
  return (
    <ul>
      {suggestions.length ? (
        suggestions.map(suggestion => (
          <SuggestionItem id={suggestion.id} name={suggestion.name} />
        ))
      ) : (
        <SuggestionItemState>검색어 없음</SuggestionItemState>
      )}
    </ul>
  );
};
