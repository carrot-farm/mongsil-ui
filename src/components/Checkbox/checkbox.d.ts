import type { StateBind } from '../../types/components.d';

export interface CheckboxProps {
  children?: React.ReactNode;
  className?: string;
  variant?:
    | 'emboss'
    | 'emboss-outline'
    | 'emboss-fill'
    | 'dent'
    | 'dent-outline';
  fill?: boolean;
  stateBind?: StateBind;
  label?: React.ReactNode;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, name?: string) => void | false;
  onClick?: (checked: boolean, name?: string) => void;
}
