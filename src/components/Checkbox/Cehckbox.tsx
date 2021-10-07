import * as React from 'react';
import { FaCheck } from 'react-icons/fa';

import { CheckboxProps } from './checkbox.d';

const Checkbox = React.forwardRef<HTMLSpanElement, CheckboxProps>(
  (
    {
      className,
      children,
      variant = 'fill',
      stateBind = 'both',
      label,
      name,
      checked,
      defaultChecked,
      onChange,
      onClick,
      ...args
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = React.useState<boolean>(
      () => defaultChecked ?? false,
    );

    /** 클릭 이벤트 */
    const handleClick = React.useCallback(
      (_checked) => {
        const newValue = !_checked;

        if (onClick) {
          onClick(newValue, name);
        }

        if (
          (onChange && onChange(newValue, name) === false) ||
          stateBind === 'stateOnly'
        ) {
          return;
        }

        setIsChecked(newValue);
      },
      [name, onClick, onChange],
    );

    /** 체인지 이벤트 */
    const handleChange = React.useCallback(() => {}, []);

    /** 상태에 따라 변환 */
    React.useEffect(() => {
      if ((checked === true || checked === false) && stateBind !== 'none') {
        setIsChecked(checked);
      }
    }, [checked, stateBind]);

    return (
      <span
        className={`Mongsil-checkbox-root ${isChecked ? 'checked' : ''} ${
          className ? className : ''
        }`}
        ref={ref}
        onClick={React.useCallback(() => handleClick(isChecked), [isChecked])}
      >
        <input
          className={`Mongsil-checkbox-base`}
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={handleChange}
          {...args}
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
