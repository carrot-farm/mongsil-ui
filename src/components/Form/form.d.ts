import React, { HTMLAttributes } from 'react';

import { Values } from '../../types/components';
import { FormRef } from '../../hooks/useForm';

/** form의 기본 속성 타입 */
type FormAttributeTypes = HTMLAttributes<HTMLFormElement>;

export interface FormProps extends FormAttributeTypes {
  /** form ref 객체 */
  form?: Ref<FormRef>;
  /** components */
  children?: React.ReactNode;
  /** submit event */
  onSubmit?: (values: Values) => void | false;
}
