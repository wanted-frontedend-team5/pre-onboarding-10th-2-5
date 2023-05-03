import styled from 'styled-components';
import { colors } from 'styles/constants/colors';
import { position, textStyle } from 'styles/utils';
import { recommendationSizes } from './Recommendation.constants';

export const Recommendation = styled.div`
  ${position.absolute({ top: '8px' })}

  display: ${({ isActive }) => (isActive ? 'block' : 'none')};

  width: 100%;

  padding-top: 24px;
  padding-bottom: 16px;

  border-radius: 16px;

  background-color: ${colors.white};
`;

export const Title = styled.h2`
  padding: 0 ${recommendationSizes.paddingX}px;
  margin-bottom: 8px;

  ${textStyle(14)}
  font-weight: 600;
  color: ${colors.gray};
`;

export const SearchEmpty = styled.p`
  padding: 0 ${recommendationSizes.paddingX}px;
  ${textStyle(16)}
`;
