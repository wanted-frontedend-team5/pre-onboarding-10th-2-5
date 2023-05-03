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

function Recommend({ list }) {
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (list.length !== 0) setIsSearch(true);
  }, [list.length]);

  return (
    <Container>
      <Text>추천 검색어</Text>
      <Empty>검색어 없음</Empty>
      <RecommendList>
        {list.map(el => (
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
