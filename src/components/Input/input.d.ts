import React, { HTMLAttributes } from 'react';

import { StateBind } from '../../types/components';

type InputTypes = HTMLAttributes<HTMLInputElement>;

export interface InputProps extends Omit<InputTypes, className | onChange> {
  className?: string;
  onChange?: (vlaue?: string, name?: name) => void | false;
}
