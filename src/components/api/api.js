import axios, { AxiosError } from 'axios';

axios.defaults.withCredentials = true;

export const ONE_MINUTE = 1000 * 60;

export const BaseURL = process.env.REACT_APP_SERVER;

export const apis = axios.create({
  baseURL: BaseURL,
  Accept: 'application/json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getList = async payload => {
  try {
    const response = await apis.get(`/?name=${payload}`);
    const now = new Date();
    const obj = {
      value: response.data,
      expire: now.getTime() + ONE_MINUTE,
    };
    localStorage.setItem('value', JSON.stringify(obj));
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      return error.response;
    }
  }
};
