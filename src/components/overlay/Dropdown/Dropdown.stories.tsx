import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

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

export const Default = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Dropdown
        button={<Button>open</Button>}
        data={data}
        renderItem={(item) => item.title}
      />
    </div>
  );
};
