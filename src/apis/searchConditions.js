import { axiosInstance } from './axiosInstance';

export const searchConditionsApi = {
  getCondition: async keyword => {
    try {
      const response = await axiosInstance.get('/search-conditions', {
        params: { name: keyword },
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
