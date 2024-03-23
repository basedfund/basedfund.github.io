import content from '@/asset/content.json';
import { sanitizeText } from '@/utils/sanitizer';

import { ContentBlock } from '@/components/ContentBlock';
import { InfoBlocks } from '@/components/InfoBlocks';

import styles from './whatWeDo.module.css';

export const WhatWeDo = () => {
  const {
    homePage: { whatWeDo },
  } = content;

  const { title, description, blocks, subtitle } = whatWeDo;

  return (
    <ContentBlock
      title={<span dangerouslySetInnerHTML={{ __html: sanitizeText(title) }} />}
      subtitle={subtitle.toUpperCase()}
      description={description}
      className={styles.blockWrapper}
      id="features"
    >
      <InfoBlocks blocks={blocks} />
    </ContentBlock>
  );
};
