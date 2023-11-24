import Image from 'next/image';

import { BRTypography } from '@/components/BRTypography';

import styles from './statIcon.module.css';

export const StatItem = ({ title, description, img }) => {
  return (
    <div className={styles.block}>
      <div className={styles.imageWrapper}>
        {img && <Image src={img} alt="Arrow" height={11} width={25} />}
        <BRTypography text={title} variantMapping="headline3" />
      </div>
      <BRTypography text={description} variantMapping="bodyS" style={{ color: '#918EA4' }} />
    </div>
  );
};
