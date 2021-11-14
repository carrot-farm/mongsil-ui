import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckboxCreator from './CheckboxCreator';

export default {
  title: 'component/CheckboxCreator',
  component: CheckboxCreator,
} as ComponentMeta<typeof CheckboxCreator>;

const Template: ComponentStory<typeof CheckboxCreator> = (args) => (
  <CheckboxCreator {...args} />
);

export const Model = Template.bind({});
Model.args = {
  defaultValue: ['b'],
  model: [
    { label: 'a', value: 'a' },
    { label: 'b', value: 'b' },
    { label: 'c', value: 'c' },
  ],
};
