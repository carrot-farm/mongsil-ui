import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Confirm from './Confirm';

export default {
  title: 'overlay/Confirm',
  component: Confirm,
  argTypes: {
    title: {
      control: {
        type: 'string',
      },
    },
  },
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => (
  <Confirm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  body: 'body',
  visible: true,
};
