import { useState } from 'react';

import { ChartAnimation } from '@/components/pages/InstitutionsPage/AnimatedChart/ChartAnimation';

import styles from './animatedChart.module.css';

export const AnimatedChart = () => {
  const TIMING = 2000;
  const [playAnimation, setPlayAnimation] = useState(null);
  const lineColors = ['#58B5AC', 'rgba(5, 5, 5, 0.25)'];

  return (
    <ChartAnimation
      className={styles.svgWrapper}
      lineColor={lineColors}
      timing={TIMING}
      playAnimation={playAnimation}
      setPlayAnimation={setPlayAnimation}
    />
  );
};
