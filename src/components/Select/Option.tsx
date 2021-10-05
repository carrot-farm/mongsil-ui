import * as React from 'react';
import { useCallback, useEffect } from 'react';

interface SelectProps {
  children?: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  selectedValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: (value?: string, params?: ClickParams) => void;
  onSelected?: (child?: React.ReactNode) => void;
}

interface ClickParams {
  label: React.ReactNode;
  event: React.MouseEvent<HTMLDivElement>;
}

const Option = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ className, value, selectedValue, children, onClick, onSelected, ...args }, ref) => {
    /** click */
    const handleClick = React.useCallback(
      (event) => {
        if (onClick) {
          onClick(value, { label: children, event });
        }
      },
      [value, children, onClick],
    );

    /** 현재 옵션이 선택되었는지 확인 */
    React.useEffect(() => {
      if (value === selectedValue && onSelected) {
        onSelected(children);
      }
    }, [value, selectedValue]);

    return (
      <div
        className={`Mongsil-option-root ${className ? className : ''} ${
          selectedValue === value ? 'selected' : ''
        }`}
        ref={ref}
        onClick={handleClick}
        {...args}
      >
        {children}
      </div>
    );
  },
);

export default Option;
