import styled from 'styled-components';

export const SearchMainBox = styled.section`
  padding-top: 70px;
  background-color: #cae9ff;
  flex-direction: column;
  align-items: center;
  height: 460px;
  display: flex;
  width: 100%;
`;

export const SearchInput = styled.input`
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  width: 100%;
  position: relative;
  padding-left: 10px;
  padding-right: 8px;
`;

export const SearchButton = styled.button`
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  display: flex;
  font-weight: 500;
  display: inline-flex;
  padding: 10px
  border: 0;
  cursor: pointer;
  background-color: #007be9;
  color: white;
  justify-content: center;d
  align-items: center;
`;

export const InputBox = styled.div`
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  width: 30rem;
  max-width: 490px;
  position: relative;
  padding-right: 8px;
`;

export const SearchedListBox = styled.div`
  width: 30rem;
  max-width: 490px;
  border-radius: 42px;
  background-color: white;
  box-shadow: 2px 2px 2px 1px #cccccc;
  align-item: center;
  height: auto;
  margin: 10px;
  padding: 14px;
  display: relative;
`;

export const SearchDes = styled.span`
  color: #666666;
  font-size: 16px;
  padding-left: 2px;
`;

export const ListBox = styled.ul`
  list-style-position: inline;
  line-height: 2.3;
  list-style-type: '🔎 ';
  padding-inline-start: 2em;
`;

export const List = styled.li`
  padding-top: 1px;
  font-size: 16px;
`;
