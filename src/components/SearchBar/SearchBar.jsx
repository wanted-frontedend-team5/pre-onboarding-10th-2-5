import { searchConditionsApi } from 'apis/searchConditions';
import { useClickOutside } from 'hooks/useClickOutside';
import { useInput } from 'hooks/useInput';
import { useState } from 'react';
import { Recommendation } from './Recommendation';
import * as Styled from './SearchBar.styles';

export const SearchBar = () => {
  const [recommendations, setRecommendations] = useState([]);

  const keywordInput = useInput('');
  const { ref, isVisible, setIsVisible } = useClickOutside();

  const handleSearch = keyword => {
    alert(keyword);
    setIsVisible(false);
  };

  const fetchRecommendations = async () => {
    const recommendationList = await searchConditionsApi.getCondition(
      keywordInput.value,
    );
    setRecommendations(recommendationList);
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
          recommendations={recommendations}
          onClick={handleSearch}
        />
      </Styled.RecommendationWrapper>
    </form>
  );
};
