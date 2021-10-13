import * as React from 'react';

function useForm() {
  const [values, setValues] = useState(() => ({}));

  return {
    values,
    setValues,
  };
}

export default useForm;
