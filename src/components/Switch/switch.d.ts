import { InputChange } from '../../types/components';

export interface SwitchProps {
  className?: string;
  variant?: 'dent' | 'emboss';
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: InputChange;
}
