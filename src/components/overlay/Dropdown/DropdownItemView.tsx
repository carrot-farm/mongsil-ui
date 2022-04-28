import * as React from 'react';

export interface ItemProps {
  className?: string;
  selected?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

function Item({
  selected,
  children,
  className,
  onClick,
}: ItemProps): JSX.Element {
  return (
    <li
      className={`Mongsil-dropdown-item ${className ?? ''} ${
        selected ? 'selected' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

export default Item;
