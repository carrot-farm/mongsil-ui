import * as React from 'react';

export interface DropdownViewProps {
  visible?: boolean;
  styled?: boolean;
  /** 버튼 엘리먼트 */
  button: React.ReactNode;
  /** class */
  className: string;
  /** 드롭다운 박스의 포지션 */
  position: 'top' | 'right' | 'left' | 'bottom';
  /** false일 경우 드롭다운이 버튼을 덮지 않는다 */
  positionButtonWrap: boolean;
  /** 내부 랜더링 */
  children: React.ReactNode;
  /** 라벨 클릭 */
  onClick: (e: React.MouseEvent<HTMLLabelElement>) => void;
}

const DropdownView = React.forwardRef<
  HTMLDivElement,
  Partial<DropdownViewProps>
>(
  (
    {
      button,
      className = '',
      position,
      positionButtonWrap = true,
      styled = true,
      visible = false,
      children,
      onClick,
      ...args
    },
    ref,
  ) => {
    return (
      <>
        <input type="hidden" className="dropdown-hidden" />
        <div
          className={`dropdown ${
            position === 'left'
              ? 'dropdown-left'
              : position === 'right'
              ? 'dropdown-right'
              : position === 'top'
              ? 'dropdown-top'
              : 'dropdown-bottom'
          } ${className} ${
            positionButtonWrap === true ? 'position-button-wrap' : ''
          }`}
          ref={ref}
          {...args}
        >
          <label tabIndex={0} className="btn m-1" onClick={onClick}>
            {button}
          </label>

          <ul
            tabIndex={0}
            className={`dropdown-content menu p-2 w-52 ${
              styled === true ? 'styled' : ''
            } ${visible === true ? 'visible' : ''}`}
          >
            {children}
          </ul>
        </div>
      </>
    );
  },
);

export default DropdownView;
