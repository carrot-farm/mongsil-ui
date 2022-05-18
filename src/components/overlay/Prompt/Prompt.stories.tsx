import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Prompt from './Prompt';

export default {
  title: 'overlay/Prompt',
  component: Prompt,
} as ComponentMeta<typeof Prompt>;

const Template: ComponentStory<typeof Prompt> = (args) => <Prompt {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  visible: true,
};
