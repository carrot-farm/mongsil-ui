import * as React from 'react';

import { TRemUnit } from '../../types/components';
import { unitToRem } from '../../utils/style';
import { areasConvert } from '../../utils/grid';

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
  // console.log('> ', areasConvert(areas));
  return (
    <div
      className={`Mongsil-layout-root ${className ?? ''} `}
      style={{
        gridTemplateAreas: areas ? areasConvert(areas) : '',
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        columnGap: unitToRem(gapX ?? gap ?? 0),
        rowGap: unitToRem(gapY ?? gap ?? 0),
      }}
      {...args}
    >
      {children}
    </div>
  );
}

export default Layout;
