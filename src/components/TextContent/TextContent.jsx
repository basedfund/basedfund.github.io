import { BRTypography } from '@/components/BRTypography';
import { Wrapper } from '@/components/Wrapper';

import styles from './textContent.module.css';

export const TextContent = ({ title, descriptions }) => {
  return (
    <Wrapper className={styles.wrapper}>
      <BRTypography text={title} variantMapping="headline1" />
      {descriptions.map((item, index) => (
        <div key={item.title || item.subtitle || index}>
          {item.title && <BRTypography text={item.title} variantMapping="headline5" />}
          {item.subtitle && <BRTypography text={item.subtitle} variantMapping="headline6" />}
          {item.text && (
            <BRTypography
              variantMapping="bodyL"
              theme="light"
              dangerouslySetInnerHTML={{
                __html: item.text,
              }}
            />
          )}
        </div>
      ))}
    </Wrapper>
  );
};
