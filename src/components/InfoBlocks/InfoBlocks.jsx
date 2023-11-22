import { InfoBlock } from '@/components/InfoBlocks/InfoBlock';

import styles from './infoBlocks.module.css';

export const InfoBlocks = ({ blocks, customClassName = '' }) => {
  return (
    <div className={styles.blocksWrapper}>
      {blocks.map((block, key) => (
        <InfoBlock {...block} key={block.title} number={block.icon || key + 1} customClassName={customClassName} />
      ))}
    </div>
  );
};
