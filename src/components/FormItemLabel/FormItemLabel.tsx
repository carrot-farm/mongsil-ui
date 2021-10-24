import * as React from 'react';

interface FormItemLabelProps {
  label?: string;
  required?: boolean;
}

function FormItemLabel({ label, required }: FormItemLabelProps): JSX.Element {
  return (
    <div className={`Mongsil-form_item-label `}>
      <span>{label}</span>
      {required === true && <sup className="text-error font-bold ml-1">*</sup>}
    </div>
  );
}

export default React.memo(FormItemLabel);
