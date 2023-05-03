import * as Styled from './RecommendationList.styles';

export const RecommendationList = ({ recommendations, onClick }) => {
  return (
    <Styled.List>
      {recommendations.map(recommend => (
        <li key={recommend.id}>
          <Styled.Button
            key={recommend.id}
            type="button"
            onClick={() => onClick(recommend.name)}
          >
            <Styled.SearchIcon />

            {recommend.name}
          </Styled.Button>
        </li>
      ))}
    </Styled.List>
  );
};
