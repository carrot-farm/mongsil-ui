import * as React from 'react';
import { memo, cloneElement } from 'react';

import { FormItemChild } from '../FormItem/formItem.d';

interface CloneComponentProps extends FormItemChild {
  child: React.ReactElement<FormItemChild>;
}

function CloneComponent({
  name,
  value,
  checked,
  className,
  child,
  onChange,
}: CloneComponentProps): ReturnType<typeof cloneElement> {
  const props: Omit<CloneComponentProps, 'child'> = {
    name,
    className,
    onChange,
  };

  if (value !== undefined) {
    props.value = value;
  }

  if (checked !== undefined) {
    props.checked = checked;
  }
  // console.log('> render: ', name, checked);
  return cloneElement(child, props);
}

CloneComponent.displayName = 'CloneComponent';

export default memo(CloneComponent);
