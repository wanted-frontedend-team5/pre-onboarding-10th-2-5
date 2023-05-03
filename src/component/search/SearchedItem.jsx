import { List } from './style/SearchStyle';

export const SearchedItem = ({ name, setKeyword }) => {
  // TODO:이동 가능한 컴포넌트로 제작
  const onClickHandler = () => {
    setKeyword(name);
  };

  return <List onClick={onClickHandler}>{name}</List>;
};
