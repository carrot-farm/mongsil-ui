import * as React from 'react';
import {
  useCallback,
  useEffect,
  useContext,
  useState,
  memo,
  useLayoutEffect,
} from 'react';
import { forwardRef } from 'react';

import FormItemLabel from '../FormItemLabel';
import CloneComponent from '../CloneComponent/CloneComponent';

import { FormItemProps, FormItemChild, DisplayName } from './formItem.d';
import { ValueTypes } from '../../types/components';
import { FormContext } from '../../contexts/formContext';
import { validate } from '../../utils/validator';

function FormItem({
  itemId,
  label,
  helper,
  name,
  value,
  checked,
  rules,
  required: _required,
  stateBind = 'both',
  direction = 'y',
  children,
  className,
  onChange,
}: FormItemProps): JSX.Element {
  const {
    values,
    scheme,
    schemeRef,
    setValue: setFormValue,
  } = useContext(FormContext);
  // console.log('> FormItem', children);

  const [id] = useState(
    () => itemId ?? (name ?? '') + Math.random().toString(32).substr(2),
  );
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const [required, setRequired] = useState(() => _required);

  /** 값 변경 */
  const handleChange = useCallback(
    (newValue: ValueTypes, name?: string): void => {
      // # 유효성 검사(change에서는 required를 검사하지 않는다.)
      if (rules) {
        if (newValue) {
          const result = validate(rules, newValue);

          if (result.pass === false && result.message) {
            setErrorMessage(result.message);
          } else {
            setErrorMessage(null);
          }
        } else {
          setErrorMessage(null);
        }
      }

      // # 이벤트 전달
      if (
        (onChange && onChange(newValue, name) === false) ||
        stateBind === 'stateOnly'
      ) {
        return;
      }
      // console.log('> formItem: ', stateBind, name, newValue);

      // # 값 변경
      if (name) {
        setFormValue(name, newValue);
      }
    },
    [stateBind, id, rules, onChange, setFormValue],
  );

  // console.log('> Fo: ', values);

  /** 상태에 따라 변환 */
  useEffect(() => {
    if (stateBind !== 'none' && name) {
      setFormValue(name, value ?? checked);
    }
  }, [value, checked, stateBind, setFormValue]);

  /** 스키마 셋 */
  useEffect(() => {
    const { idMap, model } = schemeRef.current;

    if (idMap[id] !== undefined) {
      return;
    }

    // console.log(id, schemeRef.current);
    const newModel = {
      ...model,
      [id]: {
        label,
        helper,
        name,
        rules,
        required,
        stateBind,
        direction,
        className,
      },
    };
    const index = schemeRef.current.model.push(newModel) - 1; // 인덱스

    // # set id map
    schemeRef.current.idMap = {
      ...schemeRef.current.idMap,
      [id]: index,
    };

    // # set name map
    if (name) {
      schemeRef.current.nameMap = {
        ...schemeRef.current.nameMap,
        [id]: index,
      };
    }
  }, [
    label,
    helper,
    name,
    rules,
    required,
    stateBind,
    direction,
    className,
    id,
  ]);

  useEffect(() => {
    const isRequired = !!rules?.some(
      ({ rule }) => (console.log(rule), rule[0] === 'required'),
    );

    if (isRequired === true) {
      setRequired(isRequired);
      console.log('> ', isRequired);
    }
  }, [rules]);

  /** 랜더링 */
  return (
    <div
      className={`Mongsil-form_item-root ${
        direction === 'y' ? 'flex-col' : 'flex-row'
      } ${className ?? ''}`}
    >
      {label && <FormItemLabel label={label} required={required} />}

      <div className="Mongsil-form_item-container">
        {React.Children.map(children, (child) => {
          if (React.isValidElement<FormItemChild>(child)) {
            const _type = child.type as any;
            const displayName = _type.type.displayName;
            let newValue = name && values[name] ? values[name] : undefined;
            let _checked =
              (displayName === 'Checkbox' || displayName === 'Switch') &&
              name &&
              values[name]
                ? values[name]
                : undefined;

            if (name && values[name] === undefined) {
              if (displayName === 'Checkbox' || displayName === 'Switch') {
                _checked = initialValues.route(displayName);
              } else {
                newValue = initialValues.route(displayName);
              }
            }
            // console.log('> ', displayName, JSON.stringify(newValue));

            return (
              <CloneComponent
                name={name}
                value={newValue}
                checked={_checked}
                className={className}
                child={child}
                onChange={handleChange}
              />
            );
          } else {
            return child;
          }
        })}

        {!errorMessage && helper && (
          <div className="Mongsil-form_item-helper_text">{helper}</div>
        )}

        {errorMessage && (
          <div className="Mongsil-form_item-error_message">{errorMessage}</div>
        )}
      </div>
    </div>
  );
}

/** 컴포넌트별 초기값 */
const initialValues = {
  Checkbox: () => false,
  CheckboxCreator: (): string[] => [],
  Switch: () => false,
  Input: () => '',
  route(displayName: DisplayName): ValueTypes {
    return this[displayName]();
  },
};

export default memo(FormItem);
