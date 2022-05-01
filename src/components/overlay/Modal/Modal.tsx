import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  className?: string;
  bosyScroll?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
  onVisible?(ref: React.MutableRefObject<HTMLElement | undefined>): void;
  onHidden?(ref: React.MutableRefObject<HTMLElement | undefined>): void;
  onBackdropClick?(): void;
}

function Modal({
  className,
  bosyScroll = true,
  visible = false,
  children,
  onVisible,
  onHidden,
  onBackdropClick,
}: ModalProps): JSX.Element | null {
  const ref = useRef<HTMLElement>();
  const [isMounted, setIsMounted] = useState<boolean | null>(false);
  const [show, setShow] = useState<boolean | null>(false);

  useEffect(() => {
    setIsMounted(true);
    if (document) {
      let rootEl = document.getElementById('Mongsil-modal-root');
      if (!rootEl) {
        rootEl = document.createElement('div');
        rootEl.setAttribute('id', 'Mongsil-modal-root');
        document.body.appendChild(rootEl);
      }
      ref.current = rootEl;
    }
    return () => {
      const rootEl = document.getElementById('Mongsil-modal-root');
      if (rootEl && !rootEl?.innerHTML) {
        document.body.removeChild(rootEl);
      }
      ref.current = undefined;
      setIsMounted(null);
    };
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }
    if (visible) {
      onVisible && onVisible(ref);
      document.body.classList.add('overflow-hidden');
    } else {
      onHidden && onHidden(ref);
    }
    setTimeout(() => {
      setShow(!!visible);
    });

    return () => {
      document.body.classList.remove('overflow-hidden');
      setShow(null);
    };
  }, [isMounted, visible, onVisible, onHidden]);

  if (ref.current && visible === true && isMounted === true) {
    return createPortal(
      <div className={`Mongsil-modal ${className ?? ''}`}>
        <div
          className={`Mongsil-modal-backdrop ${show ? 'show' : ''}`}
          onClick={() => onBackdropClick && onBackdropClick()}
        />
        <div
          className={`Mongsil-modal-container ${
            bosyScroll ? 'body-scroll' : ''
          }`}
        >
          {children}
        </div>
      </div>,
      ref.current,
    );
  }

  return null;
}
export default Modal;
