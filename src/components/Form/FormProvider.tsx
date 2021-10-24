import * as React from 'react';
import { useState, useMemo, useCallback, useRef } from 'react';

import { ValueTypes, Values } from '../../types/components';
import { FormContext, FormContextProps } from '../../contexts/formContext';

/** ===== type ===== */

interface FormProviderProps {
  children?: React.ReactNode;
}

/** ===== component ===== */
function FormProvider({ children }: FormProviderProps): JSX.Element {
  const [values, setValues] = useState(() => ({}));
  const schemeRef = useRef({
    ...schemeState,
  });

  const handleSetValue = useCallback((name: string, value: ValueTypes) => {
    // console.log('> handleSetValue:', name, value);
    if (name === undefined) {
      return;
    }

    setValues((v) => ({
      ...v,
      [name]: value,
    }));
  }, []);

  const handleSetValues = useCallback((_values: Values) => {
    setValues((v) => ({
      ...v,
      ..._values,
    }));
  }, []);

  /** form context 정의 */
  const formContextValue = useMemo<FormContextProps>(
    () => ({
      values,
      schemeRef,
      direction: 'y',
      setValue: handleSetValue,
      setValues: handleSetValues,
    }),
    [values, handleSetValue],
  );

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
}

const schemeState = {
  idMap: {},
  nameMap: {},
  model: [],
};

export default React.memo(FormProvider);
