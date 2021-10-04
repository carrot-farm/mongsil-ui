import * as React from 'react';

interface RadioProps {
  className?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  label?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(
  ({ className, checked, defaultChecked = true, label, onChange, ...args }, ref) => {
    const [isChecked, setIsChecked] = React.useState<boolean>(() => defaultChecked);

    const handleChange = React.useCallback((e) => {
      if (onChange) {
        onChange(e);
      }

      setIsChecked(e.target.checked);
    }, []);

    React.useEffect(() => {
      if (checked === true || checked === false) {
        setIsChecked(checked);
      }
    }, [checked]);

    return (
      <label className={`Mongsil-radio-root ${className} ${isChecked ? 'checked' : ''}`} ref={ref}>
        <input
          className="Mongsil-radio-base"
          {...args}
          type="radio"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="Mongsil-radio-checker">
          <span className="Mongsil-radio-checker-outer">
            <span className="Mongsil-radio-checker-inner"></span>
          </span>
        </span>
        {label && <span className="Mongsil-radio-label">{label}</span>}
      </label>
    );
  },
);

export default Radio;
