import { RadioProps } from '../Radio/radio.d';

interface RaioModelItem {
  label?: string;
  value?: string;
}

export interface RadioCreatorProps
  extends Pick<
    RadioProps,
    'variant' | 'name' | 'value' | 'className' | 'onChange' | 'disabled'
  > {
  defaultValue?: RadioProps['value'];
  model?: RaioModelItem[];
}
