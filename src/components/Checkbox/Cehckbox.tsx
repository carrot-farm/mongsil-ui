import * as React from 'react';
import { memo } from 'react';
import { FaCheck } from 'react-icons/fa';

import { CheckboxProps } from './checkbox.d';

const Checkbox = React.forwardRef<HTMLSpanElement, CheckboxProps>(
  (
    {
      className,
      children,
      variant = 'emboss-outline',
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
    const handleClick = React.useCallback(() => {
      const newValue = !isChecked;

      if (onClick) {
        onClick(newValue, name);
      }

      if (onChange) {
        onChange(newValue, name);
      }

      if (checked === undefined) {
        // console.log('> ', name, checked);
        setIsChecked(newValue);
      }
    }, [name, checked, isChecked, onClick, onChange]);

    /** 체인지 이벤트 */
    const handleChange = React.useCallback(() => {}, []);

    /** 상태에 따라 변환 */
    React.useEffect(() => {
      setIsChecked(!!checked);
    }, [checked]);

    return (
      <span
        className={`Mongsil-checkbox-root ${isChecked ? 'checked' : ''} ${
          className ? className : ''
        }`}
        ref={ref}
        onClick={handleClick}
      >
        <input
          className={`Mongsil-checkbox-base`}
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={handleChange}
          {...args}
        />
        <span className={`Mongsil-checkbox-checker ${variant ?? ''}`}>
          <FaCheck className="Mongsil-checkbox-icon" />
        </span>
        {label && <label className={'Mongsil-checkbox-label'}>{label}</label>}
      </span>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default memo(Checkbox);
