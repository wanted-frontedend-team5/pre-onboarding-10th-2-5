import { useClickOutside } from 'hooks/useClickOutside';
import { useInput } from 'hooks/useInput';
import { Recommendation } from './Recommendation';
import { useDebounceRecommend, useKeyPress } from './SearchBar.hooks';
import * as Styled from './SearchBar.styles';

export const SearchBar = () => {
  const { ref, isVisible, setIsVisible } = useClickOutside();
  const { value, onChange, setValue } = useInput('');
  const { recommendations } = useDebounceRecommend(value);
  const { focusIndex, setFocusIndex, onKeyDownHandler } = useKeyPress(
    recommendations,
    setValue,
  );

  // FIXME: form submit handelr
  const handleSearch = keyword => {
    alert(keyword);
    setIsVisible(false);
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
