import axios from 'axios';

// const apiUrl = process.env.REACT_APP_API_URL;

export const fetchSuggestionItems = async searchTerm => {
  const response = await axios.get(
    `/api/v1/search-conditions/?name=${searchTerm}`,
  );
  return response;
};
