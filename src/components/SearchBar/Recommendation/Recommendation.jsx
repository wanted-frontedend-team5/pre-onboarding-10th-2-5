import * as Styled from './Recommendation.styles';
import { RecommendationList } from './RecommendationList';

export const Recommendation = ({
  isActive,
  recommendations = [],
  onClick,
  focusIndex,
  setFocusIndex,
}) => {
  return (
    <Styled.Container isActive={isActive}>
      <Styled.Recommendation>
        <Styled.Title>추천 검색어</Styled.Title>

        {recommendations.length === 0 && (
          <Styled.SearchEmpty>검색어 없음</Styled.SearchEmpty>
        )}

        {recommendations.length > 0 && (
          <RecommendationList
            recommendations={recommendations}
            focusIndex={focusIndex}
            onClick={onClick}
            setFocusIndex={setFocusIndex}
          />
        )}
      </Styled.Recommendation>
    </Styled.Container>
  );
};
