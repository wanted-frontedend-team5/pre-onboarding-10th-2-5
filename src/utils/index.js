import axios from 'axios';
import { useState, useEffect } from 'react';

const getResultByKeyword = async keyword => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}search-conditions/?name=${keyword}}`,
  );
  return data.slice(0, 10);
};

export const useResults = keyword => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (keyword) {
        try {
          setLoading(true);
          const response = await getResultByKeyword(keyword);
          setData(response);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      } else {
        setData([]);
      }
    };

    fetchData();
  }, [keyword]);

  return { loading, data, error };
};

export const debounce = (callback, duration) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), duration);
  };
};
