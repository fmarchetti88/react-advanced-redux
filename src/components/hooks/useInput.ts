import { useState } from 'react';

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: any) => setValue(event.target.value)
    }
  };
};

export default useInput;
