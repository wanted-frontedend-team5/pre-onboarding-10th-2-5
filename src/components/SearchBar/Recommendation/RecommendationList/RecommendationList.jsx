import * as Styled from './RecommendationList.styles';

export const RecommendationList = ({
  recommendations,
  focusIndex,
  onClick,
}) => {
  return (
    <Styled.List>
      {recommendations.map((recommend, index) => {
        // TODO: selected 된 item css 스타일 변경 필요
        if (focusIndex === index + 1) {
          return <li key={recommend.id}>{recommend.name}</li>;
        }
        return (
          <li key={recommend.id}>
            <Styled.Button
              type="button"
              onClick={() => onClick(recommend.name)}
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
