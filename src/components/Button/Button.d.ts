import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps
  extends Partial<Pick<ButtonHTMLAttributes, 'type'>> {
  children?: React.ReactNode;
  className?: string;
  variant?: 'emboss' | 'dent';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
