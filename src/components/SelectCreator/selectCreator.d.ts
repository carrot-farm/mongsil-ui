import { SelectProps, OptionProps } from '../Select';

/** 모델의 아이템 */
interface SelectCreatorModelItem extends Pick<OptionProps, 'label' | 'value'> {}

export interface SelectCreatorProps extends Omit<SelectProps, 'children'> {
  model?: SelectCreatorModelItem[];
}
