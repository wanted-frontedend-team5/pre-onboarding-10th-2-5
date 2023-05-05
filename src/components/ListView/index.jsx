import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ListView = ({ inputValue }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (inputValue) {
        try {
          setLoading(true);
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/v1/search-conditions/?name=${inputValue}`,
          );
          setData(response.data.slice(0, 10));
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [inputValue]);

  return <div>index</div>;
};
