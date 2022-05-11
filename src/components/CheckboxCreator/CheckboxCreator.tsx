import * as React from 'react';
import { memo } from 'react';
import { useState, useEffect, useCallback } from 'react';

import Checkbox, { CheckboxProps } from '../Checkbox';

export type Values = (string | undefined)[];

type eventFunc = (values: Values, name?: string) => void | false;

export interface CheckboxCreatorProps
  extends Pick<CheckboxProps, 'variant' | 'name'> {
  className?: string;
  itemClassName?: string;
  value?: Values;
  defaultValue?: Values;
  disabled?: boolean;
  model: CheckboxCreatorModel[];
  children?: React.ReactChildren;
  onChange?: eventFunc;
  onClick?: eventFunc;
}

export interface CheckboxCreatorModel {
  label?: string;
  value?: string;
}

export type HandleClick = (value?: string) => void;

const CheckboxCreator = React.forwardRef<HTMLSpanElement, CheckboxCreatorProps>(
  (
    {
      name,
      className,
      itemClassName,
      value: _value,
      variant,
      defaultValue,
      model,
      onChange,
      onClick,
      ...args
    },
    ref,
  ) => {
    const [value, setValue] = useState<Values>(
      () => defaultValue || _value || [],
    );

    // console.log('> outside : ', value);

    /** 클릭 이벤트 */
    const handleClick = useCallback<HandleClick>(
      (v) => {
        const idx = value.findIndex((a) => a === v);
        const newValue =
          idx >= 0 ? value.filter((_, i) => i !== idx) : [...value, v];
        // console.log('> click', idx >= 0, value, newValue);

        if (onClick) {
          onClick(newValue, name);
        }

        if (onChange) {
          onChange(newValue, name);
        }

        if (_value === undefined) {
          setValue([...newValue]);
        }
      },
      [name, value, _value, onChange, onClick],
    );

    /** 외부 value 변경 */
    useEffect(() => {
      if (_value === undefined) {
        return;
      }
      setValue(_value);
    }, [_value]);

    return (
      <span
        className={`Mongsil-checkbox-creator-root ${className ?? ''}`}
        ref={ref}
      >
        {model?.map((a, i) => (
          <Checkbox
            className={itemClassName}
            key={`Mongsil-check-${name ?? ''}-${i}`}
            label={a.label}
            variant={variant}
            checked={value.includes(a.value)}
            onClick={() => handleClick(a.value)}
            {...args}
          />
        ))}
      </span>
    );
  },
);

CheckboxCreator.displayName = 'CheckboxCreator';

export default memo(CheckboxCreator);
