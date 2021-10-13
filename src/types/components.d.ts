export type StateBind = 'none' | 'stateOnly' | 'both';

export type ValueTypes = string | string[] | boolean | number | undefined;

export type InputChange = (value?: ValueTypes, name) => void | false;
