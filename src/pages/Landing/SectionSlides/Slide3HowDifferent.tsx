import React from 'react';
import { Box, Typography } from '@mui/material';
import { WhyBox } from './WhyBox/WhyBox';
import SvgDAI from '../../../assets/images/DAI.svg';
import SvgUSDC from '../../../assets/images/USDC.svg';
import SvgUSDT from '../../../assets/images/USDT.svg';
import CheckCircle from '../../../components/svg/CheckCircle';
import styles from './SectionSlides.module.css';

export function Slide3HowDifferent() {
  function itemBox(icon: any, iconColor: string, tokenName: string, checkCircleColor: string) {
    return (
      <Box className={styles.slide3Container}>
        <Box className={styles.slide1IconBox} bgcolor={iconColor}>
          <img className={styles.slide1IconImg} src={icon} />
        </Box>
        <Typography className={styles.slide3Description}>
          Deposit {tokenName}
        </Typography>
        <Box className={styles.slide3CheckCircle} color={checkCircleColor}>
          <CheckCircle />
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <WhyBox
        title='How we are different'
        reason='Safe & Secure'
        description='On BedRock you deposit Defi assets to pool and spread risk with like-minded users and protocols.Depositers are both the insured and insurer'
        titleColor='#FFB700'
        rightBgColor='#F4F7FE'
        items={[
          itemBox(SvgUSDC, '#F2F5FF', 'USDC', '#2A3275'),
          itemBox(SvgDAI, '#FFFAF3', 'Dai', '#F5AC37'),
          itemBox(SvgUSDT, '#4EAD7940', 'USDT', '#2BB28E')
        ]}
      />
    </Box>
  );
}
