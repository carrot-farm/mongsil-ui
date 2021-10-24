import React, { HTMLAttributes, InputHTMLAttributes } from 'react';

import { StateBind } from '../../types/components';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (vlaue?: string, name?: name) => void | false;
}
