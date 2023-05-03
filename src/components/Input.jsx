import styled from 'styled-components';
import { theme } from 'theme';

const StyleInput = styled.input`
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;

  :focus {
    border: 0.1rem solid ${theme.pointColor};
    box-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);
  }
`;

function Input({ placeholder, type, onChange, value }) {
  return (
    <StyleInput
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
}

export default Input;
