'use client';

import content from '@/asset/content.json';
import { CloseSmallIcon } from '@/asset/svg/CloseSmallIcon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import BRButton from '@/components/BRButton/BRButton';
import { Dropdown } from '@/components/Header/Dropdown';
import { MobileMenu } from '@/components/Header/MobileMenu';
import { Wrapper } from '@/components/Wrapper';

import styles from './header.module.css';

export const Header = () => {
  const { header } = content;
  const headerRef = useRef(null);
  const router = usePathname();
  const route = useRouter();
  const [isClosed, setClose] = useState(true);

  const handleClick = (e, url) => {
    e.preventDefault();

    if (url.includes('#')) {
      const targetElement = document.querySelector(url);

      if (targetElement) {
        const offset = 80;
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      } else {
        route.push(`/${url}`);
      }
    } else {
      route.push(url);
    }
  };

  const handleNavigation = (e) => {
    const scrollPosition = e.currentTarget.scrollY;

    headerRef.current.style.top = scrollPosition < 35 ? 'auto' : 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, []);

  return (
    <>
      {isClosed && (
        <div className={styles.topBlock}>
          <span className={styles.newText}>New</span>
          <span>{header.topBlock.text}</span>
          <button className={styles.closeButton} onClick={() => setClose(false)}>
            <CloseSmallIcon />
          </button>
        </div>
      )}
      <header className={styles.wrapper} ref={headerRef}>
        <Wrapper className={styles.header}>
          <Link href="/">
            <Image src="/asset/svg/BEDROCK LOGO.svg" alt="Logo" width={146} height={24} />
          </Link>
          <MobileMenu handleClick={handleClick} />
          <>
            <ul className={`${styles.linkList} ${styles.desktopNav}`}>
              {header.menu.map((item) => {
                const activeClassName = router === item.url ? styles.activeLink : '';

                return (
                  <li key={item.title}>
                    {item.options?.length ? (
                      <Dropdown {...item} activeLinkClass={activeClassName} />
                    ) : (
                      <Link
                        href={item.url}
                        prefetch={false}
                        className={`${styles.link} ${activeClassName}`}
                        onClick={(e) => handleClick(e, item.url)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className={`${styles.buttonWrapper} ${styles.desktopNav}`}>
              {header.signUpLink.text && (
                <Link href={header.signUpLink.url} prefetch={false} className={styles.signUpLink}>
                  {header.signUpLink.text}
                </Link>
              )}

              <BRButton
                text={header.blackButton}
                variant="contained"
                onClick={(e) => handleClick(e, '/waitlist')}
                style={{ height: 45 }}
              />
            </div>
          </>
        </Wrapper>
      </header>
    </>
  );
};
