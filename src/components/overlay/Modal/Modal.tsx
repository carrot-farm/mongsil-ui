import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  bosyScroll?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
  onVisible(ref: React.MutableRefObject<HTMLElement | undefined>): void;
  onHidden(ref: React.MutableRefObject<HTMLElement | undefined>): void;
}

function Modal({
  bosyScroll = true,
  visible = false,
  children,
  onVisible,
  onHidden,
}: ModalProps): JSX.Element | null {
  const ref = useRef<HTMLElement>();
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);

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
    };
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }
    if (visible) {
      onVisible(ref);
      document.body.classList.add('overflow-hidden');
    } else {
      onHidden(ref);
    }
    setShow(!!visible);
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMounted, visible, onVisible, onHidden]);

  if (ref.current && visible === true && isMounted === true) {
    return createPortal(
      <div className="Mongsil-modal">
        <div className={`Mongsil-modal-backdrop ${show ? 'show' : ''}`} />
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
