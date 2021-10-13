import * as React from 'react';

import { ValueTypes } from '../types/components';

/** FormContext의 타입 */
export interface FormContextProps {
  /** 폼의 값들 */
  values: Record<string, ValueTypes>;
  /** label 정렬방향 */
  direction: 'x' | 'y';
  /** 값 입력 */
  setValue: (name: string, value: ValueTypes) => void;
}

export const FormContext = React.createContext<FormContextProps>({
  values: {},
  direction: 'y',
  setValue: () => {},
});
