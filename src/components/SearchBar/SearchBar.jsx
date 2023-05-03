import { useClickOutside } from 'hooks/useClickOutside';
import { useInput } from 'hooks/useInput';
import { Recommendation } from './Recommendation';
import * as Styled from './SearchBar.styles';

const dummy = [
  {
    name: '갑상선암',
    id: 4373,
  },
  {
    name: '갑상선염',
    id: 4376,
  },
  {
    name: '갑상선중독증',
    id: 4378,
  },
  {
    name: '갑상선 중독',
    id: 4381,
  },
  {
    name: '갑상선암종',
    id: 4375,
  },
  {
    name: '갑상선염증',
    id: 4377,
  },
  {
    name: '갑상선 결절',
    id: 4355,
  },
  {
    name: '갑상선 항진증',
    id: 4372,
  },
  {
    name: '갑상선저하증',
    id: 4368,
  },
  {
    name: '갑상선기능저하증',
    id: 4364,
  },
  {
    name: '갑상선기능항진증',
    id: 4369,
  },
  {
    name: '갑상선 수질암',
    id: 4359,
  },
  {
    name: '갑상선 여포암',
    id: 4361,
  },
  {
    name: '갑상선 유두암',
    id: 4363,
  },
  {
    name: '갑상선기능저하',
    id: 4367,
  },
  {
    name: '갑상선 미분화암',
    id: 4357,
  },
];

export const SearchBar = () => {
  const keywordInput = useInput();
  const { ref, isVisible, setIsVisible } = useClickOutside();

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

      <Styled.RecommendationWrapper>
        <Recommendation
          isActive={isVisible}
          recommendations={dummy}
          onClick={handleSearch}
        />
      </Styled.RecommendationWrapper>
    </form>
  );
};
