import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';

import { ButtonProps } from './button.d';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, disabled, children, ...args }, ref) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const [isAnimationEnd, setIsAnimationEnd] = useState<boolean>(true);
    const [ing, setIng] = useState<boolean>(false);

    /** 눌렀을 경우 */
    const pressed = useCallback(() => {
      if (disabled === true) {
        return;
      }

      setIsPressed(true);
      setIsAnimationEnd(false);
      setIng(true);
    }, [disabled]);

    /** 뗏을 경우 */
    const unPressed = useCallback(() => {
      if (disabled === true) {
        return;
      }

      setIsPressed(false);

      /** 꼬여서 안나올 경우를 대비한 코드.(나중에 제대로 로직을 수정하자) */
      if (timerFunc) {
        clearTimeout(timerFunc);
      }

      timerFunc = setTimeout(() => {
        setIng(false);
      }, 200);
    }, [disabled]);

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
        } ${disabled === true ? 'disabled' : ''} ${className ?? ''}`}
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

Button.displayName = 'Button';

export default Button;
