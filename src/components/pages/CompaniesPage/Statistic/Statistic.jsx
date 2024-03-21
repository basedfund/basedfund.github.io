'use client';

import content from '@/asset/content.json';
import { sanitizeText } from '@/utils/sanitizer';

import { Carousel } from '@/components/Carousel';
import { ContentBlock } from '@/components/ContentBlock';
import { InfoBlocks } from '@/components/InfoBlocks';
import { StatItem } from '@/components/pages/CompaniesPage/Statistic/StatItem/StatItem';

import styles from './statistic.module.css';

export const Statistic = () => {
  const {
    companiesPage: { statistic },
  } = content;

  const { blocks, slider, options, title, subtitle, description } = statistic;

  return (
    <div>
      <div className={styles.statWrapper}>
        {options.map((item) => (
          <StatItem {...item} key={item.title} />
        ))}
      </div>
      <ContentBlock
        title={<span dangerouslySetInnerHTML={{ __html: sanitizeText(title) }} />}
        subtitle={subtitle.toUpperCase()}
        description={description}
      />
      <div className={styles.contentBlock} id="features">
        <InfoBlocks blocks={blocks} customClassName={styles.infoBlock} />
        <Carousel slides={slider} />
        <div className={styles.smallBlocksWrapper}></div>
      </div>
    </div>
  );
};
