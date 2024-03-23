import Image from 'next/image';

import Based from '../../../../asset/svg/Based.svg';
import polygon from '../../../../asset/svg/Polygon.svg';
import uniswap from '../../../../asset/svg/Uniswap.svg';
import enzyme from '../../../../asset/svg/enzyme.svg';
import styles from './cryptocurrency.module.css';

export const Cryptocurrency = () => {
  return (
    <div className={styles.list}>
      <Image src={polygon} alt="Polygon" />
      <Image src={uniswap} alt="uniswap" />
      <Image src={Based} alt="Based" />
      <Image src={enzyme} alt="enzyme" />
    </div>
  );
};
