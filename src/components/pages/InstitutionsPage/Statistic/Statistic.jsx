'use client';

import content from '@/asset/content.json';

import { Carousel } from '@/components/Carousel';
import { InfoBlocks } from '@/components/InfoBlocks';
import { SmallBlock } from '@/components/pages/InstitutionsPage/Statistic/SmallBlock';
import { StatItem } from '@/components/pages/InstitutionsPage/Statistic/StatItem/StatItem';

import styles from './statistic.module.css';

export const Statistic = () => {
  const {
    institutionsPage: { statistic },
  } = content;

  const { blocks, slider, smallBlocks, options } = statistic;

  return (
    <div>
      <div className={styles.statWrapper}>
        {options.map((item) => (
          <StatItem {...item} key={item.title} />
        ))}
      </div>
      <div className={styles.contentBlock} id="features">
        <InfoBlocks blocks={blocks} customClassName={styles.infoBlock} />
        <Carousel slides={slider} />
        <div className={styles.smallBlocksWrapper}>
          {smallBlocks.map((block) => (
            <SmallBlock {...block} key={block.text} />
          ))}
        </div>
      </div>
    </div>
  );
};
