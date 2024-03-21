import Image from 'next/image';

import { BRTypography } from '@/components/BRTypography';
import { IconBlock } from '@/components/IconBlock';

import styles from './slide.module.css';

export const Slide = ({ title, description, image, icon, customClassName = '', id, theme, imgStyles }) => {
  return (
    <div className={`${styles.blockWrapper} ${customClassName} ${styles[theme] || ''}`} id={id}>
      <div className={styles.textWrapper}>
        <IconBlock icon={icon} />
        <BRTypography text={title} variantMapping="headline4" style={{ marginBottom: '24px' }} />
        <BRTypography text={description} variantMapping="bodyL" style={{ color: '#918EA4' }} />
      </div>
      {image && (
        <Image
          className={styles.img}
          src={image}
          alt={title}
          width={400}
          height={260}
          style={imgStyles}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP89v1nPQAJOANnDzEhuQAAAABJRU5ErkJggg=="
        />
      )}
    </div>
  );
};
