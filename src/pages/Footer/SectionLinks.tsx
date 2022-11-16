import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import BedRockLogo from '../../assets/images/BedRockLogo.svg';
import SvgInstagram from '../../assets/images/Instagram.svg';
import SvgTwitter from '../../assets/images/Twitter.svg';
import SvgTwitch from '../../assets/images/Twitch.svg';
import styles from './Footer.module.css';
import { URL_BLOG, URL_CONTACT, URL_DEFI_LLAMA, URL_FAQS, URL_GITHUB, URL_INSTAGRAM, URL_INVEST_IN_BEDROCK, URL_KNOWLEDGE_CENTER, URL_MANAGE_SETTINGS, URL_TWITCH, URL_TWITTER } from '../../api';

export function SectionLinks() {
  return (
    <Box className={styles.linkPanel}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={5}>
          <img src={BedRockLogo} />
          <Typography className={styles.description} variant='body1'>
            We use the cookies on the website to improve your experience, analyze traffic, and for basic functionality. Cookies are anonymous and do not link to user data. You can still use the website without cookies. For more information, please read our
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <Grid container direction='row'>
            <Grid item xs={4}>
              <Typography className={styles.groupName} variant='h5'>Legal</Typography>
              <Link href={'/policy'}>
                <Typography className={styles.link} variant='body1'>Privacy Policy</Typography>
              </Link>
              <Link href={'/terms'}>
                <Typography className={styles.link} variant='body1'>Terms & Conditions</Typography>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Typography className={styles.groupName} variant='h5'>Reach Out</Typography>
              {/* <Link href={URL_DEFI_LLAMA}>
                 <Typography className={styles.link} variant='body1'>Defi llama</Typography>
               </Link>
               */}
              <Link href={URL_GITHUB}>
                <Typography className={styles.link} variant='body1'>Github</Typography>
              </Link>
              <Link href={URL_CONTACT}>
                <Typography className={styles.link} variant='body1'>Contact Us</Typography>
              </Link>
              <Link href={URL_INVEST_IN_BEDROCK}>
                <Typography className={styles.link} variant='body1'>Invest in Bedrock</Typography>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Typography className={styles.groupName} variant='h5'>Community</Typography>
              <Box>
                {/* <Link href={URL_INSTAGRAM}>
                  <img className={styles.socialIcon} src={SvgInstagram} />
                </Link>
                <Link href={URL_TWITCH}>
                  <img className={styles.socialIcon} src={SvgTwitch} />
                </Link> */}
                <Link href={URL_TWITTER}>
                  <img className={styles.socialIcon} src={SvgTwitter} />
                </Link>
              </Box>
              <Link href={URL_BLOG}>
                <Typography className={styles.link} variant='body1'>Blog</Typography>
              </Link>
              {/*<Link href={URL_FAQS}>
                <Typography className={styles.link} variant='body1'>FAQ's</Typography>
              </Link> */}
              <Link href={URL_KNOWLEDGE_CENTER}>
                <Typography className={styles.link} variant='body1'>Knowledge Center</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box className={styles.bottomFooter}>
        <Typography className={styles.copyRight} variant='subtitle1'>
          Copyright © 2023 based inc
        </Typography>
        {/*<Link href={URL_MANAGE_SETTINGS}>
          <Typography className={styles.manageSettings} variant='subtitle1'>
            Manage settings
          </Typography>
        </Link>*/}
      </Box>
    </Box>
  );
}
