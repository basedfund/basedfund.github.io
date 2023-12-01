'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from './footer.module.css';

export const CustomLink = ({ text, link }) => {
  const route = useRouter();

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

  return (
    <Link className={styles.link} href={link} onClick={(e) => handleClick(e, link)}>
      {text}
    </Link>
  );
};
