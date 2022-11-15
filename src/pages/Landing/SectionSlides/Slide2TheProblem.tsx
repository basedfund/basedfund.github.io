import React from 'react';
import { Box, Typography } from '@mui/material';
import { WhyBox } from './WhyBox/WhyBox';
import SvgCaesarzkn1 from '../../../assets/images/Caesarzkn1.svg';
import SvgCaesarzkn2 from '../../../assets/images/Caesarzkn2.svg';
import SvgCaesarzkn3 from '../../../assets/images/Caesarzkn3.svg';
import styles from './SectionSlides.module.css';

export function Slide2TheProblem() {
  function itemBox(icon: any, iconColor: string, tokenName: string, hackedAmount: string) {
    return (
      <Box className={styles.slide1Container}>
        <Box className={styles.slide1IconBox} bgcolor={iconColor}>
          <img className={styles.slide1IconImg} src={icon} />
        </Box>
        <Typography className={styles.slide1TokenName}>
          {tokenName}
        </Typography>
        <Typography className={styles.slide2HackedAmount}>
          {hackedAmount}
        </Typography>
      </Box>
    );
  };
  
  return (
    <Box>
      <WhyBox
        title='The Problem'
        reason="Stablecoins aren't stable"
        description='Existing DeFi insurance solutions mimic traditional institutions. None are equipped to protect and compensate DeFi users and protocols across Web3.'
        titleColor='#FFB700'
        rightBgColor='#171A3173'
        items={[
          itemBox(SvgCaesarzkn1, '#F2F5FF', 'Wormhole Hack', '$ 325mm'),
          itemBox(SvgCaesarzkn2, '#FFFAF3', 'Beanstalk Hack', '$ 180mm'),
          itemBox(SvgCaesarzkn3, '#FFF7F7', 'Terra UST', '$ 42bil')
        ]}
      />
    </Box>
  );
}
