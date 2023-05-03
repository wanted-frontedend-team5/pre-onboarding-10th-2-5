import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getList } from '../api/api';
import { List } from './List';

export const Search = () => {
  const [inputValue, setInputValue] = useState('암');
  const [userList, setUserList] = useState('');

  useEffect(() => {
    const getUserList = async () => {
      const response = await getList(inputValue);
      setUserList(response);
    };
    getUserList();
    console.info('calling api');
  }, [inputValue]);

  return (
    <SearchLayout>
      <Wrapper>
        <Title>{'국내 모든 임상시험 검색하고 \n 온라인으로 참여하기'}</Title>
        <ElBox>
          <Input
            type="text"
            placeholder="질환명을 입력해 주세요."
            onChange={e => setInputValue(e.target.value)}
          />
          <Button>검색</Button>
        </ElBox>
        <List data={userList} inputValue={inputValue} />
      </Wrapper>
    </SearchLayout>
  );
};

const SearchLayout = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  margin: 55px 0 0 0;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-size: 2rem;
  white-space: pre-wrap;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
`;

const ElBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 0 0;
  background-color: transparent;
`;

const Input = styled.input`
  width: 450px;
  height: 60px;
  border-radius: 42px;
  background-color: #fff;
  border: none;
  padding: 20px 15px 10px;
  :focus {
    outline: 2px solid rgb(0, 123, 233);
  }
  ::placeholder {
    color: #d3d3d3;
    font-size: 1rem;
    font-weight: 700;
  }
`;

const Button = styled.button`
  position: absolute;
  width: 70px;
  height: 100%;
  right: 0;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  border: none;
  color: #fff;
  background-color: #007be9;
  cursor: pointer;
`;
