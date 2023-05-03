import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  text-align: center;
  backgroundcolor: white;
  height: 56px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Main-Header</h1>
    </StyledHeader>
  );
};
