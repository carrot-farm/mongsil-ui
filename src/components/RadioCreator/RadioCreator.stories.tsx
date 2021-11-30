import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioCreator from './RadioCreator';

export default {
  title: 'form/RadioCreator',
  component: RadioCreator,
  args: {
    variant: 'emboss',
    model: [
      { label: 'a', value: 'a' },
      { label: 'b', value: 'b' },
      { label: 'c', value: 'c' },
    ],
  },
} as ComponentMeta<typeof RadioCreator>;

const Template: ComponentStory<typeof RadioCreator> = (args) => (
  <RadioCreator {...args} />
);

export const Defaul = Template.bind({});

export const Dent = Template.bind({});
Dent.args = {
  variant: 'dent',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'c',
  variant: 'dent',
  disabled: true,
};
