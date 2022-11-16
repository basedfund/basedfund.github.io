import React from 'react';
import { Box } from '@mui/material';
import { SectionTop } from './SectionTop/SectionTop';
import { SectionSlides } from './SectionSlides/SectionSlides';
import { SectionLearn } from './SectionLearn/SectionLearn';
import { SectionAddVault } from './SectionAddVault/SectionAddVault';
import { SectionFAQ } from './SectionFAQ/SectionFAQ';
import { SectionProtect } from './SectionProtect/SectionProtect';
import { SectionSteps } from './SectionSteps/SectionSteps';
import styles from './Landing.module.css';

export function Landing() {
  return (
    <Box>
      <Box className={styles.container1}>
        <SectionTop />
        <Box className={styles.slidesContainer}>
          <SectionSlides />
        </Box>
        <SectionSteps />
      </Box>

      <Box className={styles.container2}>
        <SectionProtect />
        <SectionFAQ />
      </Box>
      <SectionAddVault />
      <SectionLearn />
    </Box>
  );
}
