import { searchConditionsApi } from 'apis/searchConditions';
import { useDebounce } from 'hooks/useDebounce';
import { useCallback, useState } from 'react';
import {
  RECOMMENDATION_DELAY,
  searchEnterKeyCode,
  searchLength,
} from './SearchBar.constants';

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

export const useKeyPress = (recommendations, setKeyword) => {
  const [focusIndex, setFocusIndex] = useState(0);

  const recommendLen =
    recommendations.length + 1 <= searchLength.INDEX_MAX
      ? recommendations.length + 1
      : searchLength.INDEX_MAX;

  const onKeyDownHandler = event => {
    switch (event.keyCode) {
      case searchEnterKeyCode.ENTER:
        if (!recommendations[focusIndex - 1]) return;
        setKeyword(recommendations[focusIndex - (1 % recommendLen)].name);
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

  return { focusIndex, setFocusIndex, onKeyDownHandler };
};
