import * as React from 'react';
import { useCallback } from 'react';

import Form from '../Form';
import FormItem from '../FormItem';
import Input from '../Input';
import SelectCreator from '../SelectCreator';
import CheckboxCreator from '../CheckboxCreator';
import RadioCreator from '../RadioCreator';
import Switch from '../Switch';
import Button from '../Button';

import { FormCreatorProps } from './formCreator.d';
import { InputProps } from '../Input/input.d';
import { SelectCreatorProps } from '../SelectCreator/selectCreator.d';
import { CheckboxCreatorProps } from '../CheckboxCreator/checkboxCreator.d';
import { RadioCreatorProps } from '../RadioCreator/radioCreator.d';
import { SwitchProps } from '../Switch/switch.d';
import { ButtonProps } from '../Button/button.d';

function FormCreator({
  model,
  onChange,
  ...args
}: FormCreatorProps): JSX.Element {
  /** 전체 체인지 이벤트 */
  const handleChange = useCallback(
    (value, name) => {
      if (onChange && onChange(value, name) === false) {
        return false;
      }
    },
    [onChange],
  );

  /** 리턴 */
  return (
    <Form {...args}>
      {model?.map(({ component, props, ...modelArgs }, i: number) => (
        <React.Fragment key={`Mongsil-form_item-${modelArgs.name}-${i}`}>
          {component === 'input' ? (
            <FormItem onChange={handleChange} {...modelArgs}>
              <Input {...props} />
            </FormItem>
          ) : component === 'select' ? (
            <FormItem onChange={handleChange} {...modelArgs}>
              <SelectCreator {...props} />
            </FormItem>
          ) : component === 'checkbox' ? (
            <FormItem onChange={handleChange} {...modelArgs}>
              <CheckboxCreator {...props} />
            </FormItem>
          ) : component === 'radio' ? (
            <FormItem onChange={handleChange} {...modelArgs}>
              <RadioCreator {...props} />
            </FormItem>
          ) : component === 'switch' ? (
            <FormItem onChange={handleChange} {...modelArgs}>
              <Switch {...props} />
            </FormItem>
          ) : component === 'button' ? (
            <Button {...modelArgs} />
          ) : null}
        </React.Fragment>
      ))}
    </Form>
  );
}

export default FormCreator;
