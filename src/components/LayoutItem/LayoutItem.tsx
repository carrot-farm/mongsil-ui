import * as React from 'react';

export interface LayoutItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 그리드 아이템에 사용될 명칭 */
  gridArea: React.CSSProperties['gridArea'];
  /** 아이템의 수직 정렬 */
  alignSelf?: React.CSSProperties['alignSelf'];
  /** 아이템의 수평 정렬 */
  justifySelf?: React.CSSProperties['justifySelf'];
}

export default function LayoutItem({
  gridArea,
  alignSelf,
  justifySelf,
  style,
  children,
  ...args
}: LayoutItemProps): JSX.Element {
  return (
    <div style={{ ...style, gridArea, alignSelf, justifySelf }} {...args}>
      {children}
    </div>
  );
}
