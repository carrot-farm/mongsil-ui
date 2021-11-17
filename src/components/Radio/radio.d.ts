import { InputHTMLAttributes } from 'react';

export interface RadioProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'value' | 'defaultValue' | 'checked' | 'onClick' | 'onChange'
  > {
  className?: string;
  value?: string;
  checked?: boolean;
  label?: React.ReactNode;
  variant?: 'emboss' | 'dent';
  disabled?: boolean;
  onChange?: (value: boolean, name?: string) => void;
}
