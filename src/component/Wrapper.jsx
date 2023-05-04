import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #cae9ff;
  width: 100%;
  height: 462px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .inputWrapper {
    background-color: white;
    width: 430px;
    height: 70px;
    margin: 32px auto;
    display: flex;
    flex-direction: row;
    line-height: 70px;
    border: none;
    border-radius: 35px;
  }
`;
