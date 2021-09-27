import * as React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps): JSX.Element {
  return <button>{children}</button>;
}

export default Button;
