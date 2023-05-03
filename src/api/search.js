import axios, { AxiosError } from 'axios';

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

export const getSearchRecommend = async value => {
  try {
    const response = await instance.get('/api/v1/search-conditions/', {
      params: {
        name: value,
      },
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
