import * as React from 'react';

interface FormItemLabelProps {
  label?: string;
}

function FormItemLabel({ label }: FormItemLabelProps): JSX.Element {
  return (
    <div className={`Mongsil-form_item-label `}>
      <span>{label}</span>
    </div>
  );
}

export default React.memo(FormItemLabel);
