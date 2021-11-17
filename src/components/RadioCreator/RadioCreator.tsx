import * as React from 'react';
import { useState, useEffect, useCallback, forwardRef, memo } from 'react';

import Radio from '../Radio';

import { RadioCreatorProps } from './radioCreator.d';

const RadioCreator = forwardRef<HTMLDivElement, RadioCreatorProps>(
  (
    {
      variant = 'emboss',
      name,
      value: _value,
      defaultValue,
      model,
      className,
      disabled,
      onChange,
      ...args
    },
    ref,
  ) => {
    const [value, setValue] = useState<string | undefined>(
      () => defaultValue || _value,
    );

    const handleChange = useCallback(
      (newValue, name) => {
        if (onChange) {
          onChange(newValue, name);
        }

        // console.log('> radio creator change: ', newValue, _value);
        if (_value === undefined) {
          setValue(newValue);
        }
      },
      [_value, onChange],
    );

    // console.log('> radio creator: ', _value);

    useEffect(() => {
      if (_value === undefined) {
        return;
      }
      // console.log('> radio creator state change: ', _value);

      setValue(_value);
    }, [_value]);

    return (
      <div
        className={`Mongsil-radio_creator-root ${className ?? ''}`}
        ref={ref}
        {...args}
      >
        {model?.map((a, i) => (
          <Radio
            key={`Monsil-radio_creator-item-${name || ''}-${i}`}
            label={a.label}
            name={name}
            checked={a.value === value}
            variant={variant}
            disabled={disabled}
            onChange={() => handleChange(a.value, name)}
          />
        ))}
      </div>
    );
  },
);

RadioCreator.displayName = 'RadioCreator';

export default memo(RadioCreator);
