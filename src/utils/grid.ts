interface IFunc {
  repeat: (count: string, str: string) => string;
  route: (name: string, params?: string[]) => string;
}

/**
 * 문자열을 grid areas에서 사용가능한 형태로 변형한다
 */
export const areasConvert = (areas: string): string => {
  const parse = (arr: string[], i: number, acc: string): string => {
    if (i < arr.length) {
      const cur = arr[i].trim();
      const matched = cur.match(matchReg);

      // # 지정된 형식의 row가 아닐경우
      if (!matched) {
        return parse(arr, i + 1, acc);
      }

      // # row 처리
      const result = matched.map((a) => {
        const r = funcReg.exec(a);

        // # 함수일 경우 처리
        if (r) {
          const name = r[0].slice(0, r[0].indexOf('('));
          const params = r[2].replace(/[()'"\s]/g, '').split(',');

          return func.route(name, params);
        }
        return a;
      });

      return parse(
        arr,
        i + 1,
        acc + (i > 0 ? '\n' : '') + `'${result.join(' ')}'`,
      );
    } else {
      // console.log('> done: \n', acc);
      return acc;
    }
  };

  const matchReg = /([0-9a-zA-Z_.]+(\(.*\))?)/g;
  const funcReg = /([0-9a-zA-Z_]+(\(.*\)))/;

  const func: IFunc = {
    repeat: (count, str) => {
      const _count = Number(count);
      let acc = '';
      for (let i = 0; i < _count; i++) {
        acc += i > 0 ? ' ' + str : str;
      }
      return acc;
    },
    route(name, params) {
      if (name === 'repeat' && params && params.length > 0) {
        return this.repeat(params[0], params[1]);
      }

      return '';
    },
  };

  return parse(areas.trim()?.split('\n') ?? [], 0, '');
};
