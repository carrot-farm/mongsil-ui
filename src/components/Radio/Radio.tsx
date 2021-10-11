import * as React from 'react';
import { forwardRef, useEffect, useCallback, useState } from 'react';

import { RadioProps } from './radio.d';

const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  (
    { className, checked, label, name, variant = 'emboss', onChange, ...args },
    ref,
  ) => {
    return (
      <label className={`Mongsil-radio-root ${className ?? ''}`} ref={ref}>
        <input
          className="Mongsil-radio-base"
          type="radio"
          name={name}
          checked={checked}
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

export default Radio;
