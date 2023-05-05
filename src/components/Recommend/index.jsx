import React from 'react';
import { SearchInput } from 'components/SearchInput';
import * as _ from './style';

export const Recommend = () => {
  return (
    <_.RecommendContainer>
      <_.RecommendWrap>
        <_.RecommendTitleWrap>
          국내 모든 임상시험 검색하고 <br />
          온라인으로 참여하기
        </_.RecommendTitleWrap>
        <SearchInput />
      </_.RecommendWrap>
    </_.RecommendContainer>
  );
};
