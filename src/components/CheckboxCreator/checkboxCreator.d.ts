import type { CheckboxProps } from '../Checkbox';

export type Values = (string | undefined)[];

type eventFunc = (values: Values, name?: string) => void | false;

export interface CheckboxCreatorProps
  extends Pick<CheckboxProps, 'variant' | 'name'> {
  value?: Values;
  defaultValue?: Values;
  disabled?: boolean;
  model: CheckboxCreatorModel[];
  children?: React.ReactChildren;
  onChange?: eventFunc;
  onClick?: eventFunc;
}

export interface CheckboxCreatorModel {
  label?: string;
  value?: string;
}

export type HandleClick = (value?: string) => void;
