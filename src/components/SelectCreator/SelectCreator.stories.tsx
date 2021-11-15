import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectCreator from './SelectCreator';
import { SelectCreatorProps } from './selectCreator.d';

export default {
  title: 'component/SelectCreator',
  component: SelectCreator,
  args: {
    defaultValue: 'a',
    model: [
      { label: 'a', value: 'a' },
      { label: 'b', value: 'b' },
      { label: 'c', value: 'c' },
    ],
  },
} as ComponentMeta<typeof SelectCreator>;

const Template: ComponentStory<typeof SelectCreator> = (
  args: SelectCreatorProps,
) => <SelectCreator {...args} />;

export const Default = Template.bind({});
