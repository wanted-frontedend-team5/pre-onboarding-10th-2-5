import { SearchedItemList } from './SearchedItemList';
import { SearchForm } from './SearchForm';

export const SearchComponent = () => {
  return (
    <section>
      <h1>검색 컴포넌트</h1>
      <SearchForm />
      <SearchedItemList />
    </section>
  );
};
