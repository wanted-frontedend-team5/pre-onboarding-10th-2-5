import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 490px;
  height: 70px;
  border-radius: 42px;
  /* border: 2px solid #fff; */
  background-color: #fff;
  overflow: hidden;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 10px 20px 24px;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  label,
  input {
    width: 100%;
  }
  label {
    display: flex;
    align-items: center;
  }
`;

export const SearchIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

export const SearchButton = styled.button`
  min-width: 100px;
  height: 100%;
  background-color: #007be9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: white;
`;
