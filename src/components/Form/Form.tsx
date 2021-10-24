import * as React from 'react';
import {
  forwardRef,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from 'react';

import FormProvider from './FormProvider';
import { FormContext } from '../../contexts/formContext';

import { FormProps } from './form.d';

/** ===== component ===== */
const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ form, children, onSubmit, ...args }, ref) => {
    const { values, setValue, setValues } = useContext(FormContext);
    // console.log('> Form:', setValue);

    /** event: submit */
    const handleSubmit = useCallback<
      (e: React.FormEvent<HTMLFormElement>) => void
    >(
      (e) => {
        e.preventDefault();
        // console.log('> submit: ', scheme);

        if (onSubmit) {
          onSubmit(values);
        }
      },
      [values, onSubmit],
    );

    /** form ref 가 있을 경우 전달 */
    React.useImperativeHandle(form, () => ({
      values,
      setValue,
      setValues,
    }));

    /** render */
    return (
      <form onSubmit={handleSubmit} {...args} ref={ref}>
        {children}
      </form>
    );
  },
);

/** ===== HOC: Form Provider 적용 ===== */
const withFormProvider = (
  WrappedComponent: React.ForwardRefExoticComponent<
    FormProps & React.RefAttributes<HTMLFormElement>
  >,
) => {
  const Component = (props: any) => {
    return (
      <FormProvider>
        <WrappedComponent {...props} />
      </FormProvider>
    );
  };

  return Component;
};

export default React.memo(withFormProvider(Form));
