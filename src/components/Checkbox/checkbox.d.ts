import type { StateBind } from '../../types/components.d';

export interface CheckboxProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'fill' | 'border' | 'none';
  stateBind?: StateBind;
  label?: React.ReactNode;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, name?: string) => void | false;
  onClick?: (checked: boolean, name?: string) => void;
}
