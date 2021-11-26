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
  stateBind?: StateBind;
  direction?: Direction;
  checked?: ValueTypes;
  /** grid를 이용한 레이아웃을 위한 명칭 */
  gridArea?: React.CSSProperties['gridArea'];
  disabled?: boolean;
  children?: React.ReactNode;
  rules?: Rules;
  onChange?: InputChange;
}

/** FormItem의 child 타입 */
export interface FormItemChild
  extends Pick<
    FormItemProps,
    | 'name'
    | 'value'
    | 'checked'
    | 'className'
    | 'stateBind'
    | 'disabled'
    | 'onChange'
  > {
  children?: React.ReactNode;
}

export type DisplayName =
  | 'Input'
  | 'TextArea'
  | 'Checkbox'
  | 'CheckboxCreator'
  | 'Switch'
  | 'Select'
  | 'SelectCreator';
