import { RadioProps } from '../Radio/radio.d';

interface RaioModelItem {
  label?: string;
  value?: string;
}

export interface RadioCreatorProps
  extends Pick<
    RadioProps,
    'variant' | 'name' | 'value' | 'defaultValue' | 'className' | 'onChange'
  > {
  model?: RaioModelItem[];
}
