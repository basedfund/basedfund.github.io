import React, { useEffect, useState } from 'react';
import { Box, Stack, Button, Link } from '@mui/material';
import { WalletConnectButton } from '../../components/WalletConnectButton/WalletConnectButton';
import BedRockLogo from '../../assets/images/BedRockLogo.svg';
import styles from './Header.module.css';
import { scrollMoveTo } from '../../utils';

export function Header() {
  const [sectionTo, setSectionTo] = useState('');
  const goToSection = (section: string) => {
    if (window.location.hash !== '') {
      setSectionTo(section);
      window.location.hash = '';
    }
    else {
      scrollMoveTo(section);
    }
  }

  useEffect(() => {
    if (sectionTo && sectionTo.length > 0) {
      setSectionTo('');
      scrollMoveTo(sectionTo);
    }
  }, [sectionTo]);

  return (
    <Stack className={styles.root} direction='row'>
      <Box className={styles.leftGroup}>
        <Link href={'/'}>
          <img className={styles.logo} src={BedRockLogo} />
        </Link>
      </Box>
      <Box className={styles.rightGroup}>
        <Box className={styles.buttonGroup}>
          <Button className={styles.shortButton} color="secondary" onClick={() => goToSection('section-whychoose')}>
            Protect
          </Button>
          <Link href={'/#/about'} underline='none'>
            <Button className={styles.shortButton} color="secondary">
              About
            </Button>
          </Link>
          <Button className={styles.shortButton} color="secondary" onClick={() => goToSection('section-faq')}>
            FAQ
          </Button>
        </Box>
        <WalletConnectButton />
      </Box>
    </Stack>
  );
}
