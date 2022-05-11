import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SelectCreator from './SelectCreator';
import { SelectCreatorProps } from './selectCreator';

describe('<SelectCreator />', () => {
  it('기본 렌더링 테스트', () => {
    const { Root, Value, Icon, Input, Panel, Options } = renderSelectCreator({
      name: 'test-name',
      value: 'a',
      model,
    });

    expect(Root()).toBeInTheDocument();
    expect(Value()).toBeInTheDocument();
    expect(Value()).toHaveTextContent('a');
    expect(Icon()).toBeInTheDocument();
    expect(Input()).toBeInTheDocument();
    expect(Input()).toHaveValue('a');
    expect(Input()).toHaveAttribute('name', 'test-name');
    expect(Panel()).toBeInTheDocument();
    expect(Options().length).toBe(3);
    expect(Options()[0]).toHaveTextContent('a');
    expect(Options()[1]).toHaveTextContent('b');
    expect(Options()[2]).toHaveTextContent('c');
  });

  it('value 변경', () => {
    const { changeValue, checkValue } = renderSelectCreator({
      value: 'a',
      model,
    });

    checkValue('a');
    changeValue('b');
    checkValue('b');
  });

  it('클릭 활성화 테스트', () => {
    const {
      Panel,
      SelectedOption,
      click,
      clickOption,
      checkValue,
    } = renderSelectCreator({
      defaultValue: 'b',
      model,
    });

    checkValue('b');
    click();
    expect(Panel()).toHaveClass('animate-visible-panel');
    expect(SelectedOption()).toBeInTheDocument();
    clickOption(2);
    expect(Panel()).not.toHaveClass('animate-visible-panel');
    checkValue('c');
  });
});

/** helper */
function renderSelectCreator(props?: Partial<SelectCreatorProps>) {
  const onChange = jest.fn();

  const { container, rerender } = render(
    <SelectCreator model={model} onChange={onChange} {...props} />,
  );

  // console.log('> ', container.querySelector('.Mongsil-select_creator'));
  const Root = () => container.querySelector('.Mongsil-select_creator');
  const Value = () => container.querySelector('.Mongsil-select-value');
  const Icon = () => container.querySelector('.Mongsil-select-icon');
  const Input = () => container.querySelector('input');
  const Panel = () => container.querySelector('.Mongsil-select-float-panel');
  const Options = () => container.querySelectorAll('.Mongsil-option-root');
  const SelectedOption = () =>
    container.querySelector('.Mongsil-option-root.selected');

  const click = () => userEvent.click(Icon() as any);
  const clickOption = (index: number) => userEvent.click(Options()[index]);
  // const clickOption = (index: number) => userEvent.click();

  const changeValue = (v: string) =>
    rerender(
      <SelectCreator onChange={onChange} model={model} {...props} value={v} />,
    );
  const checkValue = (v: string) => {
    expect(SelectedOption()).toHaveTextContent(v);
    expect(Value()).toHaveTextContent(v);
    expect(Input()).toHaveValue(v);
  };

  return {
    Root,
    Value,
    Icon,
    Input,
    Panel,
    Options,
    SelectedOption,
    click,
    clickOption,
    changeValue,
    checkValue,
  };
}

const model = [
  { label: 'a', value: 'a' },
  { label: 'b', value: 'b' },
  { label: 'c', value: 'c' },
];
