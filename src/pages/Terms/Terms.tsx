import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Terms.module.css';

export function Terms() {
  return (
    <Box className={styles.root}>
      <Typography className={styles.title} variant='h2' color='text.primary'>
        Terms & Conditions
      </Typography>
      <Typography className={styles.context} variant='body1' color='text.primary'>
        (This is Terms & Conditions of BedRock protocol)
      </Typography>
    </Box>
  );
}
