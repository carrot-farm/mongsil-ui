import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render } from '@testing-library/react';

import Checkbox, { CheckboxProps } from '../../components/Checkbox';

describe('<Checkbox />', () => {
  it('기본 요소 랜더링 확인', () => {
    const { Root, Input, Checker, Label } = renderCheckbox();

    expect(Root()).toBeInTheDocument();
    expect(Input()).toBeInTheDocument();
    expect(Input()?.checked).toEqual(false);
    expect(Checker()).toBeInTheDocument();
    expect(Label()).not.toBeInTheDocument();
  });

  it('라벨 랜더링 확인', () => {
    const label = 'label-test';
    const { Label } = renderCheckbox({ label });

    expect(Label()).toBeInTheDocument();
    expect(Label()).toHaveTextContent(label);
  });

  it('체킹 확인', () => {
    const name = 'checkbox-name';
    const { Root, Input, click, onClick, onChange } = renderCheckbox({ name });

    click();

    expect(onClick).toHaveBeenCalledWith(true, name);
    expect(onChange).toHaveBeenCalledWith(true, name);
    expect(Root()).toHaveClass('checked');
    expect(Input()?.checked).toEqual(true);
  });

  it('체크 해제 확인', () => {
    const name = 'checkbox-name';
    const { Root, Input, click, onClick, onChange } = renderCheckbox({
      name,
      checked: true,
    });

    expect(Input()?.checked).toEqual(true);

    click();

    expect(onClick).toHaveBeenCalledWith(false, name);
    expect(onChange).toHaveBeenCalledWith(false, name);
    expect(Root()).not.toHaveClass('checked');
    expect(Input()?.checked).toEqual(false);
  });
});

/**
 * 헬퍼
 */
function renderCheckbox(props?: Partial<CheckboxProps>) {
  const onClick = jest.fn();
  const onChange = jest.fn();

  const { container } = render(
    <Checkbox onClick={onClick} onChange={onChange} {...props} />,
  );

  const Root = () => container.querySelector('.Mongsil-checkbox-root');
  const Input = () => container.querySelector('input');
  const Checker = () => container.querySelector('.Mongsil-checkbox-checker');
  const Label = () => container.querySelector('label');

  const click = () => userEvent.click(Root() as Element);

  return {
    Root,
    Input,
    Checker,
    Label,
    click,
    onChange,
    onClick,
  };
}
