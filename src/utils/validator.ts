import {
  Values,
  ValueTypes,
  RulesItems,
  ValidationResult,
  ValidateFailedModel,
  FormModel,
  Pass,
  PassOptions,
} from '../types/components';

export const validate = <T extends RulesItems>(
  rules: T,
  value: ValueTypes,
): ValidationResult => {
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

    if (
      pass.route(_rule, value, options as PassOptions[keyof PassOptions]) ===
      false
    ) {
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
const pass: Pass = {
  required: (value) => (Array.isArray(value) ? value.length > 0 : !!value),
  length: (value, [min, max] = [1, undefined]) => {
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
    }
    return false;
  },
  min: (value, [min]) => Number(value) >= min,
  max: (value, [max]) => Number(value) <= max,
  route(rule, value, options) {
    switch (rule) {
      case 'required':
        return pass.required(value);
      case 'length':
        return pass.length(value, options as PassOptions['length']);
      case 'min':
        return pass.min(value, options as PassOptions['min']);
      case 'max':
        return pass.min(value, options as PassOptions['max']);
      default:
        throw new Error('invalid rule: ');
    }
  },
};
