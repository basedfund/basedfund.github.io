import { sanitizeText } from '@/utils/sanitizer';

import BRButton from '@/components/BRButton/BRButton';
import { BRTypography } from '@/components/BRTypography';

import styles from './textImgBlock.module.css';

export const TextImgBlock = ({ title, description, button, img, imgPosition, fontSizeDescription = 24 }) => {
  return (
    <div className={`${styles.wrapper} ${styles[imgPosition] || ''}`}>
      <div className={styles.textBlock}>
        <BRTypography
          text={<span dangerouslySetInnerHTML={{ __html: sanitizeText(title) }} />}
          variantMapping="headline2"
        />
        <BRTypography
          style={{ fontSize: fontSizeDescription, letterSpacing: '-0.04em', color: 'rgba(3, 7, 18, 0.6)' }}
          text={description}
          variantMapping="bodyL"
        />
        <BRButton text={button.text} variant="contained" style={{ marginTop: 60 }} />
      </div>
      <img src={img} alt={title} />
    </div>
  );
};
