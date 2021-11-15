import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormItemLabel from './FormItemLabel';

export default {
  title: 'component/FormItemLabel',
  component: FormItemLabel,
} as ComponentMeta<typeof FormItemLabel>;

const Template: ComponentStory<typeof FormItemLabel> = (args) => (
  <FormItemLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'label',
};
