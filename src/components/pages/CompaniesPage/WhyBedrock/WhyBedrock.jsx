import content from '@/asset/content.json';
import { sanitizeText } from '@/utils/sanitizer';

import { ContentBlock } from '@/components/ContentBlock';
import { TextImgBlock } from '@/components/TextImgBlock';
import { Wrapper } from '@/components/Wrapper';

import styles from './whyBedrock.module.css';

export const WhyBedrock = () => {
  const {
    companiesPage: { whyBedrock, blocks },
  } = content;

  const { title, description, cards, subtitle } = whyBedrock;

  return (
    <ContentBlock
      title={<span dangerouslySetInnerHTML={{ __html: sanitizeText(title) }} />}
      subtitle={subtitle}
      description={description}
      className={styles.blockWrapper}
    >
      <Wrapper>
        <div className={styles.cardsList}>
          {cards.map((card, i) => (
            <img key={i} src={card} alt={`Card ${i + 1}`} className={styles.cardImg} />
          ))}
        </div>
      </Wrapper>
      <div className={styles.blockList}>
        <Wrapper className={styles.blocksWrapper}>
          {blocks.map((block) => (
            <TextImgBlock {...block} key={block.title} fontSizeDescription={22} />
          ))}
        </Wrapper>
      </div>
    </ContentBlock>
  );
};
