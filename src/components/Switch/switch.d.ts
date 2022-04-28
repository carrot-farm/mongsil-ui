import { InputChange } from '../../types/components';

export interface SwitchProps {
  /** 클래스명 */
  className?: string;
  /** 스위치 유형 */
  variant?: 'dent' | 'emboss';
  /** name 속성 */
  name?: string;
  /** true일 경우 체크 */
  checked?: boolean;
  /** true일 경우 기본값으로 체크 */
  defaultChecked?: boolean;
  /** true일 경우 비활성화 */
  disabled?: boolean;
  /** 변경시 이벤트 핸들러 */
  onChange?: InputChange;
}
