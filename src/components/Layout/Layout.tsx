import * as React from 'react';

import { TRemUnit } from '../../types/components';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** grid-template-areas 속성. 요소의 배치 정의. 백틱사용. */
  areas: React.CSSProperties['gridTemplateAreas'];
  /** grid-template-columns 속성. 요소의 넓이를 정의 */
  columns?: React.CSSProperties['gridTemplateColumns'];
  /** grid-template-rows 속성. 요소의 높이를 정의 */
  rows?: React.CSSProperties['gridTemplateRows'];
  /** x, y 사이간격 */
  gap?: TRemUnit;
  /** 세로 간격. column-gap */
  gapX?: TRemUnit;
  /** 가로 간격. row-gap */
  gapY?: TRemUnit;
}

function Layout({
  areas,
  columns,
  rows,
  gap,
  gapX,
  gapY,
  className,
  children,
  ...args
}: LayoutProps): JSX.Element {
  return (
    <div
      className={`Mongsil-layout-root ${className ?? ''} ${
        gap ? `gap-${gap}` : ''
      } ${gapX ? `gap-x-${gapX}` : ''} ${gapY ? `gap-y-${gapY}` : ''} `}
      style={{
        gridTemplateAreas: areas,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
      }}
      {...args}
    >
      {children}
    </div>
  );
}

export default Layout;
