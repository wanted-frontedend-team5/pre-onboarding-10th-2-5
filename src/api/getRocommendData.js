import { AxiosError } from 'axios';
import { axiosInstance } from './axiosInstance';

export const getRecommendData = async KeywordInput => {
  try {
    const response = await axiosInstance.get(`/api/v1/search-conditions/`, {
      params: {
        name: KeywordInput,
      },
    });
    // eslint-disable-next-line no-console
    console.log(response);
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
