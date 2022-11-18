import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './TermsAndPolicy.module.css';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Box className={styles.root}>
      <Typography variant='h2' color='text.primary'>
        About
      </Typography>
      <Box className={styles.body}>
        <Typography className={styles.content} variant='body2'>
          It was 6:00 a.m. and, like most days in early 2022, I woke up anxious and paranoid about my health and my
          crypto portfolio. In the previous 2 months I had prudently moved my holdings into stablecoins, a coin designed with
          the goal of always being worth $1.00. Stablecoin holdings for the funds were valued at $150,000, but on this specific
          morning they were only worth $3,052.00. Even in the Wild West of cryptocurrency, this level of volatility was extreme.
        </Typography>
        <Typography className={styles.content} variant='body2'>
          Stablecoins have a problem in that, well, they're not always stable. No clear path existed to recover
          the lost value and there was no regulator authorized to enforce the solvency of the assets I and thousands
          of others held. Crypto is a domain that is riddled with frauds worth over a billion dollars working in tandem
          with legitimate innovations. Many lessons were learned as a result of the loss, but my commitment to the cryptocurrency
          movement hasn't wavered. My belief in the vision of what crypto could be has kept me involved.
        </Typography>
        <Typography className={styles.content} variant='body2'>
          The agony of this experience is what gave rise to the concept of creating solutions that shield people and
          companies from financial loss. In late 2022, I partnered with like-minded individuals and launched Bedrock, a
          financial loss protection tool. Currently, our team of four is dispersed across the globe and we are building protective
          products that will support emerging technological advancements in what is unquestionably the most interesting
          area of the technology space.
        </Typography>
      </Box>
    </Box >
  );
}
