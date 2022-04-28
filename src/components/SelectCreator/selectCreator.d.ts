import { SelectProps, OptionProps } from '../Select';

/** 모델의 아이템 */
type SelectCreatorModelItem = Pick<OptionProps, 'label' | 'value'>;

export interface SelectCreatorProps extends Omit<SelectProps, 'children'> {
  /** 모델 객체 */
  model: SelectCreatorModelItem[];
}
