import axios, { AxiosError } from 'axios';

axios.defaults.withCredentials = true;

export const BaseURL = process.env.REACT_APP_SERVER;

export const apis = axios.create({
  baseURL: BaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getList = async payload => {
  try {
    const response = await apis.get(`/?name=${payload}`);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      return error.response;
    }
  }
};
