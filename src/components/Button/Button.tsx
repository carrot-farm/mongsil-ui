import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';

import { ButtonProps } from './Button.d';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...args }, ref) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const [isAnimationEnd, setIsAnimationEnd] = useState<boolean>(true);
    const [ing, setIng] = useState<boolean>(false);

    const pressed = useCallback(() => {
      setIsPressed(true);
      setIsAnimationEnd(false);
      setIng(true);
    }, []);

    const unPressed = useCallback(() => {
      setIsPressed(false);

      /** 꼬여서 안나올 경우를 대비한 코드.(나중에 제대로 로직을 수정하자) */
      if (timerFunc) {
        clearTimeout(timerFunc);
      }

      timerFunc = setTimeout(() => {
        setIng(false);
      }, 200);
    }, []);

    const handleTransitionEnd = useCallback(() => {
      setIsAnimationEnd(true);
    }, []);

    useEffect(() => {
      if (ing === false) {
        return;
      }
      if (isPressed === false && isAnimationEnd === true) {
        setIng(false);
      }
    }, [isPressed, isAnimationEnd, ing]);

    return (
      <button
        className={`Mongsil-button-root ${ing ? 'pressed' : ''} ${
          variant ?? 'emboss'
        } ${className ?? ''}`}
        onMouseDown={pressed}
        onMouseUp={unPressed}
        onMouseLeave={unPressed}
        onTouchStart={pressed}
        onTouchEnd={unPressed}
        onTransitionEnd={handleTransitionEnd}
        {...args}
        ref={ref}
      >
        <div className="Mongsil-button-label">{children}</div>
      </button>
    );
  },
);

let timerFunc: ReturnType<typeof setTimeout> | undefined;

export default Button;
