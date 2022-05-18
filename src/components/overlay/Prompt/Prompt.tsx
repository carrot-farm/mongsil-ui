import * as React from 'react';
import Input from '../../Input';
import Dialog, { DialogPropos } from '../Dialog';

export interface PromptProps
  extends Pick<
    DialogPropos,
    'title' | 'body' | 'visible' | 'onOk' | 'onClose'
  > {}

function Prompt({
  title,
  body,
  visible,
  onOk,
  onClose = () => {},
}: PromptProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState('');

  const handleOk = () => {
    if (typeof onOk === 'function') {
      onOk(value);
    }
  };

  const handleInputChange = (value: string) => {
    setValue(value);
  };

  React.useEffect(() => {
    if (visible === true && ref.current) {
      ref.current.querySelector('input')?.focus();
    }
  }, [visible]);

  return (
    <Dialog
      title={title}
      body={
        <div>
          <p>{body}</p>
          <Input ref={ref} onChange={(v) => handleInputChange(v ?? '')} />
        </div>
      }
      visible={visible}
      onOk={handleOk}
      onCancel={onClose}
      onClose={onClose}
      onBackdropClick={onClose}
    />
  );
}

export default Prompt;
