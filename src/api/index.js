import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getResultByKeyword = async keyword => {
  const { data } = await axios.get(
    `${API_URL}/search-conditions/?name=${keyword}}`,
  );
  return data.slice(0, 10);
};
