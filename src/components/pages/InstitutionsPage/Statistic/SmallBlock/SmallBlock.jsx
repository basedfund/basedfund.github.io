import Image from 'next/image';

import BRButton from '@/components/BRButton/BRButton';
import { BRTypography } from '@/components/BRTypography';
import { IconBlock } from '@/components/IconBlock';

import styles from './smallBlock.module.css';

export const SmallBlock = ({ text, icon, buttonText, image, theme }) => {
  return (
    <div className={`${styles.blockWrapper} ${styles[theme]}`}>
      <div>
        <div className={styles.iconWrapper}>{icon && <IconBlock icon={icon} />}</div>
        <BRTypography text={text} variantMapping="headline4" style={{ marginBottom: '24px' }} />
      </div>
      {buttonText && <BRButton text={buttonText} variant="contained" />}
      {image && <Image className={styles.img} src={image} alt={text} width={400} height={250} />}
    </div>
  );
};
