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

  const handleSearch = () => {
    setIsVisible(false);
  };

  const onChangeInput = e => {
    onChange(e);
    setIsVisible(true);
  };

  return (
    <form
      ref={ref}
      onSubmit={e => {
        e.preventDefault();
        handleSearch();
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
          onChange={onChangeInput}
        />

        <Styled.Button>검색</Styled.Button>
      </Styled.SearchBar>

      <Recommendation
        isActive={isVisible}
        onClick={handleSearch}
        focusIndex={focusIndex}
        recommendations={recommendations}
        setFocusIndex={setFocusIndex}
      />
    </form>
  );
};
