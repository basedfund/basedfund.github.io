import circle from '@/asset/svg/circle.svg';
import Image from 'next/image';

import BRButton from '@/components/BRButton/BRButton';
import { BRTypography } from '@/components/BRTypography';

import styles from './aboutUs.module.css';

export const AboutUs = ({ title, subTitle, description, buttonText, image }) => {
  return (
    <div className={styles.blockWrapper}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <div className={styles.topContent}>
            <Image src={circle} alt="Image" width={110} height={110} />
            <BRTypography text={subTitle} variantMapping="bodyL" style={{ color: '#FFF' }} />
          </div>
          <div className={styles.textBlock}>
            <BRTypography
              text={title}
              variantMapping="headline2"
              style={{ color: '#FFF', letterSpacing: '-3.84px', lineHeight: '70px', textTransform: 'uppercase' }}
            />
            <BRTypography text={description} variantMapping="bodyM" />
          </div>
          <BRButton text={buttonText} variant="contained" />
        </div>
        <Image className={styles.image} src={image} alt="Image" width={437} height={405} />
      </div>
    </div>
  );
};
