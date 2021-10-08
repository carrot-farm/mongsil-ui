export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'emboss' | 'dent';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
