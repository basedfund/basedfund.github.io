'use client';

import content from '@/asset/content.json';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import BRButton from '@/components/BRButton/BRButton';
import { Dropdown } from '@/components/Header/Dropdown';
import { MobileMenu } from '@/components/Header/MobileMenu';
import { Wrapper } from '@/components/Wrapper';

import styles from './header.module.css';

export const Header = () => {
  const { header } = content;
  const router = usePathname();
  const route = useRouter();

  const handleClick = (e, url) => {
    e.preventDefault();

    if (url.includes('#')) {
      const targetElement = document.querySelector(url);
      const offset = 80;
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    } else {
      route.push(url);
    }
  };

  return (
    <header className={styles.wrapper}>
      <Wrapper className={styles.header}>
        <Link href="/">
          <Image src="/asset/svg/BEDROCK LOGO.svg" alt="Logo" width={146} height={24} />
        </Link>
        <MobileMenu handleClick={handleClick} />
        <>
          <ul className={`${styles.linkList} ${styles.desktopNav}`}>
            {header.map((item) => {
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
            <Link href="#" prefetch={false} className={styles.signUpLink}>
              Sign up
            </Link>

            <BRButton text="Login" variant="containedDark" />
          </div>
        </>
        {/*)}*/}
      </Wrapper>
    </header>
  );
};
