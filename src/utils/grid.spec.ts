import { areasConvert } from './grid';

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

export default {};
