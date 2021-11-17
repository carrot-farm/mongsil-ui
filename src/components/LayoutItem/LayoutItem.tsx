import * as React from 'react';

interface LayoutItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 그리드 아이템에 사용될 명칭 */
  gridArea: React.CSSProperties['gridArea'];
}

export default function LayoutItem({
  gridArea,
  style,
  children,
  ...args
}: LayoutItemProps): JSX.Element {
  return (
    <div style={{ ...style, gridArea }} {...args}>
      {children}
    </div>
  );
}
