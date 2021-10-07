import type { StateBind } from '../../types/components.d';
import type { CheckboxProps } from '../Checkbox';

export type Values = (string | undefined)[];

type eventFunc = (values: Values, name?: string) => void | false;

export interface CheckboxCreatorProps
  extends Pick<CheckboxProps, 'variant' | 'name'> {
  values?: Values;
  defaultValues?: Values;
  stateBind?: StateBind;
  model?: CheckboxCreatorModel[];
  children?: React.ReactChildren;
  onChange?: eventFunc;
  onClick?: eventFunc;
}

export interface CheckboxCreatorModel {
  label?: string;
  value?: string;
}

export type HandleClick = (value?: string) => void;
