import * as React from 'react';
import { FaCheck } from 'react-icons/fa';

interface CheckboxProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'fill' | 'border' | 'none';
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      className,
      children,
      checked,
      defaultChecked = false,
      variant = 'fill',
      label,
      onChange,
      ...args
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = React.useState<boolean>(() => defaultChecked);

    const handleClick = React.useCallback(() => {
      setIsChecked((c) => !c);
    }, []);

    const handleChange = React.useCallback((e) => {
      if (onChange) {
        onChange(e);
      }
    }, []);

    React.useEffect(() => {
      if (checked === true || checked === false) {
        setIsChecked(checked);
      }
    }, [checked]);

    return (
      <span
        className={`Mongsil-checkbox-root ${isChecked ? 'checked' : ''}`}
        ref={ref}
        onClick={handleClick}
      >
        <input
          className={`Mongsil-checkbox-base`}
          {...args}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={`Mongsil-checkbox-checker Mongsil-${variant}`}>
          <FaCheck className="Mongsil-checkbox-icon" />
        </span>
        {label && <label className={'Mongsil-checkbox-label'}>{label}</label>}
      </span>
    );
  },
);

export default Checkbox;
