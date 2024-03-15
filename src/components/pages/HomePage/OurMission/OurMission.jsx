import content from '@/asset/content.json';
import { sanitizeText } from '@/utils/sanitizer';

import { ContentBlock } from '@/components/ContentBlock';

import styles from './ourMission.module.css';

export const OurMission = () => {
  const {
    homePage: { ourMission },
  } = content;

  const { title, description, blocks, subtitle } = ourMission;

  return (
    <ContentBlock
      title={<span dangerouslySetInnerHTML={{ __html: sanitizeText(title) }} />}
      subtitle={subtitle}
      description={description}
      className={styles.blockWrapper}
    >
      {/*<InfoBlocks blocks={blocks} />*/}
    </ContentBlock>
  );
};
