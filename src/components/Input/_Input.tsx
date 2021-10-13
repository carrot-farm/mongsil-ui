import * as React from 'react';
import { useState, forwardRef, useCallback, useEffect } from 'react';

import { InputProps } from './input.d';

const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      className,
      name,
      value: _value = '',
      defaultValue,
      stateBind,
      children,
      onChange,
      ...args
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [value, setValue] = useState<undefined | string>(
      () => defaultValue || _value || '',
    );

    const handleFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    /** 값 변경 */
    const handleChange = useCallback(
      (e) => {
        const newValue = e.target.value;

        if (
          (onChange && onChange(newValue, name) === false) ||
          stateBind === 'stateOnly'
        ) {
          return;
        }

        setValue(newValue);
      },
      [stateBind, onChange],
    );

    /** 상태에 따라 변환 */
    useEffect(() => {
      if (stateBind !== 'none' && value !== _value) {
        setValue(_value);
      }
    }, [_value, stateBind]);

    return (
      <div
        className={`Mongsil-input-root ${isFocused ? 'focused' : ''} ${
          className ?? ''
        }`}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <input
          className={`Mongsil-input-base `}
          name={name}
          value={value}
          onChange={handleChange}
          {...args}
        />
      </div>
    );
  },
);

export default Input;
