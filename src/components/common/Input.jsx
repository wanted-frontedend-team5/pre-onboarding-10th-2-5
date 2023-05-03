import styled from 'styled-components';
import { theme } from 'theme';

const StyleInput = styled.input``;

export const Input = ({ placeholder, type, onChange, value }) => {
  return (
    <StyleInput
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};
