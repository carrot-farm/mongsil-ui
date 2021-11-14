export interface CheckboxProps {
  className?: string;
  variant?:
    | 'emboss'
    | 'emboss-outline'
    | 'emboss-fill'
    | 'dent'
    | 'dent-outline';
  label?: React.ReactNode;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, name?: string) => void | false;
  onClick?: (checked: boolean, name?: string) => void;
}
