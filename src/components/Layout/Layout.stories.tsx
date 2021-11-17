import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import Layout, { LayoutProps } from './Layout';
import LayoutItem from '../LayoutItem';

export default {
  title: 'component/Layout',
  component: Layout,
  args: {
    areas: `
      'apple banana lemon'
      'strawberry mangon fig'
      'melon peach bluberry'
    `,
    children: (
      <React.Fragment>
        {[
          'apple',
          'banana',
          'lemon',
          'strawberry',
          'mangon',
          'fig',
          'melon',
          'peach',
          'bluberry',
        ].map((name) => (
          <LayoutItem gridArea={name} key={name}>
            <div className="border border-gray-500">{name}</div>
          </LayoutItem>
        ))}
      </React.Fragment>
    ),
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
  children: (
    <React.Fragment>
      <LayoutItem gridArea="aside">
        <div className="border border-gray-500">aside</div>
      </LayoutItem>
      <LayoutItem gridArea="header">
        <div className="border border-gray-500">header</div>
      </LayoutItem>
      <LayoutItem gridArea="main">
        <div className="border border-gray-500">main</div>
      </LayoutItem>
      <LayoutItem gridArea="footer">
        <div className="border border-gray-500">footer</div>
      </LayoutItem>
    </React.Fragment>
  ),
};

export const GapX = (args: LayoutProps): JSX.Element => <Layout {...args} />;
GapX.args = {
  gapX: 2,
};

export const GapY = (args: LayoutProps): JSX.Element => <Layout {...args} />;
GapY.args = {
  gapY: 2,
};
