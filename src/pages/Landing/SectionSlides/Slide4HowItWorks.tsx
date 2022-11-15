import React from 'react';
import { Box, Typography } from '@mui/material';
import { WhyBox } from './WhyBox/WhyBox';
import SvgDownArrow from '../../../assets/images/DownArrow.svg';
import SvgDAI from '../../../assets/images/DAI.svg';
import SvgUSDT from '../../../assets/images/USDT.svg';
import styles from './SectionSlides.module.css';

export function Slide4HowItWorks() {
  function itemBox(icon: any, iconColor: string, description: string, iconSizePercent: string) {
    return (
      <Box className={styles.slide3Container}>
        <Box className={styles.slide1IconBox} bgcolor={iconColor}>
          <img src={icon} width={iconSizePercent} height={iconSizePercent} />
        </Box>
        <Typography className={styles.slide3Description}>
          {description}
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      <WhyBox
        title='How it works'
        reason='Downside Protection'
        description='Deposit stablecoins into a Bedrock Safe. If a hack occurs on any of the users Defi protocols - unhacked Safes are partially liquidated and funds are shared with users who filed claims.'
        titleColor='#FFB700'
        rightBgColor='#F4F7FE'
        items={[
          itemBox(SvgDownArrow, '#FFCCDB', 'Dai depegs from .99 to .20 ', '60%'),
          itemBox(SvgDAI, '#FFFAF3', 'Users who deposited Dai file a claim', '40%'),
          itemBox(SvgUSDT, '#4EAD7940', 'Our Smart Contracts reimburse claimants with USDT and USDC', '40%')
        ]}
      />
    </Box>
  );
}
