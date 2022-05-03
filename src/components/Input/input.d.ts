import React from 'react';

export interface InputProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  disabled?: boolean;
  onChange?: (vlaue?: string, name?: string) => void | false;
}
