import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #2d3d50;
  height: 56px;
`;

const StyeldBody = styled.div`
  background-color: rgb(244, 246, 250);
  color: #a7afb7;
  width: 100%;
  height: 200px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Footer = () => {
  return (
    <>
      <StyeldBody />
      <StyledFooter />
    </>
  );
};
