import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  Container,
  Empty,
  ItemText,
  RecommendItem,
  RecommendList,
  Text,
} from './styles';

function Recommend({ searched, list, active }) {
  return (
    <Container active={active}>
      <Text>추천 검색어</Text>
      {!searched && <Empty>검색어 없음</Empty>}
      <RecommendList>
        {list &&
          list.map(el => (
            <RecommendItem key={el.id}>
              <FiSearch />
              <ItemText>{el.name}</ItemText>
            </RecommendItem>
          ))}
      </RecommendList>
    </Container>
  );
}

export default Recommend;
