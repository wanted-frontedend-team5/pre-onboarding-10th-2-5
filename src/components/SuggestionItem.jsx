import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import { theme } from 'theme';

const Icon = styled(AiOutlineSearch)`
  margin-right: 0.5rem;
`;

const StyleSuggestionItem = styled.li`
  padding: 0.4rem 0;
  padding-left: 1.5rem;
  color: black;

  :hover {
    background-color: ${theme.hoverColor};
  }
`;

export const SuggestionItem = ({ id, name }) => {
  return (
    <StyleSuggestionItem key={id}>
      <Icon />
      {name}
    </StyleSuggestionItem>
  );
};
