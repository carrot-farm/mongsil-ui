import * as React from 'react';
import { memo } from 'react';
import { useState, useEffect, useCallback } from 'react';

import Checkbox from '../Checkbox';

import { CheckboxCreatorProps, HandleClick, Values } from './checkboxCreator.d';

const CheckboxCreator = React.forwardRef<HTMLSpanElement, CheckboxCreatorProps>(
  (
    {
      name,
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
      <span className="Mongsil-checkbox-creator-root" ref={ref}>
        {/* <input type="hidden" name={name} value={value?.join(',')} /> */}
        {model?.map((a, i) => (
          <Checkbox
            label={a.label}
            variant={variant}
            checked={value.includes(a.value)}
            onClick={useCallback(() => handleClick(a.value), [model, a, value])}
            key={`Mongsil-check-${name}-${i}`}
            {...args}
          />
        ))}
      </span>
    );
  },
);

CheckboxCreator.displayName = 'CheckboxCreator';

export default memo(CheckboxCreator);
