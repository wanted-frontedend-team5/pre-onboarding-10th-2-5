import axios, { AxiosError } from 'axios';
import { getCache, setCache } from 'utils/caching';

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

export const getSearchRecommend = async value => {
  if (!value) return;

  const cache = getCache(value);

  if (cache) return cache;

  try {
    const response = await instance.get('/api/v1/search-conditions/', {
      params: {
        name: value,
      },
    });
    // eslint-disable-next-line no-console
    console.info('calling api');

    setCache(value, response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
