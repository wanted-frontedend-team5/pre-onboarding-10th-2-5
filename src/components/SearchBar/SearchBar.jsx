import { useClickOutside } from 'hooks/useClickOutside';
import { useInput } from 'hooks/useInput';
import { Recommendation } from './Recommendation';
import { useDebounceRecommend } from './SearchBar.hooks';
import * as Styled from './SearchBar.styles';

export const SearchBar = () => {
  const { ref, isVisible, setIsVisible } = useClickOutside();
  const keywordInput = useInput('');
  const { recommendations } = useDebounceRecommend(keywordInput.value);

  const handleSearch = keyword => {
    alert(keyword);
    setIsVisible(false);
  };

  return (
    <form
      ref={ref}
      onSubmit={e => {
        e.preventDefault();
        handleSearch(keywordInput.value);
      }}
    >
      <Styled.SearchBar>
        <Styled.SearchIcon />
        <Styled.Input onFocus={() => setIsVisible(true)} {...keywordInput} />

        <Styled.Button>검색</Styled.Button>
      </Styled.SearchBar>

      <Recommendation
        isActive={isVisible}
        recommendations={recommendations}
        onClick={handleSearch}
      />
    </form>
  );
};
