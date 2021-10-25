import {
  Values,
  ValueTypes,
  RuleType,
  Rules,
  RuleOptions,
  ValidationResult,
} from '../types/components';

export const validate = (rules: Rules, value: ValueTypes) => {
  // console.log(rules);
  const result: ValidationResult = {
    pass: true,
    message: undefined,
  };

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

  // console.log(result);
  return result;
};

/** `true`리턴 시 통과, false 리턴 시 실패 */
const pass = {
  required: (value: ValueTypes) => !!value,
  length: (
    value: ValueTypes,
    [min, max]: [min?: number, max?: number] = [],
  ) => {
    if (!min) {
      throw new Error('not defined min: ' + min);
    }

    // console.log('> length: ', value, value.length, min, max);
    if (typeof value === 'string' && min && value.length >= min) {
      if (max) {
        if (value.length <= max) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
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
