import * as React from 'react';
import { useCallback, useState, useEffect, memo, forwardRef } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

import { InputChange } from '../../types/components';

export interface SelectProps {
  /** <Option /> 컴포넌트 */
  children?: React.ReactNode[];
  /** className */
  className?: string;
  /** name 속성 */
  name?: string;
  /** 값 */
  value?: string;
  /** 기본값 */
  defaultValue?: string;
  /** true 일 경우 비활성화 */
  disabled?: boolean;
  /** 변경 시 이벤트 */
  onChange?: InputChange;
}

const Select = forwardRef<HTMLSpanElement, SelectProps>(
  (
    {
      className,
      name,
      value: _value,
      defaultValue,
      children,
      disabled,
      onChange,
      ...args
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [visible, setVisible] = useState<boolean>(() => false);
    const [value, setValue] = useState<string | undefined>(() => {
      return defaultValue || _value;
    });
    const [label, setLabel] = useState<React.ReactNode>(null);

    /** visible 클릭 */
    const handleVisibleClick = useCallback(
      (event) => {
        if (disabled === true) {
          return;
        }

        setVisible((v) => {
          if (!containerRef.current) {
            return v;
          }

          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (containerRef.current.contains(event.target)) {
            return !v;
          } else {
            return false;
          }
        });
      },
      [disabled],
    );

    /** 옵션 클릭 */
    const handleOptionClick = useCallback(
      (v) => {
        // console.log('> option click : ', name, v);
        if (disabled === true) {
          return;
        }

        if (onChange && onChange(v, name) === false) {
          return;
        }

        setVisible(false);

        if (_value === undefined) {
          setValue(v);
        }
      },
      [name, disabled, _value, onChange],
    );

    /** input 요소의 값 변경  */
    const handleChange = useCallback(() => {
      // console.log(e);
    }, []);

    /** 어떤것이 선택되었는지 확인 */
    const handleSelected = useCallback((child) => {
      setLabel(child);
    }, []);

    /** 내/외부 클릭 감지 */
    useEffect(() => {
      document.addEventListener('click', handleVisibleClick);
      return () => {
        document.removeEventListener('click', handleVisibleClick);
      };
    }, [handleVisibleClick]);

    useEffect(() => {
      if (_value === undefined) {
        return;
      }

      setValue(_value);
    }, [_value]);

    return (
      <span
        className={`Mongsil-select-root ${
          disabled === true ? 'disabled' : ''
        }  ${className ? className : ''}`}
        ref={ref}
      >
        <div className="Mongsil-select-value-container" ref={containerRef}>
          <span className="Mongsil-select-value">{label}</span>
          <input
            type="hidden"
            name={name}
            value={value ?? ''}
            onChange={handleChange}
            {...args}
          />
          <button className="Mongsil-select-icon" type="button">
            {visible === true ? (
              <FaCaretUp className="text-gray-500" />
            ) : (
              <FaCaretDown className="text-gray-500" />
            )}
          </button>
        </div>

        <div className="Mongsil-select-float-container">
          <div
            className={`Mongsil-select-float-panel ${
              visible ? 'animate-visible-panel' : ''
            }`}
          >
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) {
                return child;
              }
              return React.cloneElement(child, {
                selectedValue: value,
                onClick: handleOptionClick,
                onSelected: handleSelected,
              });
            })}
          </div>
        </div>
      </span>
    );
  },
);

Select.displayName = 'Select';

export default memo(Select);
