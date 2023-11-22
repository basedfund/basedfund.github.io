import Link from 'next/link';

import styles from './footer.module.css';

export const CustomLink = ({ text, link }) => {
  return (
    <Link className={styles.link} href={link}>
      {text}
    </Link>
  );
};
