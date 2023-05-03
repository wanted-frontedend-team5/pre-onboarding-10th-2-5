import { SEARCH } from 'constant/search/search';
import { SearchForm } from './SearchForm';

export const SearchComponent = () => {
  return (
    <section>
      <h1>{SEARCH.HEADER}</h1>
      <SearchForm />
    </section>
  );
};
