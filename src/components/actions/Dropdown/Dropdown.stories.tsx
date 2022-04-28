import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from './Dropdown';

export default {
  title: 'actions/Dropdown',
  component: Dropdown,
  args: {
    data: [
      { id: 1, title: 'title-1' },
      { id: 2, title: 'title-2' },
      { id: 3, title: 'title-3' },
      { id: 4, title: 'title-4' },
      { id: 5, title: 'title-5' },
    ],
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rowKey: 'id',
  renderItem: (item) => item.title,
};
