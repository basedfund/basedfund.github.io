import { sanitizeText } from '@/utils/sanitizer';
import Image from 'next/image';

import { BRTypography } from '@/components/BRTypography';

import styles from './statIcon.module.css';

export const StatItem = ({ title, description, img }) => {
  return (
    <div className={styles.block}>
      <div className={styles.imageWrapper}>
        {img && <Image src={img} alt="Arrow" height={30} width={30} />}
        <BRTypography
          text={<span dangerouslySetInnerHTML={{ __html: sanitizeText(title) }} />}
          variantMapping="headline3"
          style={{ color: '#fff' }}
        />
      </div>
      <BRTypography text={description} variantMapping="bodyS" style={{ color: '#918EA4' }} />
    </div>
  );
};
