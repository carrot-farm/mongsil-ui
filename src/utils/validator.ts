import {
  Values,
  ValueTypes,
  RuleType,
  Rules,
  RuleOptions,
  ValidationResult,
  ValidateFailedModel,
  FormModel,
} from '../types/components';

export const validate = (rules: Rules, value: ValueTypes): ValidationResult => {
  const result: ValidationResult = {
    pass: true,
    message: undefined,
  };

  // # 검사
  rules.forEach(({ rule, message }) => {
    if (result.pass === false) {
      return;
    }

    const [_rule, ...options] = rule;

    if (pass.route(_rule, value, options) === false) {
      result.pass = false;
      result.message = message;
    }
    // console.log('> pass: ', checked);
  });

  return result;
};

/** model전체를 검사한다 */
export const validateModel = (
  model: FormModel,
  values: Values,
): ValidateFailedModel[] => {
  const result: ValidateFailedModel[] = [];

  model.forEach((a) => {
    const newRules = a.rules ? [...a.rules] : [];
    const curValue = values[a.name || ''];

    if (a.required === true) {
      newRules.push({ rule: ['required'], message: '' });
    }
    const { pass, message } = validate(newRules, curValue);

    if (pass === false) {
      result.push({
        ...a,
        error: {
          pass,
          message,
        },
      });
    }
  });

  return result;
};

/** `true`리턴 시 통과, false 리턴 시 실패 */
const pass = {
  required: (value: ValueTypes) =>
    Array.isArray(value) ? value.length > 0 : !!value,
  length: (
    value: ValueTypes,
    [min, max]: [min?: number, max?: number] = [],
  ) => {
    if (!min) {
      throw new Error(`not defined min: ${min ? min : ''}`);
    }

    // console.log('> length: ', value, value.length, min, max);
    if (typeof value === 'string' || Array.isArray(value)) {
      if (min) {
        if (value.length >= min) {
          if (max) {
            return value.length <= max;
          }
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  },
  min: (value: ValueTypes, [min]: [min: number]) => Number(value) >= min,
  max: (value: ValueTypes, [max]: [max: number]) => Number(value) <= max,
  route(rule: RuleType, value: ValueTypes, options?: RuleOptions): boolean {
    return this[rule](value, options as any);
  },
};

// export const validateAll = (rules: Rules, values: Values) => {};
