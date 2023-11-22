import { BRTypography } from '@/components/BRTypography';

import styles from './contentBlock.module.css';

export const ContentBlock = ({ title, description, children, className, id }) => {
  return (
    <div title={styles.wrapper} id={id}>
      <div className={`${styles.textWrapper} ${className}`}>
        <BRTypography text={title} variantMapping="headline2" />
        <BRTypography text={description} variantMapping="bodyL" />
      </div>
      {children}
    </div>
  );
};
