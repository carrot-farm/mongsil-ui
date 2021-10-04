import * as React from 'react';

interface SelectProps {
  children?: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Option = React.forwardRef<HTMLSpanElement, SelectProps>(({ className, children }, ref) => {
  return (
    <span className={`Mongsil-option-root  ${className ? className : ''}`} ref={ref}>
      {children}
    </span>
  );
});

export default Option;
