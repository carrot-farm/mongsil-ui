/** ===== form 요소의 속성 ===== */
export type StateBind = 'none' | 'stateOnly' | 'both';
export type ValueTypes = string | string[] | boolean | number | undefined;
export type Values = Record<string, ValueTypes>;
export type InputChange = (
  value?: ValueTypes,
  name?: string,
) => boolean | undefined;
export type Direction = 'x' | 'y';

/** ===== rule  ===== */
export interface RulesObj {
  required: [ruleName: 'required'];
  length: [ruleName: 'length', minLength: number, maxLength?: number];
  min: [ruleName: 'min', min: number];
  max: [ruleName: 'max', max: number];
}
export type RuleNames = keyof RulesObj;
export type RuleValues = RulesObj[keyof RulesObj];
export interface RulesItem {
  rule: RuleValues;
  message?: string;
}
export type RulesItems = RulesItem[];
export interface Pass {
  required(value: ValueTypes): boolean;
  length(value: ValueTypes, options: PassOptions['length']): boolean;
  min(value: ValueTypes, options: PassOptions['min']): boolean;
  max(value: ValueTypes, options: PassOptions['max']): boolean;
  route<T extends RuleNames>(
    rule: T,
    value: ValueTypes,
    options: PassOptions[T],
  ): boolean;
}
export interface PassOptions {
  required: undefined;
  length: [RulesObj['length'][1], RulesObj['length'][2]];
  min: [RulesObj['min'][1]];
  max: [RulesObj['max'][1]];
}

export type MessageFn = (validateFailed: ValidateFailed) => string;
interface ValidationResult {
  /** true일 경우 유효성 검증 통과 */
  pass: boolean;
  /** 에러 메시지 */
  message?: string;
}
/** 유효성 검사 실패시 반환 객체 */
export interface ValidateFailed {
  value: ValueTypes;
  rule: RuleNames;
}
export interface ValidateFailedModel extends FormModelItem {
  error: {
    pass: boolean;
    message: null | string | undefined;
  };
}

/** ===== errors ===== */
export type ErrorType = string | null | undefined;
export type Errors = Record<string, ErrorType>;

/** ===== form scheme 객체 ===== */
export interface FormModelItem {
  /** 폼요소의 아이디 */
  id: string;
  /** FormItem의 className 속성 */
  className?: string;
  /** 폼 요소의 name 속성 */
  name?: string;
  /** 레이블 */
  label?: string;
  /** 헬퍼 텍스트 */
  helper?: string;
  /** value의 연결 형식  */
  stateBind?: StateBind;
  /** 라벨의 x or y 정렬 */
  direction: Direction;
  /** true 일 경우 필수값 */
  required?: boolean;
  /** true 일 경우 비활성화 */
  disabled?: boolean;
  /** validation rules */
  rules?: RulesItems;
}

export type FormModel = FormModelItem[];

export interface FormScheme {
  /** 모델의 id값을 key로 가지고 index를 value로 가지는 객체 */
  idMap: Record<string, number>;
  /** 모델의 name을 key로 가지고 index를 value로 가지는 객체 */
  nameMap: Record<string, number>;
  /** form model */
  model: FormModel;
}

/** `rem` 을 기준으로 한 단위 */
export type TRemUnit =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

export type TPrefixRemUnit<T extends string> = `${T}${TRemUnit}`;
