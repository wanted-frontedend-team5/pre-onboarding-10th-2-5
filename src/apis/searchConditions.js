import { axiosInstance } from './axiosInstance';

export const searchConditionsApi = {
  getCondition: async keyword => {
    try {
      if (!keyword) return;

      const response = await axiosInstance.get('/search-conditions', {
        params: { name: keyword },
      });

      console.info('calling api');

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
