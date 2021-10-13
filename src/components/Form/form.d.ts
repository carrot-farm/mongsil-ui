import React, { FormHTMLAttributes, HTMLAttributes } from 'react';

import { ValueTypes } from '../../types/components';

/** form의 기본 속성 타입 */
type FormAttributeTypes = HTMLAttributes<HTMLFormElement>;

/** <Form /> 컴포넌트의 props */
export interface FormProps extends FormAttributeTypes {
  /** components */
  children?: React.ReactNode;
  /** submit event */
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
