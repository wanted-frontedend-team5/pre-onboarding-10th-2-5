import { css } from 'styled-components';

function convertFullName(value) {
  switch (value) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    default:
      return value;
  }
}

export function flexbox(justifyContent = 'center', alignItems = 'center') {
  return css`
    display: flex;
    justify-content: ${convertFullName(justifyContent)};
    align-items: ${convertFullName(alignItems)};
  `;
}
