import { useEffect, useRef, useState } from 'react';

export const useClickOutside = initialState => {
  const [isVisible, setIsVisible] = useState(initialState);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);

  return { ref, isVisible, setIsVisible };
};
