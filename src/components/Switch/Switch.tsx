import * as React from 'react';
import { useEffect, useCallback, useState, forwardRef, memo } from 'react';

import { InputChange } from '../../types/components';

interface SwitchProps {
  className?: string;
  variant?: 'dent' | 'emboss';
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: InputChange;
}

const Switch = forwardRef<HTMLSpanElement, SwitchProps>(
  (
    {
      className,
      name,
      checked,
      defaultChecked = false,
      variant = 'emboss',
      onChange,
      ...args
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = useState<boolean>(
      () => defaultChecked ?? false,
    );

    // console.log('> switch: ', checked);
    const handleClick = useCallback(() => {
      const newChecked = !isChecked;
      // console.log('> switch: ', newChecked, name);

      if (onChange) {
        onChange(newChecked, name);
      }

      if (checked === undefined) {
        setIsChecked(newChecked);
      }
    }, [isChecked, name, onChange]);

    const handleChange = useCallback(() => {}, []);

    useEffect(() => {
      setIsChecked(!!checked);
    }, [checked]);

    return (
      <span
        className={`Mongsil-switch-root ${isChecked ? 'checked' : ''} ${
          className ? className : ''
        }`}
        ref={ref}
        onClick={handleClick}
      >
        <input
          className={`Mongsil-switch-base`}
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          {...args}
        />
        <span className={`Mongsil-switch-bg ${variant ? variant : ''}`}>
          <span className={`Mongsil-switch-checker `} />
        </span>
      </span>
    );
  },
);

Switch.displayName = 'Switch';

export default memo(Switch);
