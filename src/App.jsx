import { SearchBar } from 'components/SearchBar';
import { Title } from 'components/Title';
import { AppLayout } from 'components/layouts/AppLayout';

export const App = () => {
  // todo : 기업 정보가 노출되면 안됩니다 .env를 사용해서 url을 써주세요.

  return (
    <AppLayout>
      <Title marginBottom="20px">
        {`국내 모든 임상시험 검색하고 \n 온라인으로 참여하기`}
      </Title>

      <SearchBar />
    </AppLayout>
  );
};
