import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchSuggestionItems = async searchTerm => {
  const response = await axios.get(`${apiUrl}/?name=${searchTerm}`);
  return response;
};
