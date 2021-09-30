import * as React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...args }, ref) => {
    const [isPressed, setIsPressed] = React.useState<boolean>(false);
    const [isAnimationEnd, setIsAnimationEnd] = React.useState<boolean>(true);
    const [ing, setIng] = React.useState<boolean>(false);

    const pressed = React.useCallback(() => {
      setIsPressed(true);
      setIsAnimationEnd(false);
      setIng(true);
    }, []);

    const unPressed = React.useCallback(() => {
      setIsPressed(false);
    }, []);

    const handleTransitionEnd = React.useCallback(() => {
      setIsAnimationEnd(true);
    }, []);

    React.useEffect(() => {
      if (ing === false) {
        return;
      }
      if (isPressed === false && isAnimationEnd === true) {
        setIng(false);
      }
    }, [isPressed, isAnimationEnd, ing]);

    return (
      <button
        className={`Mongsil-button-root ${ing ? 'pressed' : ''} ${className ?? ''}`}
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

export default Button;
