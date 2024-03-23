import Image from 'next/image';

import styles from './iconBlock.module.css';

export const IconBlock = ({ icon, number, color }) => {
  return (
    <div className={styles.iconWrapper} style={{ background: color }}>
      {icon ? <Image src={icon} alt="icon" width={32} height={32} /> : number}
    </div>
  );
};
