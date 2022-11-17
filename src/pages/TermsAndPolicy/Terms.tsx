import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './TermsAndPolicy.module.css';

export function Terms() {
  return (
    <Box className={styles.root}>
      <Typography className={styles.title} variant='h2' color='text.primary'>
        Terms & Conditions
      </Typography>
      <Box className={styles.body}>
      </Box>
    </Box>
  );
}
