import React, { useEffect } from 'react';
import { Box, Stack, Button, Link } from '@mui/material';
import { WalletConnectButton } from '../../components/WalletConnectButton/WalletConnectButton';
import BedRockLogo from '../../assets/images/BedRockLogo.svg';
import styles from './Header.module.css';
import { scrollMoveTo } from '../../utils';

const SECTION_KEY = 'sectionTo';

export function Header() {
  const goToSection = (section: string) => {
    if (window.location.pathname !== '/') {
      window.localStorage.setItem(SECTION_KEY, section);
      window.location.pathname = '/';
    }
    else {
      scrollMoveTo(section);
    }
  }

  useEffect(() => {
    const section = window.localStorage.getItem(SECTION_KEY);
    if (section && section.length > 0) {
      window.localStorage.setItem(SECTION_KEY, '');
      scrollMoveTo(section);
    }
  });

  return (
    <Stack className={styles.root} direction='row'>
      <Link href={'/'}>
        <img src={BedRockLogo} />
      </Link>
      <Box className={styles.rightGroup}>
        <Box className={styles.buttonGroup}>
          <Button className={styles.shortButton} color="secondary" onClick={() => goToSection('section-whychoose')}>
            Protect
          </Button>
          <Link href={'/about'} underline='none'>
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
