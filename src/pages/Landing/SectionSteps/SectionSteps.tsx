import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { StepCard } from './StepCards';
import SvgArrow2 from '../../../assets/images/arrow2.svg';
import SvgArrow3 from '../../../assets/images/arrow3.svg';
import SvgCurve2 from '../../../assets/images/curve2.svg';
import { STEP_CARD_CONTEXTS } from './context';
import styles from './SectionSteps.module.css';

export function SectionSteps() {
  return (
    <Box className={styles.root}>
      <Box className={styles.header}>
        <Typography variant='h2' color='text.primary'>
          How it works
        </Typography>
        <img className={styles.headerCurve} src={SvgCurve2} />
      </Box>
      <Stack className={styles.container} direction='row' spacing='22px'>
        <StepCard {...STEP_CARD_CONTEXTS[0]} />
        <Box className={styles.arrowContainer}>
          <img className={styles.arrow1} src={SvgArrow2} />
        </Box>
        <StepCard {...STEP_CARD_CONTEXTS[1]} />
        <Box className={styles.arrowContainer}>
          <img className={styles.arrow2} src={SvgArrow3} />
        </Box>
        <StepCard {...STEP_CARD_CONTEXTS[2]} />
      </Stack>

      <Stack className={styles.containerMobile}>
        <StepCard {...STEP_CARD_CONTEXTS[0]} />
        <StepCard {...STEP_CARD_CONTEXTS[1]} />
        <StepCard {...STEP_CARD_CONTEXTS[2]} />
      </Stack>
    </Box>
  );
}
