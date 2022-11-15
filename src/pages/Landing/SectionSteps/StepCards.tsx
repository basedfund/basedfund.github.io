import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './SectionSteps.module.css';

export type StepCardProps = {
  id: string,
  title: string,
  description: string[],
  rotation: number,
  top: string
};

export function StepCard({ id, title, description, rotation, top }: StepCardProps) {
  return (
    <Box className={styles.card}
      sx={{ transform: { xs: '0', lg: `rotate(${rotation}deg) translateY(${top})` } }}>
      <Box className={styles.cardTextField}>
        <Typography className={styles.cardId} variant='h1' color='text.primary'>
          {id}
        </Typography>
        <Typography className={styles.cardTitle} variant='h4' color='text.primary'>
          {title}
        </Typography>
        <Typography className={styles.cardDescription} variant='subtitle2' color='text.primary'>
          {description.map((sentence, id) => (
            <span key={id}>{sentence}<br /><br /></span>
          ))}
        </Typography>
      </Box>
    </Box>
  );
}
