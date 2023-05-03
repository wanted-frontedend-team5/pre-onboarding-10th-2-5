import { SEARCH } from 'constant/search/message';
import { SearchForm } from './SearchForm';

export const SearchComponent = () => {
  return (
    <section>
      <h1>{SEARCH.HEADER}</h1>
      <SearchForm />
    </section>
  );
};
