import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import { colors } from 'styles/constants/colors';
import { flex, position, textStyle } from 'styles/utils';

const sizes = {
  radius: 42,
  inputPaddingX: 20,
  inputPaddingY: 12,
  icon: 21,
};

export const SearchBar = styled.div`
  ${flex()}
  position: relative;
  height: 50px;
`;

export const Input = styled.input`
  width: 100%;

  padding: ${sizes.inputPaddingY}px ${sizes.inputPaddingX}px;
  padding-left: ${sizes.inputPaddingX + sizes.icon + 8}px;

  border-radius: ${sizes.radius}px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  ${textStyle(16)}

  background-color: ${colors.white};
`;

export const Button = styled.button`
  ${flex.center()}
  width: 96px;

  border-radius: ${sizes.radius}px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${textStyle(16)}
  font-weight: 600;

  color: ${colors.white};

  background-color: ${colors.blue};
`;

export const SearchIcon = styled(AiOutlineSearch)`
  ${position.posCenterY({ left: `${sizes.inputPaddingX}px` })};

  font-size: ${sizes.icon}px;
`;

export const RecommendationWrapper = styled.div`
  position: relative;
`;
