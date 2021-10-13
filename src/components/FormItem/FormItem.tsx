import * as React from 'react';
import { useState, useCallback, useEffect, useContext } from 'react';
import { forwardRef } from 'react';

import FormItemLabel from '../FormItemLabel';
import CloneComponent from '../CloneComponent/CloneComponent';

import { FormItemProps, FormItemChild, DisplayName } from './formItem.d';
import { ValueTypes } from '../../types/components';
import { FormContext } from '../../contexts/formContext';

function FormItem({
  label,
  helper,
  name,
  value,
  defaultValue,
  validation,
  required,
  stateBind,
  direction = 'y',
  children,
  className,
  onChange,
}: FormItemProps): JSX.Element {
  const { values, setValue: setFormValue } = useContext(FormContext);

  /** 값 변경 */
  const handleChange = useCallback(
    (_value: ValueTypes, name?: string): void => {
      // console.log('> formItem: ', name, _value);

      if (
        (onChange && onChange(_value, name) === false) ||
        stateBind === 'stateOnly'
      ) {
        return;
      }

      if (name) {
        setFormValue(name, _value);
      }
    },
    [stateBind, onChange, setFormValue],
  );

  // console.log('> change: ', values);

  /** 상태에 따라 변환 */
  useEffect(() => {
    if (stateBind !== 'none' && name) {
      setFormValue(name, value);
    }
  }, [value, stateBind, setFormValue]);

  /** 랜더링 */
  return (
    <div
      className={`Mongsil-form_item-root ${
        direction === 'y' ? 'flex-col' : 'flex-row'
      } ${className ?? ''}`}
    >
      {label && <FormItemLabel label={label} />}

      <div className="Mongsil-form_item-container">
        {React.Children.map(children, (child) => {
          if (React.isValidElement<FormItemChild>(child)) {
            // const _child = child.type as any;
            // const newValue =
            //   name && values[name] !== undefined
            //     ? values[name]
            //     : initialValue.route(_child.type.displayName, value);

            return (
              <CloneComponent
                name={name}
                value={name && values[name]}
                className={className}
                child={child}
                onChange={handleChange}
              />
            );
          }
        })}

        {helper && (
          <div className="Mongsil-form_item-helper_text">{helper}</div>
        )}
      </div>
    </div>
  );
}

/** 엘리먼트별 초기값을 셋팅  */
// const initialValue = {
//   Input: (value: ValueTypes | undefined) => (value === undefined ? '' : value),
//   route(
//     displayName: DisplayName,
//     value: ValueTypes | undefined,
//   ): ValueTypes | undefined {
//     return this[displayName](value);
//   },
// };

export default React.memo(FormItem);
