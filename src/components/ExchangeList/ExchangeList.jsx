import content from '@/asset/content.json';
import Image from 'next/image';

import styles from './exchangeList.module.css';

export const ExchangeList = () => {
  const { exchanges } = content;

  return (
    <div className={styles.exchangeList}>
      {exchanges.map(({ image, alt, text }) => (
        <div className={`${styles.exchange} ${text ? styles.withText : ''}`} key={image}>
          <Image src={image} alt={alt} width={200} height={60} />
          {text && <span className={styles.text}>{text}</span>}
        </div>
      ))}
    </div>
  );
};
