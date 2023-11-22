import { ArrowTop } from '@/asset/svg/ArrowTop';
import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from '@/components/Header/header.module.css';

const defaultDropdownStyles = {
  '.MuiButtonBase-root': {
    fontFamily: 'Inter, sans-serif',
    minWidth: '130px',
    fontSize: '14px',
    a: {
      color: '#000',
      textDecoration: 'none',
    },
    ':hover a': {
      color: '#4DB2A8',
    },
  },
};

export const Dropdown = ({ title, options, url, activeLinkClass }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log('sdsdsdsd');
    setAnchorEl(event.target.parentNode);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        className={`${styles.linkWrapper} ${open ? styles.opened : ''}`}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Link href={url} prefetch={false} className={`${styles.link} ${activeLinkClass}`}>
          {title}
        </Link>
        <div onClick={handleClick}>
          <ArrowTop />
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            marginTop: '9px',
            ...defaultDropdownStyles,
          },
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {options.map((menu) => (
          <MenuItem onClick={handleClose} key={menu.title}>
            <Link href={menu.url} prefetch={false}>
              {menu.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
