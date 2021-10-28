import { InputChange } from '../../types/components';
import { FormProps } from '../Form/form.d';
import { FormItemProps } from '../FormItem/formItem.d';
import { InputProps } from '../Input/input.d';
import { SelectCreatorProps } from '../SelectCreator/selectCreator.d';
import { CheckboxCreatorProps } from '../CheckboxCreator/checkboxCreator.d';
import { RadioCreatorProps } from '../RadioCreator/radioCreator.d';
import { SwitchProps } from '../Switch/switch.d';
import { ButtonProps } from '../Button/button.d';

export interface FormCreatorProps extends Omit<FormProps, 'children'> {
  model?: FormCreatorModel[];
  onChange?: InputChange;
}

interface FormCreatorModel extends FormItemProps, ButtonProps {
  component: Component;
  props?: any;
  // props?: InputProps | SelectCreatorProps | CheckboxCreatorProps;
  // props?:
  //   | InputProps
  //   | SelectCreatorProps
  //   | CheckboxCreatorProps
  //   | RadioCreatorProps
  //   | SwitchProps;
}

type Component =
  | 'input'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'button';
