import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import { colors } from 'styles/constants/colors';
import { flex } from 'styles/utils/flex';
import { textStyle } from 'styles/utils/textStyle';
import { recommendationSizes } from '../Recommendation.constants';

export const List = styled.ul`
  ${flex.column()}
`;

export const Button = styled.button`
  ${flex({ alignItems: 'center' })}
  gap: 8px;

  width: 100%;

  padding: 4px ${recommendationSizes.paddingX}px;

  ${textStyle(16)}

  &:hover {
    background-color: ${colors.grayLight};
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 18px;
`;
