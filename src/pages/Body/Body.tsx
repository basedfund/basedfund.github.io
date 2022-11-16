import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Landing, Policy, Terms } from '../';
import styles from './Body.module.css';

export function Body() {
  return (
    <Box className={styles.root}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Landing />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
