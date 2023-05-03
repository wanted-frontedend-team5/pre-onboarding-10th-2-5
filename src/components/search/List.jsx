import styled from 'styled-components';

export const List = ({ inputValue, data }) => {
  console.log(data);
  console.log(inputValue);
  return (
    <Wrapper>
      <div>추천 검색어</div>
      {data && data.length > 0 ? (
        data.map((item, index) => {
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
