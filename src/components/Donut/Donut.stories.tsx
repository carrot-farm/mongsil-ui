import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Donut from './Donut';

export default {
  title: 'component/Donut',
  component: Donut,
  args: {
    width: 150,
    strokeWidth: 20,
    percent: 65,
    lineCap: 'round',
    borderThikness: 3,
    innerShadow: true,
    animateColor: true,
    colors: ['#42abff', '#ff4f8b', '#ffeb3b'],
  },
  argTypes: {
    percent: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof Donut>;

const Template: ComponentStory<typeof Donut> = (args) => <Donut {...args} />;

export const Default = Template.bind({});
Default.args = {};
