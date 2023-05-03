import { Button } from 'component/Button';
import { useState } from 'react';

const App = () => {
  // todo : 기업 정보가 노출되면 안됩니다 .env를 사용해서 url을 써주세요.
  const buttonType = 'submit';
  // eslint-disable-next-line no-unused-vars
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h2>국내 모든 임상시험 검색하고 온라인으로 참여하기</h2>
      <form>
        <label htmlFor="searchDisease">
          질환명 검색창
          <input
            id="searchDisease"
            placeholder="질환명을 입력해 주세요."
            value={inputValue}
          />
        </label>
        <Button type={buttonType}>검색</Button>
      </form>
    </div>
  );
};

export default App;
