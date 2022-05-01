import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps
  extends Partial<Pick<ButtonHTMLAttributes, 'type'>> {
  children?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  variant?: 'emboss' | 'dent';
  /** true 일 경우 비활성화 */
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
