import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import SvgDAI from '../../../assets/images/DAI.svg';
import SvgSparkle from '../../../assets/images/Sparkle.svg';
import RightArrow from '../../../components/svg/RightArrow';
import styles from './SectionProtect.module.css';
import { URL_VIEW_ALL_VAULTS } from '../../../api';

export function SectionProtect() {
  const goToViewAllVaults = () => {
    window.open(URL_VIEW_ALL_VAULTS, '_blank');    
  }

  return (
    <Box className={styles.root} id='section-invest'>
      <Box className={styles.headerContainer}>
        <Box className={styles.titleBox}>
          <Typography className={styles.title} variant='h2' color='text.primary'>
            Get Protection
          </Typography>
          <img className={styles.sparkleImg} src={SvgSparkle} />
        </Box>
        <Typography variant='body2' color='secondary.main'>
          Deposit stablecoins and protect against possible depeg events by sharing risks across a basket of depositors.
        </Typography>
        <Button className={styles.buttonViewVaults} variant='text' onClick={goToViewAllVaults} endIcon={<RightArrow />}>View all our vaults</Button>
      </Box>

      {/* <Box className={styles.protectDai}>
        <Box className={styles.daiIcon}>
          <img className={styles.daiIconImg} src={SvgDAI}/>
        </Box>
        <Grid className={styles.gridContainer} container>
          <Grid item xs={12} sm={5} md={6}>
            <Box className={styles.leftBox}>
              <Typography className={styles.protectTitle} variant='body1' color='text.primary'>Protect your Dai</Typography>
              <Typography className={styles.protectHeader} variant='h2' color='text.primary'>Protect your stable coins</Typography>
              <Typography className={styles.protectDescription} variant='subtitle2' color='text.primary'>Deposit Dai and protect yourself from depeg risks</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <Box className={styles.rightBox}>
              <Box className={styles.rightRow}>
                <Typography className={styles.statusKey} variant='h5' color='text.primary'>Current Capacity Available</Typography>
                <Typography className={styles.statusValue} variant='h5' color='text.primary'>19.35M</Typography>
              </Box>
              <Box className={styles.rightRow}>
                <Typography className={styles.statusKey} variant='h5' color='text.primary'>Deposit Fee</Typography>
                <Typography className={styles.statusValue} variant='h5' color='text.primary'>0.25%</Typography>
              </Box>
              <Box className={styles.inputBox}>
                <Typography className={styles.alterText} variant='body2'>
                  Protect your DAI &nbsp; 0.00
                </Typography>
                <Button className={styles.protectButton} variant='contained' onClick={goToViewAllVaults}>
                  PROTECT
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
}
