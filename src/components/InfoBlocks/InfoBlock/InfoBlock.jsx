import Image from 'next/image';

import { BRTypography } from '@/components/BRTypography';
import { IconBlock } from '@/components/IconBlock';

import styles from './infoBlock.module.css';

export const InfoBlock = ({ title, description, image, imagePosition, icon, number, customClassName, id, theme }) => {
  return (
    <div
      className={`${styles.blockWrapper} ${imagePosition ? styles.blockRow : ''} ${customClassName} ${styles[theme]}`}
      id={id}
    >
      <div className={styles.content}>
        <IconBlock number={number} icon={icon} color={'E3FC7E'} />
        <BRTypography text={title} variantMapping="headline4" style={{ marginBottom: '24px' }} />
        <BRTypography text={description} variantMapping="bodyL" />
      </div>
      <div className={styles.imgWrapper}>
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={400}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP89v1nPQAJOANnDzEhuQAAAABJRU5ErkJggg=="
          />
        )}
      </div>
    </div>
  );
};
