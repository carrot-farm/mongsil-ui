import * as React from 'react';
import { useCallback, forwardRef, memo } from 'react';

export interface RadioProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'value' | 'defaultValue' | 'checked' | 'onClick' | 'onChange'
  > {
  className?: string;
  value?: string;
  checked?: boolean;
  label?: React.ReactNode;
  variant?: 'emboss' | 'dent';
  disabled?: boolean;
  onChange?: (value: boolean, name?: string) => void;
}

const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  (
    {
      className,
      checked,
      label,
      variant = 'emboss',
      disabled,
      onChange,
      ...args
    },
    ref,
  ) => {
    /** 라디오 변경 이벤트 */
    const handleChange = useCallback<
      React.ChangeEventHandler<HTMLInputElement>
    >(
      (e) => {
        if (disabled === true) {
          return;
        }
        const { name, checked: newChecked } = e.target;

        // console.log('> ', name, checked, newChecked);
        if (onChange) {
          onChange(newChecked, name);
        }
      },
      [disabled, onChange],
    );

    return (
      <label
        className={`Mongsil-radio-root ${disabled === true ? 'disabled' : ''} ${
          className ?? ''
        }`}
        ref={ref}
      >
        <input
          className="Mongsil-radio-base"
          type="radio"
          checked={checked}
          disabled={disabled}
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
