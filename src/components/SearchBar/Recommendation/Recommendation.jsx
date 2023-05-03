import * as Styled from './Recommendation.styles';
import { RecommendationList } from './RecommendationList';

export const Recommendation = ({ isActive, recommendations = [], onClick }) => {
  return (
    <Styled.Container>
      <Styled.Recommendation isActive={isActive}>
        <Styled.Title>추천 검색어</Styled.Title>

        {recommendations.length === 0 && (
          <Styled.SearchEmpty>검색어 없음</Styled.SearchEmpty>
        )}

        {recommendations.length > 0 && (
          <RecommendationList
            recommendations={recommendations}
            onClick={onClick}
          />
        )}
      </Styled.Recommendation>
    </Styled.Container>
  );
};
