import * as React from 'react';
import { memo, cloneElement } from 'react';

import { FormItemChild } from '../FormItem/formItem.d';

interface CloneComponentProps extends FormItemChild {
  child: React.ReactElement<FormItemChild>;
}

function CloneComponent({
  name,
  value,
  className,
  child,
  onChange,
}: CloneComponentProps): ReturnType<typeof cloneElement> {
  const props: Omit<CloneComponentProps, 'child'> = {
    name,
    className,
    onChange,
  };

  if (value) {
    props.value = value;
  }
  // console.log('> render: ', name);
  return cloneElement(child, props);
}

export default memo(CloneComponent);
