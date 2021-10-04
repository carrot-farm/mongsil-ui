import * as React from 'react';

interface CheckboxProps {
  className?: string;
  variant?: 'dent' | 'emboss';
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = React.forwardRef<HTMLSpanElement, CheckboxProps>(
  (
    { className, name, checked, defaultChecked = false, variant = 'emboss', onChange, ...args },
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
        className={`Mongsil-switch-root ${isChecked ? 'checked' : ''} ${
          className ? className : ''
        }`}
        ref={ref}
        onClick={handleClick}
      >
        <input
          className={`Mongsil-switch-base`}
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          {...args}
        />
        <span className={`Mongsil-switch-bg ${variant ? variant : ''}`}>
          <span className={`Mongsil-switch-checker `} />
        </span>
      </span>
    );
  },
);

export default Checkbox;
