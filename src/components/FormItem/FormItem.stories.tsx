import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FormItem from './FormItem';
import { FormItemProps } from './formItem.d';
import Form from '../Form';
import { FormProps } from '../Form/form.d';
import Input from '../Input';
import Button from '../Button';

export default {
  title: 'form/FormItem',
  component: FormItem,
  argTypes: {
    onSubmit: {
      action: 'changed',
    },
  },
} as ComponentMeta<typeof FormItem>;

export const Label = (props: FormItemProps): JSX.Element => (
  <FormItem {...props}>
    <Input />
  </FormItem>
);
Label.args = {
  label: 'input',
};

export const Direction = (props: FormItemProps): JSX.Element => (
  <Form>
    <FormItem {...props}>
      <Input />
    </FormItem>
  </Form>
);
Direction.args = {
  label: 'direction',
  direction: 'x',
};

export const Helper = (props: FormItemProps): JSX.Element => (
  <FormItem {...props}>
    <Input />
  </FormItem>
);
Helper.args = {
  label: 'input',
  helper: 'helper text',
};

export const Value = (props: FormItemProps): JSX.Element => (
  <Form>
    <FormItem {...props}>
      <Input />
    </FormItem>
  </Form>
);
Value.args = {
  name: 'input',
  value: 'value',
};

export const DefaultValue = (props: FormItemProps): JSX.Element => (
  <Form>
    <FormItem {...props}>
      <Input />
    </FormItem>
  </Form>
);
DefaultValue.args = {
  name: 'input',
  defaultValue: 'defaultValue',
};

export const StateBindNone = (props: FormItemProps): JSX.Element => (
  <Form>
    <FormItem {...props}>
      <Input />
    </FormItem>
  </Form>
);
StateBindNone.args = {
  name: 'input',
  value: 'value',
  stateBind: 'none',
};

export const StateBindStateOnly = (props: FormItemProps): JSX.Element => (
  <Form>
    <FormItem {...props}>
      <Input />
    </FormItem>
  </Form>
);
StateBindStateOnly.args = {
  name: 'input',
  value: 'value',
  stateBind: 'stateOnly',
};

export const StateBindBoth = (props: FormItemProps): JSX.Element => (
  <Form>
    <FormItem {...props}>
      <Input />
    </FormItem>
  </Form>
);
StateBindBoth.args = {
  name: 'input',
  value: 'value',
  stateBind: 'both',
};

export const RulesRequired = ({
  onSubmit,
  ...props
}: FormItemProps & { onSubmit: FormProps['onSubmit'] }): JSX.Element => (
  <Form onSubmit={onSubmit}>
    <FormItem {...props}>
      <Input />
    </FormItem>
    <Button type="submit">submit</Button>
  </Form>
);
RulesRequired.args = {
  label: 'rules required',
  name: 'input',
  rules: [
    {
      rule: ['required'],
      message: '값을 입력하십시요',
    },
  ],
};

export const RulesLength = ({
  onSubmit,
  ...props
}: FormItemProps & { onSubmit: FormProps['onSubmit'] }): JSX.Element => (
  <Form onSubmit={onSubmit}>
    <FormItem {...props}>
      <Input />
    </FormItem>
  </Form>
);
RulesLength.args = {
  name: 'input',
  rules: [
    {
      rule: ['length', 2, 5],
      message: '2이상 최대 5이하의 문자열을 입력하십시요',
    },
  ],
};

export const RulesMin = ({
  onSubmit,
  ...props
}: FormItemProps & { onSubmit: FormProps['onSubmit'] }): JSX.Element => (
  <Form onSubmit={onSubmit}>
    <FormItem {...props}>
      <Input />
    </FormItem>
  </Form>
);
RulesMin.args = {
  name: 'input',
  rules: [
    {
      rule: ['min', 5],
      message: '5이상의 숫자를 입력하십시요',
    },
  ],
};

export const RulesMax = ({
  onSubmit,
  ...props
}: FormItemProps & { onSubmit: FormProps['onSubmit'] }): JSX.Element => (
  <Form onSubmit={onSubmit}>
    <FormItem {...props}>
      <Input />
    </FormItem>
  </Form>
);
RulesMax.args = {
  name: 'input',
  value: '5',
  rules: [
    {
      rule: ['max', 5],
      message: '5이하의 숫자를 입력하십시요',
    },
  ],
};
