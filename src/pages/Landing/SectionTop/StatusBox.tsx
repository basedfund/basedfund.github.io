import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './SectionTop.module.css';

type PlatformInfoBoxProps = {
  value: string,
  suffix: string
};

export function StatusBox({ value, suffix }: PlatformInfoBoxProps) {
  return (
    <Box className={styles.statusBox}>
      <Typography className={styles.statusValue} variant='h5' color='text.primary'>
        {value}
      </Typography>
      <Typography className={styles.statusName} variant='h6' color='secondary'>
        {suffix}
      </Typography>
    </Box>
  );
}
