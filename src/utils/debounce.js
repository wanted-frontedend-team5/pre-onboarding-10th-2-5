export const debounce = callback => {
  let timerId;
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback, 800);
  };
};
