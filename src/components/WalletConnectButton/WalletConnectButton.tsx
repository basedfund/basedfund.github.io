import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import styles from './WalletConnectButton.module.css';

export function WalletConnectButton() {
  return (
    <Button variant="contained" color="primary" className={styles.root}>
      Connect your wallet
    </Button>
  );
}
