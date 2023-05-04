import * as Styled from './Title.styles';

export const Title = ({ children, ...props }) => {
  return <Styled.Title {...props}>{children}</Styled.Title>;
};
