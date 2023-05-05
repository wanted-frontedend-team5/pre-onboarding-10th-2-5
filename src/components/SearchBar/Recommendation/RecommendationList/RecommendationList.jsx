import * as Styled from './RecommendationList.styles';

export const RecommendationList = ({
  recommendations,
  focusIndex,
  onClick,
  setFocusIndex,
}) => {
  return (
    <Styled.List>
      {recommendations.map((recommend, index) => {
        return (
          <li key={recommend.id}>
            <Styled.Button
              isActive={index + 1 === focusIndex}
              type="button"
              onClick={() => onClick()}
              onMouseOver={() => setFocusIndex(index + 1)}
            >
              <Styled.SearchIcon />

              {recommend.name}
            </Styled.Button>
          </li>
        );
      })}
    </Styled.List>
  );
};
