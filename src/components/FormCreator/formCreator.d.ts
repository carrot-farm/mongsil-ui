import { InputChange } from '../../types/components';
import { FormProps } from '../Form/Form';
import { FormItemProps } from '../FormItem/formItem.d';
import { InputProps } from '../Input/input.d';
import { SelectCreatorProps } from '../SelectCreator/selectCreator.d';
import { CheckboxCreatorProps } from '../CheckboxCreator/checkboxCreator.d';
import { RadioCreatorProps } from '../RadioCreator/radioCreator.d';
import { SwitchProps } from '../Switch/switch.d';
import { ButtonProps } from '../Button';
import { LayoutProps } from '../Layout';

export interface FormCreatorProps
  extends Omit<FormProps, 'children' | 'onChange'> {
  model: FormCreatorModel[];
  layout?: Pick<
    LayoutProps,
    'areas' | 'columns' | 'rows' | 'gap' | 'gapX' | 'gapY'
  >;
  onChange?: InputChange;
}

interface FormCreatorModel extends FormItemProps, ButtonProps {
  itemId: FormItemProps['itemId'];
  component: Component;
  props?:
    | InputProps
    | SelectCreatorProps
    | CheckboxCreatorProps
    | RadioCreatorProps
    | SwitchProps;
}

type Component =
  | 'input'
  | 'textArea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'button';
