import React from 'react';
import {
  render as reactRender,
  unmount as reactUnmount,
} from 'rc-util/lib/React/render';
import Dialog, { DialogPropos } from './Dialog';

interface DialogModuleProps {
  hideCloseButton?: boolean;
  hideCancelButton?: boolean;
  hideOkButton?: boolean;
}

interface NewDialogProps extends DialogPropos {
  onOk?(params: CallbackParams): void;
}

interface CallbackParams {
  close: () => void;
}

const DialogModule = (defaultConfig: DialogModuleProps = {}) => (
  config: DialogPropos = {},
) => {
  const { hideCloseButton, hideCancelButton, hideOkButton } = defaultConfig;
  // const { ...onClose } = config;
  const container = document.createDocumentFragment();
  const newConfig: NewDialogProps = {
    visible: true,
    cancelText: hideOkButton ? '확인' : undefined,
    ...config,
  };

  newConfig.onOk =
    hideOkButton === true
      ? undefined
      : () => {
          if (typeof config.onOk === 'function') {
            config.onOk();
          }
          close();
        };
  newConfig.onClose = hideCloseButton ? undefined : () => close();
  newConfig.onCancel = hideCancelButton ? undefined : () => close();
  newConfig.onBackdropClick = () => close();

  const open = ({ ...props } = newConfig) => {
    setTimeout(() => reactRender(<Dialog {...props} />, container), 0);
  };

  const close = () => {
    return open({
      visible: false,
      onHidden: () => destroy(),
    });
  };

  const destroy = (): void => {
    void reactUnmount(container);
  };

  open(newConfig);

  return {
    update: open,
    close,
  };
};

export const confirm = DialogModule({ hideCloseButton: true });
export const alert = DialogModule({
  hideCloseButton: true,
  hideOkButton: true,
});
