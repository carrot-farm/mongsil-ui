import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'component/Button',
  component: Button,
  args: {
    variant: 'emboss',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Emboss = Template.bind({});
Emboss.args = {
  variant: 'emboss',
  children: 'button',
};

export const Dent = Template.bind({});
Dent.args = {
  variant: 'dent',
  children: 'button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'button',
};
