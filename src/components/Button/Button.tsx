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

    const handleAnimationEnd = React.useCallback(() => {
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
        className={`button ${ing ? 'animate-press-300-0' : ''} ${className ?? ''}`}
        onMouseDown={pressed}
        onMouseUp={unPressed}
        onMouseLeave={unPressed}
        onTouchStart={pressed}
        onTouchEnd={unPressed}
        onAnimationEnd={handleAnimationEnd}
        {...args}
        ref={ref}
      >
        <div className={ing ? 'animate-scale-1-09' : ''}>{children}</div>
      </button>
    );
  },
);

export default Button;
