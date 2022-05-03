import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';

import Form from '../Form';
import FormItem from '../FormItem';
import Input from '../Input';
import TextArea from '../TextArea';
import SelectCreator from '../SelectCreator';
import CheckboxCreator from '../CheckboxCreator';
import RadioCreator from '../RadioCreator';
import Switch from '../Switch';
import Button, { ButtonProps } from '../Button';
import Layout, { LayoutProps } from '../Layout';
import LayoutItem from '../LayoutItem';

import { FormCreatorProps } from './formCreator.d';
import { FormItemProps } from '../FormItem/formItem.d';
import { InputChange } from '../../types/components';
import { InputProps } from '../Input/input.d';
import { TextAreaProps } from '../TextArea/TextArea';
import { SelectCreatorProps } from '../SelectCreator/selectCreator.d';
import { CheckboxCreatorProps } from '../CheckboxCreator/checkboxCreator.d';
import { RadioCreatorProps } from '../RadioCreator/radioCreator.d';
import { SwitchProps } from '../Switch/switch.d';

function FormCreator({
  model,
  layout,
  onChange,
  ...args
}: FormCreatorProps): JSX.Element {
  const [curretLayout, setCurrentLayout] = useState<LayoutProps>(() => {
    const newLayout: LayoutProps = layout ? { ...layout } : { areas: '' };

    if (!layout || !layout.areas) {
      newLayout.areas = model.reduce<LayoutProps['areas']>(
        (acc, cur) => `${acc ?? ''}\n'${cur.itemId ?? ''}'`,
        '',
      );
    }

    return newLayout;
  });

  /** 전체 체인지 이벤트 */
  const handleChange = useCallback<InputChange>(
    (value, name) => {
      if (onChange && onChange(value, name) === false) {
        return false;
      }
    },
    [onChange],
  );

  useEffect(() => {
    if (!layout) {
      return;
    }
    setCurrentLayout(layout);
  }, [layout]);

  /** 리턴 */
  return (
    <Form {...args}>
      <Layout {...curretLayout}>
        {model.map(({ component, props, itemId, ...modelArgs }, i: number) => (
          <React.Fragment
            key={`Mongsil-form_item-${modelArgs.name ?? ''}-${i}`}
          >
            {component === 'input' ? (
              <ItemWrapper
                gridArea={itemId}
                modelArgs={modelArgs}
                onChange={handleChange}
              >
                <Input {...(props as InputProps)} />
              </ItemWrapper>
            ) : component === 'textArea' ? (
              <ItemWrapper
                gridArea={itemId}
                modelArgs={modelArgs}
                onChange={handleChange}
              >
                <TextArea {...(props as TextAreaProps)} />
              </ItemWrapper>
            ) : component === 'select' ? (
              <ItemWrapper
                gridArea={itemId}
                modelArgs={modelArgs}
                onChange={handleChange}
              >
                <SelectCreator {...(props as SelectCreatorProps)} />
              </ItemWrapper>
            ) : component === 'checkbox' ? (
              <ItemWrapper
                gridArea={itemId}
                modelArgs={modelArgs}
                onChange={handleChange}
              >
                <CheckboxCreator {...(props as CheckboxCreatorProps)} />
              </ItemWrapper>
            ) : component === 'radio' ? (
              <ItemWrapper
                gridArea={itemId}
                modelArgs={modelArgs}
                onChange={handleChange}
              >
                <RadioCreator {...(props as RadioCreatorProps)} />
              </ItemWrapper>
            ) : component === 'switch' ? (
              <ItemWrapper
                gridArea={itemId}
                modelArgs={modelArgs}
                onChange={handleChange}
              >
                <Switch {...(props as SwitchProps)} />
              </ItemWrapper>
            ) : component === 'button' ? (
              <LayoutItem gridArea={itemId}>
                <Button {...(modelArgs as ButtonProps)} />
              </LayoutItem>
            ) : null}
          </React.Fragment>
        ))}
      </Layout>
    </Form>
  );
}

interface ItemWrapperProps {
  /** 그리드 영역명 */
  gridArea: FormItemProps['itemId'];
  /** 모델의 기타 속성 */
  modelArgs: Omit<FormItemProps, 'component' | 'props' | 'itemId'>;
  /** 변경 이벤트 핸들러 */
  onChange: InputChange;
  /** 자식 컴포넌트 */
  children: React.ReactNode;
}

function ItemWrapper({
  gridArea,
  modelArgs,
  children,
  onChange,
}: ItemWrapperProps): JSX.Element {
  return (
    <LayoutItem gridArea={gridArea}>
      <FormItem onChange={onChange} {...modelArgs}>
        {children}
      </FormItem>
    </LayoutItem>
  );
}

export default FormCreator;
