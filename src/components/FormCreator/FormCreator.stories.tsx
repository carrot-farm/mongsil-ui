import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormCreator from './FormCreator';

export default {
  title: 'component/FormCreator',
  component: FormCreator,
  args: {
    variant: 'emboss',
  },
} as ComponentMeta<typeof FormCreator>;

const Template: ComponentStory<typeof FormCreator> = (args) => (
  <FormCreator {...args} />
);

export const Model = Template.bind({});
Model.args = {
  model: [
    {
      component: 'input',
      name: 'input-name',
    },
    {
      component: 'select',
      name: 'select-name',
      defaultValue: 'b',
      props: {
        model: [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' },
          { label: 'c', value: 'c' },
        ],
      },
    },
    {
      component: 'checkbox',
      name: 'checkbox-name',
      props: {
        model: [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' },
          { label: 'c', value: 'c' },
        ],
      },
    },
    {
      component: 'radio',
      name: 'radio-name',
      props: {
        model: [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' },
          { label: 'c', value: 'c' },
        ],
      },
    },
    {
      component: 'switch',
      name: 'switch',
      props: {
        variant: 'dent',
      },
    },
    {
      component: 'button',
      type: 'submit',
      children: 'submit',
    },
  ],
};
