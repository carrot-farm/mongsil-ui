import React from 'react';

import {
  ValueTypes,
  StateBind,
  InputChange,
  Rules,
  Direction,
} from '../../types/components';

export interface FormItemProps {
  /** formItem을 구분짓기 위한 id. 지정안할시 자동 생성됨 */
  itemId?: string;
  className?: string;
  label?: string;
  helper?: string;
  name?: string;
  value?: ValueTypes;
  defaultValue?: ValueTypes;
  checked?: ValueTypes;
  rules?: Rules;
  required?: boolean;
  stateBind?: StateBind;
  direction?: Direction;
  children?: React.ReactNode;
  onChange?: InputChange;
}

/** FormItem의 child 타입 */
export interface FormItemChild
  extends Pick<
    FormItemProps,
    'name' | 'value' | 'checked' | 'className' | 'stateBind' | 'onChange'
  > {
  children?: React.ReactNode;
}

export type DisplayName =
  | 'Input'
  | 'Checkbox'
  | 'CheckboxCreator'
  | 'Switch'
  | 'Select'
  | 'SelectCreator';
