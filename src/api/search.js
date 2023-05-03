import axios, { AxiosError } from 'axios';

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

export const getSearchRecommend = async value => {
  if (value === '') return;

  try {
    const response = await instance.get('/api/v1/search-conditions/', {
      params: {
        name: value,
      },
    });
    // eslint-disable-next-line no-console
    console.info('calling api');
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
