import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import Layout, { LayoutProps } from './Layout';

export default {
  title: 'utis/Layout',
  component: Layout,
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
  gap: 'gap-x-2 gap-y-4',
  elements: {
    aside: <div className="border border-gray-500">aside</div>,
    header: <div className="border border-gray-500">header</div>,
    main: <div className="border border-gray-500">main</div>,
    footer: <div className="border border-gray-500">footer</div>,
  },
};
