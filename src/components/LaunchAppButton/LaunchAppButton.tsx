import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import styles from './LaunchAppButton.module.css';

export function LaunchAppButton() {
  return (
    <Button variant="contained" color="primary" className={styles.root}>
      Launch App
    </Button>
  );
}
