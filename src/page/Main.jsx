import { getSearchResList } from 'api/search';

export const Main = () => {
  const onChangeSearchHandler = async () => {
    const res = await getSearchResList('갑');
    console.log(res);
  };

  return (
    <>
      <h1> 메인 페이지 </h1>
      <button type="button" onClick={onChangeSearchHandler}>
        갑 검색하기
      </button>
    </>
  );
};
