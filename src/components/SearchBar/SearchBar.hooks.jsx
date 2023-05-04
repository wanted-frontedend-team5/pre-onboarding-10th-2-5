import { searchConditionsApi } from 'apis/searchConditions';
import { useDebounce } from 'hooks/useDebounce';
import { useCallback, useState } from 'react';
import { RECOMMENDATION_DELAY } from './SearchBar.constants';

export const useDebounceRecommend = keyword => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = useCallback(async () => {
    const recommendationList = await searchConditionsApi.getCondition(keyword);
    setRecommendations(recommendationList);
  }, [keyword]);

  useDebounce(fetchRecommendations, RECOMMENDATION_DELAY);

  return { recommendations };
};
