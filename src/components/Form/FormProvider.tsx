import * as React from 'react';
import { useState, useMemo, useCallback } from 'react';

import {
  ValueTypes,
  Values,
  FormModelItem,
  FormScheme,
  Errors,
} from '../../types/components';
import { FormContext, FormContextProps } from '../../contexts/formContext';

/** ===== type ===== */
interface FormProviderProps {
  children?: React.ReactNode;
}

/** ===== component ===== */
function FormProvider({ children }: FormProviderProps): JSX.Element {
  const [values, setValues] = useState<Record<string, ValueTypes>>(() => ({}));
  const [errors, setErrors] = useState<Errors>(() => ({}));
  const [scheme, setScheme] = useState<FormScheme>(() => ({ ...schemeState }));

  /** 단일 값을 변경 */
  const handleSetValue = useCallback((name: string, value: ValueTypes) => {
    if (name === undefined) {
      return;
    }

    setValues((v) => ({
      ...v,
      [name]: value,
    }));
  }, []);

  /** 여러 값을 변경 */
  const handleSetValues = useCallback((_values: Values) => {
    setValues((v) => ({
      ...v,
      ..._values,
    }));
  }, []);

  /** 모델을 추가 하거나 수정 */
  const handleModel = useCallback((model: FormModelItem) => {
    if (model.id && typeof model.id !== 'string') {
      throw new Error('invalid type  model.id: ');
    }

    setScheme((a) => {
      // # 이미 존재할 경우 모델 업데이트
      if (a.idMap[model.id] !== undefined) {
        const newModel = a.model.map((m) => {
          return m.id === model.id ? model : m;
        });

        return {
          ...a,
          model: newModel,
        };
      }
      // # 없을 경우 추가
      else {
        const newModel = [...a.model, { ...model }];
        const index = newModel.length - 1;
        const newIdMap = { ...a.idMap, [model.id]: index };
        const newNameMap = { ...a.nameMap };

        if (model.name !== undefined) {
          newNameMap[model.name] = index;
        }

        return {
          model: newModel,
          idMap: newIdMap,
          nameMap: newNameMap,
        };
      }
    });
  }, []);

  /** 에러 정보 수정 */
  const setError = useCallback(
    (id, message) => {
      setErrors((_errors) => {
        return { ..._errors, [id]: message };
      });
    },
    [setErrors],
  );

  /** 에러 필드 추가 */
  const addError = useCallback(
    (id) => {
      setErrors((a) => {
        if (id && typeof id === 'string' && a[id] !== undefined) {
          return a;
        }

        return { ...a, [id]: null };
      });
    },
    [setErrors],
  );

  /** form context 정의 */
  const formContextValue = useMemo<FormContextProps>(
    () => ({
      values,
      errors,
      scheme,
      direction: 'y',
      setValue: handleSetValue,
      setValues: handleSetValues,
      setModel: handleModel,
      addError,
      setError,
      setErrors,
    }),
    [
      values,
      errors,
      scheme,
      handleSetValue,
      handleSetValues,
      handleModel,
      setError,
      addError,
      setErrors,
    ],
  );

  // console.log('> ', errors);

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
}

/** scheme 초기 값 */
const schemeState: FormScheme = {
  idMap: {},
  nameMap: {},
  model: [],
};

export default React.memo(FormProvider);
