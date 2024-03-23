import { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

import { SVG_MIDDLE_ROUNDS_POSITION } from '@/components/pages/InstitutionsPage/AnimatedChart/helper';

export const ChartAnimatedLine = ({
  path,
  length,
  timing,
  lineColor,
  setPlayAnimation,
  isShowMiddleRounds,
  setIsShowMiddleRounds,
}) => {
  const spring = useSpring({
    config: { duration: timing },
    from: { value: length },
    to: { value: 0 },
    onRest: (e) => {
      setPlayAnimation(false);
    },
  });

  useEffect(() => {
    setPlayAnimation(true);
  }, []);

  return (
    <>
      <animated.path
        fill="none"
        stroke={lineColor}
        strokeWidth="2"
        strokeDashoffset={spring.value.interpolate((val) => `${val}px`) || '0px'}
        strokeDasharray={length}
        d={path}
        style={{ willChange: 'stroke-dashoffset', transform: 'translate3d(0, 0, 0)' }}
      />
      <animated.path
        fill="none"
        stroke={lineColor}
        strokeWidth="10"
        strokeDashoffset={spring.value.interpolate((val) => {
          if (setIsShowMiddleRounds && val <= SVG_MIDDLE_ROUNDS_POSITION && !isShowMiddleRounds) {
            setIsShowMiddleRounds(true);
          }

          return `${val}px` || '0px';
        })}
        strokeLinecap="round"
        strokeDasharray={`0 ${length}`}
        d={path}
        style={{ willChange: 'stroke-dashoffset', transform: 'translate3d(0, 0, 0)' }}
      />
    </>
  );
};
