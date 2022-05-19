import React from 'react';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';

import Dropdown, { DropdownProps } from './Dropdown';
import Button from '../../Button';

interface Item {
  id: number;
  title: string;
}

const data: Item[] = [
  { id: 1, title: 'title-1' },
  { id: 2, title: 'title-2' },
  { id: 3, title: 'title-3' },
  { id: 4, title: 'title-4' },
  { id: 5, title: 'title-5' },
];

export default {
  title: 'overlay/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Dropdown button={<Button>open</Button>} {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  data,
  renderItem: (item) => item.title,
};

export const Left = Template.bind({});
Left.args = {
  position: 'left',
  data,
  renderItem: (item) => item.title,
};

export const Right = Template.bind({});
Right.args = {
  position: 'right',
  data,
  renderItem: (item) => item.title,
};

export const Top = Template.bind({});
Top.args = {
  position: 'top',
  data,
  renderItem: (item) => item.title,
};

export const PositionButtonUnwrapBottom = Template.bind({});
PositionButtonUnwrapBottom.args = {
  positionButtonWrap: false,
  data,
  renderItem: (item) => item.title,
};
