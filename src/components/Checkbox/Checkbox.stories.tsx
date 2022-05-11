import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'form/Checkbox',
  component: Checkbox,
  args: {
    variant: 'emboss',
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Emboss = Template.bind({});
Emboss.args = {
  variant: 'emboss',
  label: 'checkbox',
};

export const EmbossOutline = Template.bind({});
EmbossOutline.args = {
  checked: true,
  variant: 'emboss-outline',
  label: 'emboss-outline',
};

export const EmbossFill = Template.bind({});
EmbossFill.args = {
  checked: true,
  variant: 'emboss-fill',
  label: 'checkbox',
};

export const Dent = Template.bind({});
Dent.args = {
  variant: 'dent',
  label: 'checkbox',
};

export const DentOutline = Template.bind({});
DentOutline.args = {
  checked: true,
  variant: 'dent-outline',
  label: 'checkbox',
};
