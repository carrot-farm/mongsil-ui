export type StateBind = 'none' | 'stateOnly' | 'both';

export type ValueTypes = string | string[] | boolean | number | undefined;

export type Values = Record<string, ValueTypes>;

export type InputChange = (value?: ValueTypes, name) => void | false;
