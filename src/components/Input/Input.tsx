import * as React from 'react';

interface InputProps {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, ...args }, ref) => {
    const [isFocused, setIsFocused] = React.useState<boolean>(false);

    const handleFocus = React.useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleBlur = React.useCallback(() => {
      setIsFocused(false);
    }, []);

    return (
      <div
        className={`input-container ${isFocused ? 'animate-input-focus ' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <input className={`input-base ${className ?? ''}`} {...args} ref={ref} />
      </div>
    );
  },
);

export default Input;
