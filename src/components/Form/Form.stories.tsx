import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import Form, { FormProps } from './Form';
import FormItem from '../FormItem';
import Input from '../Input';
import TextArea from '../TextArea';
import CheckboxCreator from '../CheckboxCreator';
import RadioCreator from '../RadioCreator';
import Switch from '../Switch';
import SelectCreator from '../SelectCreator';
import Button from '../Button';

export default {
  title: 'form/Form',
  component: Form,
  argTypes: {
    onSubmit: {
      action: 'changed',
    },
  },
} as ComponentMeta<typeof Form>;

const model = [
  { label: 'a', value: 'a' },
  { label: 'b', value: 'b' },
  { label: 'c', value: 'c' },
];

export const Default = (args: FormProps): JSX.Element => (
  <div style={{ width: 300 }}>
    <Form {...args}>
      <FormItem name="input" defaultValue="input">
        <Input />
      </FormItem>
      <FormItem name="textarea" defaultValue="textarea">
        <TextArea />
      </FormItem>
      <FormItem name="checkbox" defaultValue={['a', 'c']}>
        <CheckboxCreator model={model} />
      </FormItem>
      <FormItem name="radio" defaultValue="b">
        <RadioCreator model={model} />
      </FormItem>
      <FormItem name="switch" label="switch">
        <Switch />
      </FormItem>
      <FormItem name="select" label="select" defaultValue="a">
        <SelectCreator model={model} />
      </FormItem>

      <div style={{ paddingTop: 12 }}>
        <Button type="submit">submit</Button>
      </div>
    </Form>
  </div>
);
