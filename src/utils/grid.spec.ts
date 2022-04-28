import { areasConvert, breakPointsStringify } from './grid';

describe('areasConvert()', () => {
  it('격자 처리', () => {
    const result = areasConvert(`
      header header aside
      body body aside
    `);

    expect(result).toEqual("'header header aside' 'body body aside'");
  });

  it('빈공간', () => {
    const result = areasConvert(`
      header . aside
      body . aside
    `);

    expect(result).toEqual("'header . aside' 'body . aside'");
  });

  it('repeat()', () => {
    const result = areasConvert(`
      repeat(2, "header") aside
      repeat(2, "body") aside
    `);

    expect(result).toEqual("'header header aside' 'body body aside'");
  });
});

describe('breakPointsStringify()', () => {
  it('1개', () => {
    const result = breakPointsStringify([{ width: 1000, column: 6 }]);

    expect(result).toEqual(
      'clamp(100% / 7 + 0.1%, (1000px - 100vw) * 1000, 100% / 2 + 0.1%)',
    );
  });
});

export default {};
