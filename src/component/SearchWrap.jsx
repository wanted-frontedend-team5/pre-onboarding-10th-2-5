import { getRecommendData } from 'api/getRecommendData';
import { Button, Input, KeywordRecommendWindow } from 'component/';
import { useEffect, useState } from 'react';

export const SearchWrap = () => {
  // todo : 기업 정보가 노출되면 안됩니다 .env를 사용해서 url을 써주세요.
  const buttonType = 'submit';
  const [inputValue, setInputValue] = useState('');
  const [recommendList, setRecommendList] = useState([]);
  const handleValue = async e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const debounce = setTimeout(async () => {
      if (inputValue) {
        const newList = await getRecommendData(inputValue);
        setRecommendList(newList);
        console.log(recommendList);
      }
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <>
      <section>
        <h2>국내 모든 임상시험 검색하고 온라인으로 참여하기</h2>
      </section>
      <form>
        <Input
          placeholder="질환명을 입력해 주세요."
          value={inputValue}
          onChange={handleValue}
        />
        <Button type={buttonType}>검색</Button>
      </form>
      <KeywordRecommendWindow>
        {inputValue
          ? recommendList.map(item => <li key={item.id}>{item.name}</li>)
          : null}
      </KeywordRecommendWindow>
    </>
  );
};
