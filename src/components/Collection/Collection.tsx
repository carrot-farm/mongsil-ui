import * as React from 'react';
import { forwardRef } from 'react';

import {
  breakPointsStringify,
  breakPointsStringifyParam,
} from '../../utils/grid';

export interface CollectionProps
  extends React.HTMLAttributes<HTMLUListElement> {
  /** 리스트 사이의 갭 */
  gap?: React.CSSProperties['gap'];
  /** 브레이크 포인트 */
  breakPoints?: breakPointsStringifyParam[];
  /** 기본 컬럼 */
  defaultColumn?: number;
  /** style */
  style?: React.CSSProperties;
}

const Collection = forwardRef<HTMLUListElement, CollectionProps>(
  ({ gap, breakPoints, defaultColumn = 1, style, ...args }, ref) => {
    // # `ul` 태그의 스타일
    const ulStyle = React.useMemo(() => {
      const _breakPoints =
        breakPoints !== undefined
          ? breakPointsStringify(breakPoints, defaultColumn)
          : `${100 / defaultColumn}%`;

      return {
        display: 'grid',
        gap,
        gridTemplateColumns: `repeat(auto-fit, minmax(${_breakPoints}, 1fr))`,
      };
    }, [gap, breakPoints, defaultColumn]);

    return <ul style={{ ...style, ...ulStyle }} {...args} ref={ref} />;
  },
);

export default Collection;
