import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

interface SelectProps {
  children?: React.ReactNode[];
  className?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Select = React.forwardRef<HTMLSpanElement, SelectProps>(
  ({ className, name, value: _value, children, ...args }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [visible, setVisible] = useState<boolean>(() => false);
    const [value, setValue] = useState<string | undefined>(() => _value);
    const [label, setLabel] = useState<React.ReactNode>(null);
    // console.log('> ', ref);

    /** visible 클릭 */
    const handleVisibleClick = useCallback((event) => {
      setVisible((v) => {
        if (!containerRef.current) {
          return v;
        }

        if (containerRef.current.contains(event.target)) {
          return !v;
        } else {
          return false;
        }
      });
    }, []);

    /** 옵션 클릭 */
    const handleOptionClick = useCallback((v) => {
      // console.log('> option click : ', );
      setValue(v);
      setVisible(false);
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
    }, []);

    return (
      <span className={`Mongsil-select-root  ${className ? className : ''}`} ref={ref}>
        <div className="Mongsil-select-value-container" ref={containerRef}>
          <span className="Mongsil-select-value">{label}</span>
          <input type="hidden" name={name} value={value} {...args} />
          <button className="Mongsil-select-icon" type="button">
            {visible === true ? (
              <FaCaretUp className="text-gray-500" />
            ) : (
              <FaCaretDown className="text-gray-500" />
            )}
          </button>
        </div>

        <div className="Mongsil-select-float-container">
          <div className={`Mongsil-select-float-panel ${visible ? 'animate-visible-panel' : ''}`}>
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

export default Select;
