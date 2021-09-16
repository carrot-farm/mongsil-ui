import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render } from '@testing-library/react';

import ComplexForm, { ComplexFormProps } from './ComplexForm';

describe('<ComplexForm />', () => {
  it('기본 요소 랜더링 확인', () => {
    const {
      FirstNameInput,
      LastNameInput,
      IsOver21Input,
      Heading,
      FavoriteDrinkInput,
      SubmitButton,
      CancelButton,
    } = renderComplexForm();

    // # header
    expect(Heading()).toBeInTheDocument();
    // # input
    expect(FirstNameInput()).toBeInTheDocument();
    expect(LastNameInput()).toBeInTheDocument();
    expect(IsOver21Input()).toBeInTheDocument();
    expect(FavoriteDrinkInput()).not.toBeInTheDocument();
    // # buttons
    expect(SubmitButton()).toBeInTheDocument();
    expect(CancelButton()).toBeInTheDocument();
  });

  it('21세 이상 체크 여부에 따라 좋아하는 음료 입력을 토글', async () => {
    const { clickIsOver21, FavoriteDrinkInput } = renderComplexForm();

    expect(FavoriteDrinkInput()).not.toBeInTheDocument(); // 기본 랜더링 확인
    await clickIsOver21(); // 이벤트 발생
    expect(FavoriteDrinkInput()).toBeInTheDocument(); // 변경된 내용 확인
  });

  it('버튼에 연결되어 있는 함수 확인', () => {
    const { clickCancel, onCancel } = renderComplexForm();

    clickCancel(); // 이벤트 발생
    expect(onCancel).toHaveBeenCalled(); // 함수 호출 확인
  });

  it.only('submi 후 값 확인', async () => {
    const {
      changeFirseName,
      changeLastName,
      clickIsOver21,
      changeFavoriteDrinkInput,
      clickSubmit,
      onSubmit,
    } = renderComplexForm();

    changeFirseName('Zerry');
    changeLastName('Hogan');
    await clickIsOver21();
    changeFavoriteDrinkInput('Bourbon');
    clickSubmit();

    expect(onSubmit).toHaveBeenCalledWith({
      first_name: 'Zerry',
      last_name: 'Hogan',
      is_over_21: true,
      favorite_drink: 'Bourbon',
    });
  });
});

/**
 * 선언적 테스트를 하기 위한 헬퍼
 */
function renderComplexForm(props?: Partial<ComplexFormProps>) {
  const onSubmit = jest.fn();
  const onCancel = jest.fn();

  const result = render(<ComplexForm onSubmit={onSubmit} onCancel={onCancel} {...props} />);

  // # 랜더링 요소 확인 함수 정의
  const Heading = () => result.getByText('Welcome, Zerry'); // text
  const FirstNameInput = () => result.getByLabelText('First Name'); // label
  const LastNameInput = () => result.getByLabelText('Last Name');
  const IsOver21Input = () => result.getByLabelText('Are you at least 21 years old?');
  const FavoriteDrinkInput = () => result.queryByLabelText(`What's your favorite drink?`);
  const CancelButton = () => result.getByText('Cancel');
  const SubmitButton = () => result.getByText('Submit');

  // # 이벤트 함수 정의. (이벤트 후 요소를 확인한다.)
  function changeFirseName(name: string) {
    userEvent.type(FirstNameInput(), name);
  }
  function changeLastName(name: string) {
    userEvent.type(LastNameInput(), name);
  }
  function changeFavoriteDrinkInput(name: string) {
    userEvent.type(FavoriteDrinkInput() as HTMLElement, name);
  }
  async function clickIsOver21() {
    await act(async () => {
      userEvent.click(IsOver21Input());
    });
  }
  function clickSubmit() {
    userEvent.click(SubmitButton());
  }
  function clickCancel() {
    userEvent.click(CancelButton());
  }

  return {
    result,
    onSubmit,
    onCancel,
    Heading,
    FirstNameInput,
    LastNameInput,
    IsOver21Input,
    FavoriteDrinkInput,
    CancelButton,
    SubmitButton,
    changeFirseName,
    changeLastName,
    changeFavoriteDrinkInput,
    clickIsOver21,
    clickSubmit,
    clickCancel,
  };
}
