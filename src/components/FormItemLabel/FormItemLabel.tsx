import * as React from 'react';

export interface FormItemLabelProps {
  /** 레이블 */
  label?: string;
  /** true일 경우 필수 표시 */
  required?: boolean;
  /** true일 경우 필수표시 비활성화 색상으로 변경 */
  disabled?: boolean;
}

function FormItemLabel({
  label,
  required = false,
  disabled = false,
}: FormItemLabelProps): JSX.Element {
  return (
    <div
      className={`Mongsil-form_item-label ${
        disabled === true ? 'disabled' : ''
      }`}
    >
      <span>{label}</span>
      {required === true && (
        <sup
          className={`${
            disabled === true ? 'text-gray-400' : 'text-error'
          } font-bold ml-1`}
        >
          *
        </sup>
      )}
    </div>
  );
}

export default React.memo(FormItemLabel);
