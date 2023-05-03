import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import { theme } from 'theme';

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

const SuggestionItem = styled.li`
  padding: 0.4rem 0;
  padding-left: 1.5rem;
  color: black;

  :hover {
    background-color: ${theme.hoverColor};
  }
`;

const Icon = styled(AiOutlineSearch)`
  margin-right: 0.5rem;
`;

export const SearchSuggestions = ({ suggestions }) => {
  return (
    <SuggestionsContainer>
      <SuggestionListContainer>
        <Title>추천 검색어</Title>
        <ul>
          {suggestions.map(suggestion => (
            <SuggestionItem key={suggestion.id}>
              <Icon />
              {suggestion.name}
            </SuggestionItem>
          ))}
        </ul>
      </SuggestionListContainer>
    </SuggestionsContainer>
  );
};
