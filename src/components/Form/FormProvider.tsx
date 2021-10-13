import * as React from 'react';
import { useState, useMemo, useCallback } from 'react';

import { ValueTypes } from '../../types/components';
import { FormContext, FormContextProps } from '../../contexts/formContext';

/** ===== type ===== */
interface FormProvider {
  children?: React.ReactNode;
}

/** ===== component ===== */
function FormProvider({ children }: FormProvider): JSX.Element {
  const [values, setValues] = useState(() => ({}));

  /** 값을 셋 */
  const hanelSetValue = useCallback<(name: string, value: ValueTypes) => void>(
    (name, value) => {
      // console.log('> hanelSetValue:', name, value);
      if (name === undefined) {
        return;
      }

      setValues((v) => ({
        ...v,
        [name]: value,
      }));
    },
    [],
  );

  /** form context 정의 */
  const formContextValue = useMemo<FormContextProps>(
    () => ({
      values,
      direction: 'y',
      setValue: hanelSetValue,
    }),
    [values, hanelSetValue],
  );

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
}

export default React.memo(FormProvider);
