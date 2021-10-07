import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';

import Checkbox from '../Checkbox';

import { CheckboxCreatorProps, HandleClick, Values } from './checkboxCreator.d';

const CheckboxCreator = React.forwardRef<HTMLSpanElement, CheckboxCreatorProps>(
  (
    {
      name,
      values: _values,
      variant,
      defaultValues,
      stateBind = 'both',
      model,
      onChange,
      onClick,
    },
    ref,
  ) => {
    const [values, setValues] = useState<Values>(
      () => defaultValues || _values || [],
    );

    console.log('> outside : ', values);

    /** 클릭 이벤트 */
    const handleClick = useCallback<HandleClick>(
      (value) => {
        const idx = values.findIndex((a) => a === value);
        const newValues =
          idx >= 0
            ? [...values.slice(0, idx), ...values.slice(idx + 1, values.length)]
            : [...values, value];

        if (onClick) {
          onClick(newValues, name);
        }

        console.log('> ', values, newValues);

        if (
          (onChange && onChange(newValues, name) === false) ||
          stateBind === 'stateOnly'
        ) {
          return;
        }

        setValues([...newValues]);
      },
      [name, values, stateBind, onChange, onClick],
    );

    /** 외부 values 변경 */
    useEffect(() => {
      if (_values === undefined || stateBind !== 'none') {
        return;
      }
      setValues(_values);
    }, [_values, stateBind]);

    return (
      <span className="Mongsil-checkbox-creator-root" ref={ref}>
        {/* <input type="hidden" name={name} value={values?.join(',')} /> */}
        <input type="hidden" name={name} />
        {model?.map((a, i) => (
          <Checkbox
            label={a.label}
            variant={variant}
            stateBind="stateOnly"
            checked={values.includes(a.value)}
            onClick={() => handleClick(a.value)}
            key={`Mongsil-check-${name}-${i}`}
          />
        ))}
      </span>
    );
  },
);

export default CheckboxCreator;
