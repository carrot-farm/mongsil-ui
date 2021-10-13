import React from 'react';

import { ValueTypes, StateBind, InputChange } from '../../types/components';

export interface FormItemProps {
  className?: string;
  label?: string;
  helper?: string;
  name?: string;
  value?: ValueTypes;
  defaultValue?: ValueTypes;
  validation?: string;
  required?: boolean;
  stateBind?: StateBind;
  direction?: 'x' | 'y';
  children?: React.ReactNode;
  onChange?: InputChange;
}

/** FormItem의 child 타입 */
export interface FormItemChild
  extends Pick<
    FormItemProps,
    'name' | 'value' | 'className' | 'stateBind' | 'onChange'
  > {
  children?: React.ReactNode;
}

export type DisplayName = 'Input';
