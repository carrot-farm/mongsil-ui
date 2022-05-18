import React from 'react';
import Modal, { ModalProps } from '../Modal';
import Button from '../../Button';
// import * as Confirm from './confirm';

export interface DialogPropos
  extends Omit<ModalProps, 'bosyScroll' | 'children'> {
  className?: string;
  scrollType?: 'body' | 'modal' | 'modal-in';
  title?: React.ReactNode;
  body?: React.ReactNode;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onClose?(): void;
  onOk?(params?: any): void;
  onCancel?(): void;
}

function Dialog({
  className,
  scrollType = 'body',
  title,
  body,
  okText = '확인',
  cancelText = '취소',
  onClose,
  onOk,
  onCancel,
  ...args
}: DialogPropos): JSX.Element | null {
  const [show, setShow] = React.useState(false);

  const handleVisible = () => {
    setShow(true);
  };

  return (
    <Modal
      bosyScroll={scrollType === 'body'}
      {...args}
      onVisible={handleVisible}
    >
      <div
        className={`Mongsil-dialog-root my-10 scrolled-${scrollType} ${
          show ? 'show' : ''
        } ${className ?? ''}`}
      >
        {/* title */}
        {(title || onClose) && (
          <div className="dialog-header flex justify-between items-center">
            <span className="text-gray-600  w-11/12 text-ellipsis overflow-hidden">
              {title}
            </span>
            {onClose && (
              <Button
                variant="dent"
                className="w-9 h-9 p-0 rounded-full mr-[-10px]"
                labelClassName="flex items-center justify-center text-gray-500 "
                onClick={() => onClose()}
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </Button>
            )}
          </div>
        )}

        {/* body */}
        <div className="dialog-body break-all min-h-12 text-gray-700 font-light">
          {body}
        </div>

        {/* footer */}
        <div className="dialog-footer flex justify-between items-center bg-base z-10">
          <div></div>
          <div className="space-x-5">
            {onCancel && (
              <Button
                variant="dent"
                className="mr-[-12px] text-gray-500 text-sm font-light"
                onClick={() => onCancel()}
              >
                {cancelText}
              </Button>
            )}
            {onOk && (
              <Button
                variant="dent"
                className="mr-[-12px] text-primary text-sm font-normal"
                onClick={() => onOk()}
              >
                {okText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}

// Dialog.confirm = Confirm.confirm;
// Dialog.alert = Confirm.alert;

export default Dialog;
