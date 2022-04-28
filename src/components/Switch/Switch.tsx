import * as React from 'react';
import { useEffect, useCallback, useState, forwardRef, memo } from 'react';

import { SwitchProps } from './switch.d';

const Switch = forwardRef<HTMLSpanElement, SwitchProps>(
  (
    {
      className,
      name,
      variant = 'emboss',
      checked,
      defaultChecked = false,
      disabled = false,
      onChange,
      ...args
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = useState<boolean>(
      () => defaultChecked ?? false,
    );

    /** 클릭 이벤트 */
    const handleClick = useCallback(() => {
      if (disabled === true) {
        return;
      }
      const newChecked = !isChecked;
      // console.log('> switch: ', newChecked, name);

      if (onChange) {
        onChange(newChecked, name);
      }

      if (checked === undefined) {
        setIsChecked(newChecked);
      }
    }, [name, disabled, isChecked, checked, onChange]);

    // const handleChange = useCallback(() => {}, []);

    useEffect(() => {
      setIsChecked(!!checked);
    }, [checked]);

    return (
      <span
        className={`Mongsil-switch-root ${isChecked ? 'checked' : ''} 
          ${disabled === true ? 'disabled' : ''}
        ${className ? className : ''}`}
        ref={ref}
        onClick={handleClick}
      >
        <input
          className="Mongsil-switch-base"
          name={name}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          // onChange={handleChange}
          {...args}
        />
        <span className={`Mongsil-switch-bg ${variant ? variant : ''}`}>
          <span className="Mongsil-switch-checker" />
        </span>
      </span>
    );
  },
);

Switch.displayName = 'Switch';

export default memo(Switch);
