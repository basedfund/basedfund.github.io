import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import styles from './LaunchAppButton.module.css';
import { URL_APP } from '../../api';

export function LaunchAppButton() {
  const goToApp = () => {
    window.open(URL_APP, '_blank');
  }

  return (
    <Button variant="contained" color="primary" className={styles.root} onClick={goToApp}>
      Launch App
    </Button>
  );
}
