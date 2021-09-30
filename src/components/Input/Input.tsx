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
        className={`Mongsil-input-root ${isFocused ? 'focused' : ''}`}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <input className={`Mongsil-input-base ${className ?? ''}`} {...args} />
      </div>
    );
  },
);

export default Input;
