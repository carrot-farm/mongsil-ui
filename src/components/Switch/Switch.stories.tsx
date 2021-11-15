import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from './Switch';

export default {
  title: 'component/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Emboss = Template.bind({});
Emboss.args = {
  variant: 'emboss',
};

export const Dent = Template.bind({});
Dent.args = {
  variant: 'dent',
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
