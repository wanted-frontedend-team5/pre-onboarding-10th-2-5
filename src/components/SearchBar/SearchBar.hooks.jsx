import { searchConditionsApi } from 'apis/searchConditions';
import { useDebounce } from 'hooks/useDebounce';
import { useCallback, useState } from 'react';
import { RECOMMENDATION_DELAY, searchLength } from './SearchBar.constants';

export const useDebounceRecommend = keyword => {
  const [recommendations, setRecommendations] = useState([]);

  // TODO: 일단 MaxLength : 7 로 처리 하겠습니다.
  const fetchRecommendations = useCallback(async () => {
    const recommendationList = await searchConditionsApi.getCondition(keyword);
    if (!recommendationList) {
      setRecommendations([]);
      return;
    }
    setRecommendations(recommendationList.slice(0, searchLength.LIST_MAX));
  }, [keyword]);

  useDebounce(fetchRecommendations, RECOMMENDATION_DELAY);

  return { recommendations };
};
