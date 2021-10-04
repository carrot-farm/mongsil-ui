import * as React from 'react';

interface SelectProps {
  children?: React.ReactNode;
  className?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Select = React.forwardRef<HTMLSpanElement, SelectProps>(({ className, children }, ref) => {
  console.log('> ', children);
  return (
    <span className={`Mongsil-select-root  ${className ? className : ''}`} ref={ref}>
      {/* <span></span> */}
      <input type="hidden" name={name} />
      {children}
    </span>
  );
});

export default Select;
