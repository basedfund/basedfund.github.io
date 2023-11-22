import content from '@/asset/content.json';
import { CloseIcon } from '@/asset/svg/CloseIcon';
import { MenuIcon } from '@/asset/svg/MenuIcon';
import { Drawer, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import BRButton from '@/components/BRButton/BRButton';
import { DropdownMobile } from '@/components/Header/DropdownMobile';
import styles from '@/components/Header/header.module.css';

export const MobileMenu = ({ handleClick }) => {
  const router = usePathname();
  const { header } = content;
  const [expanded, setExpanded] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.mobNav}>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleSidebar}
        PaperProps={{ sx: { width: '100%', padding: '40px' } }}
      >
        <div className={styles.mobileNav}>
          <Link href="/">
            <Image src="/asset/svg/BEDROCK LOGO.svg" alt="Logo" width={146} height={24} />
          </Link>

          <IconButton onClick={toggleSidebar}>
            <CloseIcon />
          </IconButton>
        </div>
        <ul className={styles.linkList}>
          {header.map((item, index) => {
            const activeClassName = router === item.url ? styles.activeLink : '';

            return (
              <li key={item.title}>
                {item.options?.length ? (
                  <DropdownMobile
                    {...item}
                    activeLinkClass={activeClassName}
                    expanded={expanded}
                    index={index}
                    handleChange={handleChange}
                  />
                ) : (
                  <Link
                    href={item.url}
                    prefetch={false}
                    className={`${styles.link} ${activeClassName}`}
                    onClick={(e) => {
                      handleClick(e, item.url);
                      toggleSidebar();
                    }}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className={styles.buttonWrapper}>
          <Link href="#" prefetch={false} className={styles.signUpLink}>
            Sign up
          </Link>

          <BRButton text="Connect Wallet" variant="containedDark" />
        </div>
      </Drawer>
      <IconButton onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};
