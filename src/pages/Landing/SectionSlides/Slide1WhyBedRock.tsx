import React from 'react';
import { Box, Typography } from '@mui/material';
import { WhyBox } from './WhyBox/WhyBox';
import SvgDAI from '../../../assets/images/DAI.svg';
import SvgUSDC from '../../../assets/images/USDC.svg';
import SvgUSDT from '../../../assets/images/USDT.svg';
import styles from './SectionSlides.module.css';

export function Slide1WhyBedRock() {
  function itemBox(icon: any, iconColor: string, tokenName: string) {
    return (
      <Box className={styles.slide1Container}>
        <Box className={styles.slide1IconBox} bgcolor={iconColor}>
          <img className={styles.slide1IconImg} src={icon} />
        </Box>
        <Typography className={styles.slide1TokenName}>
          {tokenName}
        </Typography>
        <Typography className={styles.slide1Secured}>
          Secured
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      <WhyBox
        title='Why Bedrock?'
        reason='Zero Protection'
        description='In 2021, criminal hackers stole approximately $3.2 billion in cryptocurrency —and the victims are disproportionately in DeFi.'
        titleColor='#ffffff'
        rightBgColor='#171A3166'
        items={[
          itemBox(SvgUSDC, '#F2F5FF', 'USDC'),
          itemBox(SvgDAI, '#FFFAF3', 'Maker Dao Dai'),
          itemBox(SvgUSDT, '#4EAD7940', 'USDT')
        ]}
      />
    </Box>
  );
}