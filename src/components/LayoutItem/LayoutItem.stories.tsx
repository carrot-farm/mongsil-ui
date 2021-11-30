import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import Layout from '../Layout';
import LayoutItem, { LayoutItemProps } from './LayoutItem';

export default {
  title: 'layout/LayoutItem',
  component: LayoutItem,
} as ComponentMeta<typeof LayoutItem>;

export const Default = ({
  alignSelf,
  justifySelf,
}: Pick<LayoutItemProps, 'alignSelf' | 'justifySelf'>): JSX.Element => (
  <Layout areas="box" rows="200px" columns="200px">
    <LayoutItem
      className="w-12 h-12 border border-gray-500"
      gridArea="box"
      alignSelf={alignSelf as string}
      justifySelf={justifySelf as string}
    >
      <div>box</div>
    </LayoutItem>
  </Layout>
);
Default.args = {
  alignSelf: 'start',
  justifySelf: 'center',
};
Default.argTypes = {
  alignSelf: {
    options: ['normal', 'start', 'center', 'end', 'stretch'],
    control: { type: 'select' },
  },
  justifySelf: {
    options: ['normal', 'start', 'center', 'end', 'stretch'],
    control: { type: 'select' },
  },
};
