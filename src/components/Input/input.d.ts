import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (vlaue?: string, name?: name) => void | false;
}
