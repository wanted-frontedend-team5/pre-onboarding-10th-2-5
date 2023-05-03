import styled from 'styled-components';
import { useState, useEffect } from 'react';

export const List = ({ inputValue }) => {
  const [userList, setUserList] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(inputValue));
    setUserList(data?.value);
  }, [inputValue]);

  return (
    <Wrapper>
      <div>추천 검색어</div>
      {userList && userList.length > 0 ? (
        userList.map(item => {
          const { id } = item;
          return (
            <div key={id}>
              <SearchList>{item.name}</SearchList>
            </div>
          );
        })
      ) : (
        <div>검색어 없음</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-radius: 24px;
  margin: 5px 0 0 0;
`;

const SearchList = styled.div`
  position: relative;
  width: 100%;
  margin: 5px 0;
`;
