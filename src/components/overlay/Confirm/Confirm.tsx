import * as React from 'react';
import Dialog, { DialogPropos } from '../Dialog';

export interface ConfirmProps
  extends Pick<
    DialogPropos,
    'title' | 'body' | 'visible' | 'onOk' | 'onClose'
  > {}

function Confirm({
  title,
  body,
  visible,
  onOk,
  onClose = () => {},
}: ConfirmProps) {
  return (
    <Dialog
      title={title}
      body={body}
      visible={visible}
      onOk={onOk}
      onCancel={onClose}
    />
  );
}

export default Confirm;
