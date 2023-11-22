import content from '@/asset/content.json';

import { ContentBlock } from '@/components/ContentBlock';
import { ExchangeList } from '@/components/ExchangeList';

import styles from './exchanges.module.css';

export const Exchanges = () => {
  const {
    institutionsPage: { exchangesBlock },
  } = content;

  const { title, description } = exchangesBlock;

  return (
    <div className={styles.blockWrapper}>
      <ContentBlock title={title} description={description}>
        <ExchangeList />
      </ContentBlock>
    </div>
  );
};
