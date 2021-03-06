import * as React from 'react';
import { forwardRef, useCallback, useContext } from 'react';

import FormProvider from './FormProvider';
import { FormContext } from '../../contexts/formContext';
import { validateModel } from '../../utils/validator';

import { Values } from '../../types/components';
import { FormRef } from '../../hooks/useForm';

export interface FormProps
  extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  /** form ref 객체 */
  form?: React.MutableRefObject<FormRef>;
  /** components */
  children?: React.ReactNode;
  /** submit event */
  onSubmit?: (values: Values) => void | false;
}

/** ===== component ===== */
const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ form, children, onSubmit, ...args }, ref) => {
    const { values, scheme, setValue, setValues, setErrors } = useContext(
      FormContext,
    );

    /** event: submit */
    const handleSubmit = useCallback<
      (e: React.FormEvent<HTMLFormElement>) => void
    >(
      (e) => {
        e.preventDefault();
        const filteredValues: Values = {};
        const filteredModel = scheme.model.filter(
          (a) => a.name && a.disabled !== true,
        );
        filteredModel.forEach((a) => {
          if (a.name) {
            filteredValues[a.name] = values[a.name];
          }
        });
        // console.log('> ', validateFailed);

        // # 유효성 검사
        const validateFailed = validateModel(filteredModel, filteredValues);
        if (validateFailed.length > 0) {
          setErrors(() => {
            const result = validateFailed
              .filter((a) => !!a.error)
              .reduce((acc, cur) => {
                return {
                  ...acc,
                  [cur.id]: cur.error?.message,
                };
              }, {});
            return result;
          });
          return;
        }

        // # call onSubmit
        if (typeof onSubmit === 'function') {
          onSubmit(filteredValues);
        }
      },
      [values, scheme, onSubmit, setErrors],
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
  const Component = (props: FormProps) => {
    return (
      <FormProvider>
        <WrappedComponent {...props} />
      </FormProvider>
    );
  };

  return Component;
};

export default React.memo(withFormProvider(Form));
