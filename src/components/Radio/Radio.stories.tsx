import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './Radio';

export default {
  title: 'form/Radio',
  component: Radio,
  args: {
    variant: 'emboss',
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Defaul = Template.bind({});

export const Label = Template.bind({});
Label.args = {
  label: 'raiod label',
};

export const Dent = Template.bind({});
Dent.args = {
  variant: 'dent',
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
