import * as React from 'react';

import {
  ValueTypes,
  Values,
  Rules,
  FormScheme,
  FormModelItem,
  Errors,
  ErrorType,
} from '../types/components';

/** FormContext의 타입 */
export interface FormContextProps {
  /** schem */
  scheme: FormScheme;
  /** 폼의 값들 */
  values: Values;
  /** 아이디별 에러 객체 */
  errors: Errors;
  /** label 정렬방향 */
  direction: 'x' | 'y';
  /** 값 입력 */
  setValue: (name: string, value: ValueTypes) => void;
  /** 여러개의 값 입력 */
  setValues: (values: Record<string, ValueTypes>) => void;
  /** 폼을 셋한다 */
  setModel: (modelItem: FormModelItem) => void;
  /** 에러 객체를 추가한다 */
  addError: (id: string) => void;
  /** 에러 객체를 업데이트 한다 */
  setError: (id: string, message: ErrorType) => void;
  /** 에러 객체들을 업데이트 한다 */
  setErrors: (params: any) => void;
}

export const FormContext = React.createContext<FormContextProps>({
  scheme: {
    model: [],
    idMap: {},
    nameMap: {},
  },
  values: {},
  errors: {},
  direction: 'y',
  setValue: () => {},
  setValues: () => {},
  setModel: () => {},
  addError: () => {},
  setError: () => {},
  setErrors: () => {},
});
