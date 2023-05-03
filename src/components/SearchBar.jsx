import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { fetchSuggestionItems } from 'apis/fetchSuggestionItems';
import { Input } from './common/Input';
import { Button } from './common/Button';
import { SearchSuggestions } from './SearchSuggestions';

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  width: 30rem;
  height: 3rem;
  border-radius: 1.5rem;

  color: gray;
  background-color: white;

  :hover {
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Icon = styled(AiOutlineSearch)`
  margin: 0 0.8rem;
  height: 2rem;
  width: 2rem;
`;

const SuggestionsContainerOutside = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const SearchBar = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [timerId, setTimerId] = useState(0);

  const EXPIRE_TIME = 60 * 60 * 1000;

  const handleSearchBarClick = () => {
    setShowSuggestions(true);
  };

  const handleOutsideClick = () => {
    setShowSuggestions(false);
  };

  const getSuggestionItems = async value => {
    const cachedData = localStorage.getItem(value);
    const currentTime = new Date().getTime();

    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (currentTime - timestamp < EXPIRE_TIME) {
        setSuggestions(data);
        return;
      }
    }
    try {
      const response = await fetchSuggestionItems(value);
      const { data } = response;

      localStorage.setItem(
        value,
        JSON.stringify({ data, timestamp: currentTime }),
      );
      setSuggestions(data);
      console.info('calling api');
    } catch (error) {
      setSuggestions([]);
      console.error(error);
    }
  };

  const debounce = (value, callback) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const newTimerId = setTimeout(() => {
      callback(value);
    }, 800);
    setTimerId(newTimerId);
  };

  const handleSearchBarChange = e => {
    const { value } = e.target;
    setSearchValue(value);

    debounce(value, getSuggestionItems);
  };

  return (
    <>
      <Form>
        <InputWrapper onClick={handleSearchBarClick}>
          <Icon />
          <Input onChange={handleSearchBarChange} value={searchValue} />
        </InputWrapper>
        <Button>search</Button>
        {showSuggestions && <SearchSuggestions suggestions={suggestions} />}
      </Form>
      {showSuggestions && (
        <SuggestionsContainerOutside onClick={handleOutsideClick} />
      )}
    </>
  );
};
