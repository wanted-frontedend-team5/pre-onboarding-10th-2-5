import * as Styled from './AppLayout.styles';

export const AppLayout = ({ children }) => {
  return (
    <Styled.AppLayout>
      <Styled.Main>{children}</Styled.Main>
    </Styled.AppLayout>
  );
};
