import { AiOutlineSearch } from 'react-icons/ai';
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

const SuggestionListContainer = styled.div`
  padding-left: 1rem;

  &:first-child {
    padding-top: 1rem;
  }

  &:last-child {
    padding-bottom: 1rem;
  }
`;

const SuggestionItem = styled.li`
  padding-top: 0.8rem;
`;

const Icon = styled(AiOutlineSearch)`
  margin-right: 0.5rem;
`;

export const SearchSuggestions = () => {
  return (
    <SuggestionsContainer>
      <SuggestionListContainer>
        <p>추천 검색어</p>
        <ul>
          <SuggestionItem>
            <Icon />
            adf
          </SuggestionItem>
        </ul>
      </SuggestionListContainer>
    </SuggestionsContainer>
  );
};
