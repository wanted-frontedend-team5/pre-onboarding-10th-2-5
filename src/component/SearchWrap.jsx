import { getRecommendData } from 'api/getRecommendData';

import {
  Button,
  Input,
  RecommendUnit,
  KeywordRecommendWindow,
  Wrapper,
} from 'component/';
import { useEffect, useState } from 'react';

export const SearchWrap = () => {
  const buttonType = 'submit';
  const [inputValue, setInputValue] = useState('');
  const [recommendList, setRecommendList] = useState([]);
  const handleValue = async e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const debounce = setTimeout(async () => {
      const inputValueCache = localStorage.getItem(inputValue);
      if (inputValue && !inputValueCache) {
        const newList = await getRecommendData(inputValue);
        setRecommendList(newList);
        if (newList.length > 0) {
          localStorage.setItem(inputValue, JSON.stringify(newList));
        }
      }
      if (inputValue && inputValueCache) {
        setRecommendList(JSON.parse(inputValueCache));
      }
    }, 300);
    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

  return (
    <Wrapper>
      <section>
        <h2>
          국내 모든 임상시험 검색하고
          <br /> 온라인으로 참여하기
        </h2>
      </section>
      <div className="inputWrapper">
        <form>
          <Input
            placeholder="질환명을 입력해 주세요."
            value={inputValue}
            onChange={handleValue}
          />
          <Button type={buttonType}>검색</Button>
        </form>
      </div>
      <KeywordRecommendWindow>
        {inputValue ? (
          recommendList.map(item => (
            <RecommendUnit key={item.id}>{item.name}</RecommendUnit>
          ))
        ) : (
          <RecommendUnit>검색어 없음</RecommendUnit>
        )}
      </KeywordRecommendWindow>
    </Wrapper>
  );
};
