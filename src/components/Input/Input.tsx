import * as React from 'react';
import { useState, forwardRef, useCallback } from 'react';

export interface InputProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  disabled?: boolean;
  onChange?: (vlaue?: string, name?: string) => void | false;
}

const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ className, disabled, onChange, ...args }, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    // console.log('> input render: ', args.value);

    /** event: focus in */
    const handleFocus = useCallback(() => {
      if (disabled === true) {
        return;
      }
      setIsFocused(true);
    }, [disabled]);

    /** event: focus out */
    const handleBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    /** 값 변경 */
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        if (onChange) {
          onChange(value, name);
        }
      },
      [onChange],
    );

    // console.log('> input: ');

    return (
      <div
        className={`Mongsil-input-root ${isFocused ? 'focused' : ''} ${
          disabled === true ? 'disabled' : ''
        } ${className ?? ''}`}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <input
          className="Mongsil-input-base"
          disabled={disabled}
          onChange={handleChange}
          {...args}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default React.memo(Input);
