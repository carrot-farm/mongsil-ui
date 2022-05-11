import * as React from 'react';
import { memo, forwardRef } from 'react';

import Select, { Option } from '../Select';

import { SelectProps, OptionProps } from '../Select';

/** 모델의 아이템 */
type SelectCreatorModelItem = Pick<OptionProps, 'label' | 'value'>;

export interface SelectCreatorProps extends Omit<SelectProps, 'children'> {
  /** 모델 객체 */
  model: SelectCreatorModelItem[];
}

const SelectCreator = forwardRef<HTMLSpanElement, SelectCreatorProps>(
  (
    { className, name, value: _value, defaultValue, model, onChange, ...args },
    ref,
  ) => {
    return (
      <Select
        className={`Mongsil-select_creator ${className ?? ''}`}
        name={name}
        value={_value}
        defaultValue={defaultValue}
        ref={ref}
        onChange={onChange}
        {...args}
      >
        {model?.map((a, i) => (
          <Option
            value={a.value}
            key={`Mongsil-select_creator-option-${name || ''}-${i}`}
          >
            {a.label}
          </Option>
        ))}
      </Select>
    );
  },
);

SelectCreator.displayName = 'SelectCreator';

export default memo(SelectCreator);
