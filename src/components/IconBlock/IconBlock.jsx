import Image from 'next/image';

import styles from './iconBlock.module.css';

export const IconBlock = ({ icon, number }) => {
  return (
    <div className={styles.iconWrapper}>{icon ? <Image src={icon} alt="icon" width={32} height={32} /> : number}</div>
  );
};
