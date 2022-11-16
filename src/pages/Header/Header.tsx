import React, { useState } from 'react';
import { Box, Stack, Button, Link } from '@mui/material';
import { WalletConnectButton } from '../../components/WalletConnectButton/WalletConnectButton';
import BedRockLogo from '../../assets/images/BedRockLogo.svg';
import styles from './Header.module.css';
import { scrollMoveTo } from '../../utils';

export function Header() {
  return (
    <Stack className={styles.root} direction='row'>
      <Link href={'/'}>
        <img src={BedRockLogo} />
      </Link>
      <Box className={styles.rightGroup}>
        <Box className={styles.buttonGroup}>
          <Button className={styles.shortButton} color="secondary" onClick={() => scrollMoveTo('section-protect')}>
            Protect
          </Button>
          <Button className={styles.shortButton} color="secondary" onClick={() => scrollMoveTo('section-invest')}>
            Invest
          </Button>
          <Button className={styles.shortButton} color="secondary" onClick={() => scrollMoveTo('section-faq')}>
            FAQ
          </Button>
        </Box>
        <WalletConnectButton />
      </Box>
    </Stack>
  );
}
