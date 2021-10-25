import * as React from 'react';
import { useState, useMemo, useCallback, useRef } from 'react';

import {
  ValueTypes,
  Values,
  FormModelItem,
  FormScheme,
} from '../../types/components';
import { FormContext, FormContextProps } from '../../contexts/formContext';

/** ===== type ===== */

interface FormProviderProps {
  children?: React.ReactNode;
}

/** ===== component ===== */
function FormProvider({ children }: FormProviderProps): JSX.Element {
  const [values, setValues] = useState<Record<string, ValueTypes>>(() => ({}));
  const [scheme, setScheme] = useState<FormScheme>(() => ({ ...schemeState }));

  /** 단일 값을 변경 */
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

  /** 여러 값을 변경 */
  const handleSetValues = useCallback((_values: Values) => {
    setValues((v) => ({
      ...v,
      ..._values,
    }));
  }, []);

  /** 모델을 추가 하거나 수정 */
  const setModel = useCallback((model: FormModelItem) => {
    if (typeof model.id !== 'string') {
      throw new Error('invalid id: ' + model.id);
    }

    setScheme((a) => {
      // # 이미 존재할 경우 모델 업데이트
      if (a.idMap[model.id]) {
        const newModel = a.model.map((m) => {
          return m.id === model.id ? model : m;
        });
        console.log('> update');

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

  /** form context 정의 */
  const formContextValue = useMemo<FormContextProps>(
    () => ({
      values,
      scheme,
      direction: 'y',
      setValue: handleSetValue,
      setValues: handleSetValues,
      setModel,
    }),
    [values, scheme, handleSetValue, handleSetValues, setModel],
  );

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
