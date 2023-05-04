import { List, SelectedList } from './style/SearchStyle';

export const SearchedItem = ({ name, selected }) => {
  if (selected) {
    return <SelectedList>{name}</SelectedList>;
  }

  return <List>{name}</List>;
};
