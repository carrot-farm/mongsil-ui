import * as React from 'react';
import { useCallback, useEffect, useContext, useState, memo } from 'react';

import FormItemLabel from '../FormItemLabel';
import CloneComponent from '../CloneComponent/CloneComponent';

import { FormItemProps, FormItemChild, DisplayName } from './formItem.d';
import { ValueTypes } from '../../types/components';
import { FormContext } from '../../contexts/formContext';
import { validate } from '../../utils/validator';

function FormItem({
  className,
  itemId,
  label,
  helper,
  name,
  defaultValue,
  value,
  checked,
  stateBind = 'both',
  direction = 'y',
  required: _required,
  disabled,
  children,
  rules,
  onChange,
}: FormItemProps): JSX.Element {
  const {
    values,
    errors,
    setValue: setFormValue,
    setModel,
    addError,
    setError,
  } = useContext(FormContext);
  // console.log('> FormItem', name);

  const [id] = useState(
    () => itemId ?? (name ?? '') + Math.random().toString(32).substr(2),
  );
  const [required, setRequired] = useState<boolean>(() => !!_required);

  /** 값 변경 */
  const handleChange = useCallback(
    (newValue: ValueTypes, name?: string): void => {
      // # 유효성 검사(change에서는 required를 검사하지 않는다.)
      if (rules) {
        if (newValue) {
          const result = validate(rules, newValue);

          if (result.pass === false && result.message) {
            setError(id, result.message);
          } else {
            setError(id, null);
          }
        } else {
          setError(id, null);
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
    [stateBind, id, rules, onChange, setFormValue, setError],
  );

  // console.log('> Fo: ', values);

  /** 기본 값 */
  useEffect(() => {
    if (
      name === undefined ||
      defaultValue === undefined ||
      values[name] !== undefined
    ) {
      return;
    }

    setFormValue(name, defaultValue);
  }, [name, values, defaultValue, setFormValue]);

  /** 상태에 따라 변환 */
  useEffect(() => {
    if (stateBind !== 'none' && name) {
      setFormValue(name, value ?? checked);
    }
  }, [value, checked, stateBind, setFormValue]);

  /** rules에 `required` 가 있을 경우 처리 */
  useEffect(() => {
    const isRequired = !!rules?.some(({ rule }) => rule[0] === 'required');

    if (isRequired === true) {
      setRequired(isRequired);
    }
  }, [rules]);

  /** 모델 셋 */
  useEffect(() => {
    const model = {
      id,
      className,
      name,
      label,
      helper,
      stateBind,
      direction,
      required,
      disabled,
      rules,
    };

    setModel(model);
  }, [
    id,
    className,
    name,
    label,
    helper,
    stateBind,
    direction,
    required,
    disabled,
    rules,
    setModel,
  ]);

  /** 에러 추가 */
  useEffect(() => {
    addError(id);
  }, [id, addError]);

  // console.log('> ', errors);

  /** 랜더링 */
  return (
    <div
      className={`Mongsil-form_item-root ${
        direction === 'y' ? 'flex-col' : 'flex-row'
      } ${disabled === true ? 'disabled' : ''} ${className ?? ''}`}
    >
      {label && (
        <FormItemLabel disabled={disabled} label={label} required={required} />
      )}
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

            return (
              <CloneComponent
                name={name}
                value={newValue}
                checked={_checked}
                className={className}
                child={child}
                disabled={disabled}
                onChange={handleChange}
              />
            );
          } else {
            return child;
          }
        })}

        {!errors[id] && helper && (
          <div className="Mongsil-form_item-helper_text">{helper}</div>
        )}

        {errors[id] && (
          <div className="Mongsil-form_item-error_message">{errors[id]}</div>
        )}
      </div>
    </div>
  );
}

/** 컴포넌트별 초기값 */
const initialValues = {
  Input: () => '',
  Checkbox: () => false,
  CheckboxCreator: (): string[] => [],
  Switch: () => false,
  Select: () => '',
  SelectCreator: () => '',
  RadioCreator: () => '',
  route(displayName: DisplayName): ValueTypes {
    return this[displayName]();
  },
};

export default memo(FormItem);
