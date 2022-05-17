import * as React from 'react';

import DromdownView, { DropdownViewProps } from './DropdownView';
import DropdownItem from './DropdownItemView';

export interface DropdownProps<T> {
  position?: DropdownViewProps['position'];
  /** `false` 일 경우 스타일 비활성화 */
  styled?: boolean;
  data: T[];
  rowKey?: ((item: T) => React.Key) | string;
  /** 토글 버튼 */
  button?: DropdownViewProps['button'];
  renderItem: (item: T, index: number) => React.ReactNode;
  onClick?: (item: T, index: number) => void;
}

function Dropdown<T>({
  styled,
  data = [],
  rowKey,
  button = 'button',
  renderItem,
  onClick,
  ...args
}: DropdownProps<T>): JSX.Element {
  const [visible, setVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const getRowKey = (item: T, index: number) => {
    let key;
    if (typeof rowKey === 'function') {
      key = rowKey(item);
    } else if (typeof rowKey === 'string') {
      key = (item as Record<string, any>)[rowKey] as React.Key;
    } else {
      key = `Mongsil-dropdown-item-${index}`;
    }
    return key;
  };

  const handleVisibleClick = () => {
    setVisible(true);
  };

  const handleItemClick = (item: T, index: number) => {
    if (typeof onClick === 'function') {
      onClick(item, index);
    }
    setVisible(false);
    setSelectedIndex(index);
  };

  return (
    <DromdownView
      styled={styled}
      visible={visible}
      button={button}
      onClick={handleVisibleClick}
      {...args}
    >
      {data.map((item, index) => (
        <DropdownItem
          selected={selectedIndex === index}
          key={getRowKey(item, index)}
          onClick={() => handleItemClick(item, index)}
        >
          {renderItem && renderItem(item, index)}
        </DropdownItem>
      ))}
    </DromdownView>
  );
}

Dropdown.displayName = 'Dropdown';
Dropdown.Item = DropdownItem;

export default Dropdown;
