import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import Layout, { LayoutProps } from './Layout';

export default {
  title: 'components/Layout',
  component: Layout,
  args: {
    areas: `
      'apple banana lemon'
      'strawberry mangon fig'
      'melon peach bluberry'
    `,
    elements: {
      apple: <div className="border border-gray-500">apple</div>,
      banana: <div className="border border-gray-500">banana</div>,
      lemon: <div className="border border-gray-500">lemon</div>,
      strawberry: <div className="border border-gray-500">strawberry</div>,
      mangon: <div className="border border-gray-500">mangon</div>,
      fig: <div className="border border-gray-500">fig</div>,
      melon: <div className="border border-gray-500">melon</div>,
      peach: <div className="border border-gray-500">peach</div>,
      bluberry: <div className="border border-gray-500">bluberry</div>,
    },
    columns: 'repeat(3, 100px)',
    rows: 'repeat(3, 80px)',
  },
} as ComponentMeta<typeof Layout>;

export const Default = (args: LayoutProps): JSX.Element => <Layout {...args} />;
Default.args = {
  areas: `
    'header header header'
    'aside main main'
    'footer footer footer'
  `,
  columns: '100px repeat(2, 200px)',
  rows: 'repeat(3, 80px)',
  elements: {
    aside: <div className="border border-gray-500">aside</div>,
    header: <div className="border border-gray-500">header</div>,
    main: <div className="border border-gray-500">main</div>,
    footer: <div className="border border-gray-500">footer</div>,
  },
};

export const GapX = (args: LayoutProps): JSX.Element => <Layout {...args} />;
GapX.args = {
  gapX: 2,
};

export const GapY = (args: LayoutProps): JSX.Element => <Layout {...args} />;
GapY.args = {
  gapY: 2,
};
