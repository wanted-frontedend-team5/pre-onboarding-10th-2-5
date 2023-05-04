import { useMemo, useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { useInput } from 'hooks/useInput';
import { Recommendation } from './Recommendation';
import { useDebounceRecommend } from './SearchBar.hooks';
import { searchEnterKeyCode, searchLength } from './SearchBar.constants';
import * as Styled from './SearchBar.styles';

export const SearchBar = () => {
  const { ref, isVisible, setIsVisible } = useClickOutside();
  // TODO: 더 우아하게 처리하는 방법을 모르겠습니다..
  const { value, onChange, setValue } = useInput('');
  const { recommendations } = useDebounceRecommend(value);
  const [focusIndex, setFocusIndex] = useState(0);

  // FIXME: form submit handelr
  const handleSearch = keyword => {
    alert(keyword);
    setIsVisible(false);
  };

  const recommendLen = useMemo(
    () =>
      recommendations.length + 1 <= searchLength.INDEX_MAX
        ? recommendations.length + 1
        : searchLength.INDEX_MAX,
    [recommendations],
  );

  const onKeyDownHandler = event => {
    switch (event.keyCode) {
      case searchEnterKeyCode.ENTER:
        if (!recommendations[focusIndex - 1]) return;
        setValue(recommendations[focusIndex - (1 % recommendLen)].name);
        setIsVisible(false);
        setFocusIndex(0);
        break;
      case searchEnterKeyCode.ARROW_DOWN:
        setFocusIndex(focusIndex < recommendLen - 1 ? focusIndex + 1 : 1);
        break;
      case searchEnterKeyCode.ARROW_UP:
        setFocusIndex(focusIndex === 1 ? recommendLen - 1 : focusIndex - 1);
        break;
      default:
        break;
    }
  };

  return (
    <form
      ref={ref}
      // TODO: 채욱님 께서 필요하신 대로 변경 부탁드립니다.
      onSubmit={e => {
        e.preventDefault();
        handleSearch(value);
      }}
    >
      <Styled.SearchBar>
        <Styled.SearchIcon />
        <Styled.Input
          value={value}
          onFocus={() => {
            setIsVisible(true);
            setFocusIndex(0);
          }}
          onKeyDown={onKeyDownHandler}
          onChange={onChange}
        />

        <Styled.Button>검색</Styled.Button>
      </Styled.SearchBar>

      <Recommendation
        isActive={isVisible}
        onClick={handleSearch}
        focusIndex={focusIndex}
        recommendations={recommendations}
      />
    </form>
  );
};
