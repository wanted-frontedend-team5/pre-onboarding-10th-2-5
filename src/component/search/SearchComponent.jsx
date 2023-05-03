import { SEARCH } from 'constant/search/search';
import { SearchForm } from './SearchForm';
import { SearchMainBox } from './style/SearchStyle';

export const SearchComponent = () => {
  return (
    <SearchMainBox>
      <h1>{SEARCH.HEADER}</h1>
      <SearchForm />
    </SearchMainBox>
  );
};
