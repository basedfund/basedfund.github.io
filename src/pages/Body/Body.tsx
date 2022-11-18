import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Landing, About, Policy, Terms } from '../';
import styles from './Body.module.css';

export function Body() {
  return (
    <Box className={styles.root}>
      <HashRouter basename='/'>
        <Routes>
          <Route path='/*' element={<Landing />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </HashRouter>
    </Box>
  );
}
