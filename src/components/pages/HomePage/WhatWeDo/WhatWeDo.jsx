import content from '@/asset/content.json';

import { ContentBlock } from '@/components/ContentBlock';
import { InfoBlocks } from '@/components/InfoBlocks';

import styles from './whatWeDo.module.css';

export const WhatWeDo = () => {
  const {
    homePage: { whatWeDo },
  } = content;

  const { title, description, blocks } = whatWeDo;

  return (
    <ContentBlock title={title} description={description} className={styles.blockWrapper} id="features">
      <InfoBlocks blocks={blocks} />
    </ContentBlock>
  );
};
