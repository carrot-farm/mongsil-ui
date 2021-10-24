import * as React from 'react';

import { Rules } from '../utils/validator';
import { ValueTypes, Values } from '../types/components';

/** FormContext의 타입 */
export interface FormContextProps {
  scheme: any;
  /** 폼의 값들 */
  values: Values;
  /** 유효성 검사 rule */
  rules: Rules;
  /** label 정렬방향 */
  direction: 'x' | 'y';
  /** 값 입력 */
  setValue: (name: string, value: ValueTypes) => void;
  /** 여러개의 값 입력 */
  setValues: (values: Record<string, ValueTypes>) => void;
}

export const FormContext = React.createContext<FormContextProps>({
  scheme: {},
  values: {},
  rules: [],
  direction: 'y',
  setValue: () => {},
  setValues: () => {},
});
