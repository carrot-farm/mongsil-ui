import * as React from 'react';

import {
  ValueTypes,
  Values,
  Rules,
  FormScheme,
  FormModelItem,
} from '../types/components';

/** FormContext의 타입 */
export interface FormContextProps {
  /** schem */
  scheme: FormScheme;
  /** 폼의 값들 */
  values: Values;
  /** label 정렬방향 */
  direction: 'x' | 'y';
  /** 값 입력 */
  setValue: (name: string, value: ValueTypes) => void;
  /** 여러개의 값 입력 */
  setValues: (values: Record<string, ValueTypes>) => void;
  /** 폼을 셋한다 */
  setModel: (modelItem: FormModelItem) => void;
}

export const FormContext = React.createContext<FormContextProps>({
  scheme: {
    model: [],
    idMap: {},
    nameMap: {},
  },
  values: {},
  direction: 'y',
  setValue: () => {},
  setValues: () => {},
  setModel: () => {},
});
