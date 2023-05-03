import styled from 'styled-components';
import { colors } from 'styles/constants/colors';
import { flex } from 'styles/utils/flex';
import { textStyle } from 'styles/utils/textStyle';

const BORDER_RADIUS = 42;

export const SearchBar = styled.form`
  ${flex()}
  height: 50px;
`;

export const Input = styled.input`
  width: 100%;

  padding: 12px 20px;

  border-radius: ${BORDER_RADIUS}px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  background-color: ${colors.white};
`;

export const Button = styled.button`
  ${flex.center()}
  width: 96px;

  border-radius: ${BORDER_RADIUS}px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${textStyle(16)}
  font-weight: 600;

  color: ${colors.white};

  background-color: ${colors.blue};
`;
