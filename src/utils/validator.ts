import { Values, ValueTypes } from '../types/components';

type RuleRequired = [required: 'required'];
type RuleLength = [length: 'length', minLength: number, maxLength?: number];
type RuleMin = [min: 'min', minNumber: number];
type RuleMax = [max: 'max', maxNumber: number];

type Rule = RuleRequired | RuleLength | RuleMin | RuleMax;

type MessageFn = (validateFailed: ValidateFailed) => string;

/** 유효성 검사 실패시 반환 객체 */
interface ValidateFailed {
  value: ValueTypes;
  rule: Rule;
}

interface RulesItem {
  rule: Rule;
  message?: string | MessageFn;
}

export type Rules = RulesItem[];

export const validate = (rules: Rules, value: ValueTypes) => {
  // console.log(rules);
  const result = {
    pass: true,
    message: '',
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

  console.log(result);
  return result;
};

/** `true`리턴 시 통과, false 리턴 시 실패 */
const pass = {
  required: (value, options) => !!value,
  length: (value, [min, max] = []) => {
    if (!min) {
      throw new Error('not defined min: ' + min);
    }

    // console.log('> length: ', value, value.length, min, max);
    if (value && min && value.length >= min) {
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
  min: (value, [min]) => Number(value) >= min,
  max: (value, [max]) => Number(value) <= max,
  route(rule, value, options) {
    return this[rule](value, options);
  },
};

// export const validateAll = (rules: Rules, values: Values) => {};
