import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormCreator from './FormCreator';

export default {
  title: 'form/FormCreator',
  component: FormCreator,
  args: {
    variant: 'emboss',
    model: [
      {
        component: 'input',
        itemId: 'input',
        name: 'input-name',
      },
      {
        component: 'textarea',
        itemId: 'textarea',
        name: 'textarea-name',
      },
      {
        component: 'select',
        itemId: 'select',
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
        itemId: 'checkbox',
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
        itemId: 'radio',
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
        itemId: 'switch',
        name: 'switch',
        props: {
          variant: 'dent',
        },
      },
      {
        component: 'button',
        itemId: 'submit',
        type: 'submit',
        children: 'submit',
      },
    ],
  },
} as ComponentMeta<typeof FormCreator>;

const Template: ComponentStory<typeof FormCreator> = (args) => (
  <FormCreator {...args} />
);

export const Defaul = Template.bind({});

export const Layout = Template.bind({});
Layout.args = {
  layout: {
    areas: `
      'input select .'
      'checkbox . radio '
      'submit switch switch'
    `,
    gap: 2,
    columns: '100px 100px 80px',
  },
};
