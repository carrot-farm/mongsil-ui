import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'overlay/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const Some = () => {
  return (
    <div>
      a<br />
      a<br />
      a<br />
      a<br />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  visible: false,
  children: <Some />,
};
