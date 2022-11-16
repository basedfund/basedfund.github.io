import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import SvgCurve4 from '../../assets/images/curve4.svg';
import styles from './Footer.module.css';

export function SectionCommunity() {
  return (
    <Box className={styles.communityContainer}>
      <Typography className={styles.title} variant='h4' color='text.primary'>
        Community
      </Typography>
      <Box className={styles.stayText}>
        <Typography variant='h2' color='text.primary'>
          Stay updated
        </Typography>
        <img className={styles.headerCurve} src={SvgCurve4} />
      </Box>
      <Typography className={styles.guide} variant='subtitle2'>
        Connect with us to get all the updated on the email which you will put.
      </Typography>

      <form className={styles.inputField} action="https://formspree.io/f/mbjbrplr" method="POST">
        <input className={styles.emailInput} type="email" name="email" placeholder="Enter your email address" />
        <button className={styles.submitButton} type="submit">Submit</button>
      </form>
      
      <Typography className={styles.joinSentence} variant='body1'>
        Join others in learning how to protect your cyrpto assets
      </Typography>
    </Box>
  );
}
