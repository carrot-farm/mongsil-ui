import * as React from 'react';
import { TextareaHTMLAttributes } from 'react';
import { useState, forwardRef, useCallback } from 'react';

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  className?: string;
  onChange?: (vlaue?: string, name?: string) => void | false;
}

const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
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
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // console.log('> change: ', name, value);
        if (onChange) {
          onChange(value, name);
        }
      },
      [onChange],
    );

    // console.log('> input: ');

    return (
      <div
        className={`Mongsil-textarea-root ${isFocused ? 'focused' : ''} ${
          disabled === true ? 'disabled' : ''
        } ${className ?? ''}`}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <textarea
          className="Mongsil-textarea-base"
          disabled={disabled}
          onChange={handleChange}
          {...args}
        />
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';

export default React.memo(TextArea);
