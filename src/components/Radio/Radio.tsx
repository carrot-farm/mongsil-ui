import * as React from 'react';
import { useCallback, forwardRef, memo } from 'react';

import { RadioProps } from './radio.d';

const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  (
    {
      className,
      value,
      checked,
      defaultChecked,
      label,
      variant = 'emboss',
      onChange,
      ...args
    },
    ref,
  ) => {
    /** 라디오 변경 이벤트 */
    const handleChange = useCallback(
      (e) => {
        const { name, checked: newChecked } = e.target;

        // console.log('> ', name, checked, newChecked);
        if (onChange) {
          onChange(newChecked, name);
        }
      },
      [onChange],
    );

    // console.log('> ', label);

    return (
      <label className={`Mongsil-radio-root ${className ?? ''}`} ref={ref}>
        <input
          className="Mongsil-radio-base"
          type="radio"
          checked={checked}
          onChange={handleChange}
          {...args}
        />

        <span className={`Mongsil-radio-checker ${variant ?? ''}`}>
          <span className="Mongsil-radio-checker-outer">
            <span className="Mongsil-radio-checker-inner"></span>
          </span>
        </span>

        {label && <span className="Mongsil-radio-label">{label}</span>}
      </label>
    );
  },
);

Radio.displayName = 'Radio';

export default memo(Radio);
