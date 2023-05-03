import * as Styled from './RecommendationList.styles';

export const RecommendationList = ({ recommendations, onClick }) => {
  return (
    <Styled.List>
      {recommendations.map(recommend => (
        <li key={recommend.id}>
          <Styled.Button type="button" onClick={() => onClick(recommend.name)}>
            <Styled.SearchIcon />

            {recommend.name}
          </Styled.Button>
        </li>
      ))}
    </Styled.List>
  );
};
