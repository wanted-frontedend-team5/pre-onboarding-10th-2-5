import axios, { AxiosError } from 'axios';
import { searchHeader } from 'constant/api/header';
import { ENDPOINT } from 'constant/api/endpoint';

const searchInstance = axios.create({
  headers: searchHeader,
});

export const getSearchResList = async searchItem => {
  try {
    const result = await searchInstance.get(ENDPOINT.SEARCH_CONDITION, {
      params: {
        name: searchItem,
      },
    });

    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
