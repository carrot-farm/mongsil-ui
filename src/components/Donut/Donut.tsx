import * as React from 'react';
import { useMemo } from 'react';

interface DonutProps {
  /** 도형의 width, height */
  width: number;
  /** stroke의 넓이 */
  strokeWidth: number;
  /** 퍼센트 */
  percent: number;
  /** 라인의의 끝부분 모양 */
  lineCap: React.SVGAttributes<SVGCircleElement>['strokeLinecap'];
  /** border의 두께 */
  borderThikness: number;
  /** true일 경우 내부 그림자를 생성  */
  innerShadow: boolean;
  /** true일 경우 내부 생상을 애니메이션 한다  */
  animateColor: boolean;
  /** 색상 */
  colors: React.CSSProperties['backgroundColor'][];
  /** 정의시 내부 랜더링 */
  renderInner: (
    percent: DonutProps['percent'],
    colors: DonutProps['colors'],
  ) => React.ReactNode;
}

export default function Donut({
  width = 150,
  strokeWidth = 20,
  percent = 65,
  lineCap = 'round',
  borderThikness = 3,
  innerShadow = true,
  animateColor = true,
  colors = ['#42abff', '#ff4f8b', '#ffeb3b'],
  renderInner,
}: Partial<DonutProps>): JSX.Element {
  /** styles */
  const style = useMemo(() => {
    const innerCirclePadding = 0;
    const innerCircleWidth = width - (strokeWidth * 2 + innerCirclePadding);
    const innerCirclePosition = innerCirclePadding / 2;
    const _width = width + borderThikness * 2;

    return {
      root: {
        width: _width,
        height: _width,
        border: innerShadow
          ? `${borderThikness}px solid hsl(var(--color-base-deg) 22% 98%)`
          : 'none',
      },
      svg: {
        width,
        height: width,
      },
      innerCircle: {
        width: innerCircleWidth,
        height: innerCircleWidth,
        top: strokeWidth + innerCirclePosition,
        left: strokeWidth + innerCirclePosition,
        padding: 10,
        border:
          innerShadow && borderThikness
            ? `${borderThikness}px solid hsl(var(--color-base-deg) 22% 92%)`
            : 'none',
        boxShadow: innerShadow
          ? `inset 10px 10px 20px rgba(0, 0, 0, 0.15),
        inset -5px -5px 15px rgba(255, 255, 255, 1)`
          : 'none',
      },
    };
  }, [innerShadow, width, strokeWidth, borderThikness]);

  /** 외부 원의 계산 값 */
  const circleCalc = useMemo(() => {
    const radius = width / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - percent / 100);

    return {
      radius,
      circumference,
      dashOffset,
    };
  }, [width, strokeWidth, percent]);

  /** 애니메이션 컬러의 값 */
  const colorValues = useMemo(() => {
    const newColorValues: DonutProps['colors'] = [];

    colors.forEach((a, i) => {
      const frontColors = colors.slice(i);
      const endColors = colors.slice(0, i);
      newColorValues.push([...frontColors, ...endColors, a].join(';'));
    });

    return newColorValues;
  }, [colors]);

  return (
    <>
      <div
        className="relative rounded-full emboss-500 flex items-center justify-center bg-base"
        style={style.root}
      >
        <svg className="relative -rotate-90" style={style.svg}>
          <rect
            id="suf"
            width={width}
            height={width}
            x="0"
            y="0"
            fill="url(#gradient)"
            mask="url(#mask)"
          ></rect>
          <defs>
            <linearGradient id="gradient">
              {colors.map((a, i) => (
                <React.Fragment key={`Mongsil-circle__progress-${a ?? ''}-i`}>
                  <stop stopColor={a} offset={`${(100 / colors.length) * i}%`}>
                    {animateColor === true && (
                      <animate
                        attributeName="stop-color"
                        values={colorValues[i]}
                        repeatCount="indefinite"
                        dur="3s"
                      />
                    )}
                  </stop>
                </React.Fragment>
              ))}
            </linearGradient>
            <mask id="mask">
              <circle
                cx={width / 2}
                cy={width / 2}
                r={circleCalc.radius}
                width={width}
                height={width}
                fill="none"
                stroke="#fff"
                strokeWidth={strokeWidth}
                strokeDasharray={circleCalc.circumference}
                strokeDashoffset={circleCalc.dashOffset}
                strokeLinecap={lineCap}
              ></circle>
            </mask>
          </defs>
        </svg>
        <div
          className="rounded-full absolute flex items-center justify-center bg-base overflow-hidden"
          style={style.innerCircle}
        >
          {typeof renderInner === 'function' ? (
            renderInner(percent, colors)
          ) : (
            <span className="text-3xl font-bold text-gray-700 ">{`${percent}%`}</span>
          )}
        </div>
      </div>
    </>
  );
}
