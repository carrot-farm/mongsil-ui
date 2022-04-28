import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import Select, { SelectProps } from './Select';
import Option from './Option';

export default {
  title: 'form/Select',
  component: Select,
  argTypes: {
    onChange: {
      action: 'changed',
    },
  },
  args: {
    defaultValue: 'a',
  },
} as ComponentMeta<typeof Select>;

const Template = (args: SelectProps): JSX.Element => (
  <Select {...args}>
    <Option value="a">a</Option>
    <Option value="b">b</Option>
    <Option value="c">c</Option>
  </Select>
);

export const Default = (args: SelectProps): JSX.Element => (
  <Template {...args} />
);

export const Value = (args: SelectProps): JSX.Element => <Template {...args} />;
Value.args = {
  value: 'b',
};

export const DefaultValue = (args: SelectProps): JSX.Element => (
  <Template {...args} />
);

export const Disabled = (args: SelectProps): JSX.Element => (
  <Template {...args} />
);
Disabled.args = {
  disabled: true,
};
