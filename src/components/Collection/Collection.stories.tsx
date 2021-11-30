import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Collection from './Collection';

export default {
  title: 'layout/Collection',
  component: Collection,
  args: {
    children: (
      <React.Fragment>
        {new Array(9).fill('').map((_, i) => (
          <li className="border border-gray-500 mb-0" key={`item-${i}`}>
            {i + 1}
          </li>
        ))}
      </React.Fragment>
    ),
  },
} as ComponentMeta<typeof Collection>;

const Template: ComponentStory<typeof Collection> = (args) => (
  <Collection {...args} />
);

export const Default = Template.bind({});

export const DefaultColumn = Template.bind({});
DefaultColumn.args = { defaultColumn: 4 };

export const Gap = Template.bind({});
Gap.args = { gap: 8, defaultColumn: 4 };

export const BreakPoints = Template.bind({});
BreakPoints.args = {
  breakPoints: [
    { width: 1000, column: 6 },
    { width: 600, column: 4 },
    { width: 300, column: 2 },
  ],
};
