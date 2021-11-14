import * as React from 'react';

type Element = Record<string, React.ReactElement>;

export interface LayoutProps {
  /** grid-template-areas 속성. 요소의 배치 정의. 백틱사용. */
  areas: React.CSSProperties['gridTemplateAreas'];
  /** grid-template-columns 속성. 요소의 넓이를 정의 */
  columns?: React.CSSProperties['gridTemplateColumns'];
  /** grid-template-rows 속성. 요소의 높이를 정의 */
  rows?: React.CSSProperties['gridTemplateRows'];
  /** tailwincss의 gap 속성 */
  gap?: string;
  /** 최상위 컴포넌트의 클래스명 */
  className?: string;
  /** 내부요소 엘리먼트 */
  elements: Element;
}

function Layout({
  areas,
  columns,
  rows,
  gap,
  className,
  elements,
  ...args
}: LayoutProps): JSX.Element {
  return (
    <div
      className={`Mongsil-layout-root ${className ?? ''} ${gap ?? ''}`}
      style={{
        gridTemplateAreas: areas,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
      }}
      {...args}
    >
      {Object.entries(elements).map(([area, el], i) => (
        <React.Fragment key={`Mongsil-layout-item-${area}_${i}`}>
          {React.cloneElement(el, { style: { gridArea: area } })}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Layout;
