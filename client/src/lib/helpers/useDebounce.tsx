import { useState, useEffect } from 'react';

function useDebounce<T>(cb: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(cb);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(cb);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [cb, delay]);

  return debouncedValue;
}

export default useDebounce;
