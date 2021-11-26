import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from './TextArea';

export default {
  title: 'component/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});