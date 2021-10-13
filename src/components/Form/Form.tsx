import * as React from 'react';
import { forwardRef, useState, useCallback, useEffect, useMemo } from 'react';

import FormProvider from './FormProvider';

import { FormProps } from './form.d';
import { FormContext, FormContextProps } from '../../contexts/formContext';
import { ValueTypes } from '../../types/components';

function Form({ children, onSubmit, ...args }: FormProps): JSX.Element {
  // const [values, setValues] = useState(() => ({}));

  // const hanelSetValue = useCallback<(name: string, value: ValueTypes) => void>(
  //   (name, value) => {
  //     console.log('> hanelSetValue:', name, value);
  //     if (name === undefined) {
  //       return;
  //     }

  //     setValues((v) => ({
  //       ...v,
  //       [name]: value,
  //     }));
  //   },
  //   [],
  // );

  // /** form context 정의 */
  // const formContextValue = useMemo<FormContextProps>(
  //   () => ({
  //     values,
  //     direction: 'y',
  //     setValue: hanelSetValue,
  //   }),
  //   [values, hanelSetValue],
  // );

  /** event: submit */
  const handleSubmit = useCallback<
    (e: React.FormEvent<HTMLFormElement>) => void
  >(
    (e) => {
      e.preventDefault();

      if (onSubmit) {
        onSubmit(e);
      }
    },
    [onSubmit],
  );

  /** render */
  return (
    <FormProvider>
      {/* <FormContext.Provider value={formContextValue}> */}
      <form onSubmit={handleSubmit} {...args}>
        {children}
      </form>
      {/* </FormContext.Provider> */}
    </FormProvider>
  );
}

export default React.memo(Form);
