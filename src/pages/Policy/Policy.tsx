import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Policy.module.css';

export function Policy() {
  return (
    <Box className={styles.root}>
      <Typography className={styles.title} variant='h2' color='text.primary'>
        Privacy Policy
      </Typography>
      <Typography className={styles.context} variant='body1' color='text.primary'>
        (This is Privacy Policy of BedRock protocol)
      </Typography>
    </Box>
  );
}
