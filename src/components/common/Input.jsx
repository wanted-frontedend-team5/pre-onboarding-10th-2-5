import styled from 'styled-components';

const StyleInput = styled.input`
  width: 100%;
  background-color: inherit;
`;

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
