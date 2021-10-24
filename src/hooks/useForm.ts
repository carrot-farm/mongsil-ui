import { useRef, useCallback, MutableRefObject } from 'react';

import { ValueTypes, Values } from '../types/components';
import { FormContextProps } from '../contexts/formContext';

export interface FormRef
  extends Pick<
    FormContextProps,
    'values' | 'rules' | 'setValue' | 'setValues'
  > {}

interface UseForm {
  /** form 핸들러 등을 가져올 ref */
  form: MutableRefObject<FormRef | undefined>;
  /** 하나의 값을 셋 */
  setValue: (name: string, value: ValueTypes) => void;
  /** 여러개의 value를 셋 */
  setValues: (values: Values) => void;
  /** 하나의 값을 가져옴 */
  getValue: (name: string) => ValueTypes;
  /** 값을 가져옴 */
  getValues: () => ValueTypes | Values;
  /** validation trigger */
  validate: (name: string | string[]) => void;
  /** 모델을 업데이트 */
  updateModel?: () => void;
}

/** ===== Hook ===== */
function useForm(): UseForm {
  const formRef = useRef<FormRef>();

  const handleSetValue = useCallback<UseForm['setValue']>(
    (name, value) => {
      formRef.current?.setValue(name, value);
    },
    [formRef],
  );

  const handleSetValues = useCallback<UseForm['setValues']>(
    (values: Values): void => {
      formRef.current?.setValues(values);
    },
    [formRef],
  );

  const handleGetValue = useCallback<UseForm['getValue']>(
    (name: string) => {
      return formRef.current?.values[name];
    },
    [formRef],
  );

  const handleGetValues = useCallback<UseForm['getValues']>(() => {
    return formRef.current?.values;
  }, [formRef]);

  return {
    form: formRef,
    setValue: handleSetValue,
    setValues: handleSetValues,
    getValue: handleGetValue,
    getValues: handleGetValues,
  };
}

export default useForm;
