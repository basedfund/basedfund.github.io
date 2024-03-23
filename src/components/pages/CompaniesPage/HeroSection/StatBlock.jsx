import { Box } from '@mui/material';
import React from 'react';

import { BRTypography } from '@/components/BRTypography';

export const StatBlock = ({ title, description }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <BRTypography text={title} variantMapping="bodyXL" />
      <BRTypography text={description} variantMapping="bodyM" />
    </Box>
  );
};
