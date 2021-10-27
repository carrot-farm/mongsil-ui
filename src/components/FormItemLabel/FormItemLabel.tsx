import * as React from 'react';

interface FormItemLabelProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
}

function FormItemLabel({
  label,
  required,
  disabled,
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
