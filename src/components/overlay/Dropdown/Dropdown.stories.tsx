import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import Dropdown, { DropdownProps } from './Dropdown';
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

export const Default = <T extends Item>(): Story<DropdownProps<T>> => ({
  ...args
}) => {
  return <Dropdown<T> {...args} />;
};
Default.args = {
  data,
  rowKey: 'id',
  renderItem: (item: Item) => item.title,
};
