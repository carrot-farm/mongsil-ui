import { StateBind } from '../../types/components';

export interface RadioProps {
  className?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  label?: React.ReactNode;
  variant?: 'emboss' | 'dent';
  onChange?: (value: boolean, name?: string) => false | void;
}
