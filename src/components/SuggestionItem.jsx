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

  ${({ isActive }) => isActive && `background-color: ${theme.hoverColor};`}
`;

export const SuggestionItem = ({
  id,
  name,
  activeSuggestion,
  index,
  setActiveSuggestion,
  setSearchValue,
  suggestions,
}) => {
  const handlerMouseOver = () => {
    setActiveSuggestion(index);
  };

  const handlerClick = () => {
    setSearchValue(suggestions[index].name);
  };

  return (
    <StyleSuggestionItem
      key={id}
      isActive={index === activeSuggestion}
      onMouseOver={handlerMouseOver}
      onClick={handlerClick}
    >
      <Icon />
      {name}
    </StyleSuggestionItem>
  );
};
