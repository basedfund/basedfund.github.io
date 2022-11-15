import React from 'react';
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import TwentyDots from '../../../../assets/images/TwentyDots.svg';
import styles from './WhyBox.module.css';

type WhyBoxProps = {
  title: string,
  reason: string,
  description: string,
  titleColor: string,
  rightBgColor: string,
  items: any[]
};

export function WhyBox({ title, reason, description, titleColor, rightBgColor, items }: WhyBoxProps) {
  return (
    <Box className={styles.root}>
      <Grid className={styles.container} container>
        <Grid item xs={12} md={5}>
          <Box className={styles.leftContainer}>
            <Box className={styles.leftBox}>
              <Typography className={styles.textTitle} variant='body1' color={titleColor}>
                {title}
              </Typography>
              <Typography className={styles.textReason} variant='h2' color='text.primary'>
                {reason}
              </Typography>
              <Typography className={styles.textDescription} variant='subtitle1' color='text.primary'>
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box className={styles.rightContainer}>
            <Box className={styles.rightBox} bgcolor={rightBgColor}>
              <img className={styles.dot1} src={TwentyDots} />
              <img className={styles.dot2} src={TwentyDots} />
              <Box className={styles.innerBox}>
                <Box flexDirection='column' display='flex' marginX='auto' width='100%'>
                  {items.map((item, id) => (
                    <Box key={id}>{item}</Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
