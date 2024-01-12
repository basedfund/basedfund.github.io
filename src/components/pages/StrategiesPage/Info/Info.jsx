import content from '@/asset/content.json';

import { InfoBlocks } from '@/components/InfoBlocks';

import styles from './info.module.css';

export const Info = () => {
  const {
    strategiesPage: { blocks },
  } = content;

  return <InfoBlocks blocks={blocks} customClassName={styles.infoBlock} />;
};
