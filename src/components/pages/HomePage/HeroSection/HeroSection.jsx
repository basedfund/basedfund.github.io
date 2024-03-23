'use client';

import content from '@/asset/content.json';
import { sanitizeText } from '@/utils/sanitizer';
import Image from 'next/image';

import { BRTypography } from '@/components/BRTypography';

import heroImage from '../../../../../public/asset/img/home.png';
import styles from './heroSection.module.css';

export const HeroSection = () => {
  const {
    homePage: { mainsSection },
  } = content;
  // const router = useRouter();

  const { title, tags } = mainsSection;

  // const scrollToFeature = () => {
  //   const targetElement = document.querySelector('#features');
  //   const offset = 80;
  //   const targetPosition = targetElement.offsetTop - offset;
  //
  //   window.scrollTo({
  //     top: targetPosition,
  //     behavior: 'smooth',
  //   });
  // };
  //
  // const handleOpenURl = (url) => {
  //   if (url.includes('https://')) {
  //     window.open(url, '_self');
  //   } else {
  //     router.push(url);
  //   }
  // };

  return (
    <div className={styles.heroSectionWrapper}>
      <div className={styles.imgWrapper}>
        <Image
          src={heroImage}
          alt="Main image"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wkAAvYB8z4HYOYAAAAASUVORK5CYII="
        />
      </div>
      <div className={styles.textWrapper}>
        <BRTypography
          text={<span dangerouslySetInnerHTML={{ __html: sanitizeText(title) }} />}
          variantMapping="headlineHero"
        />

        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag.text} className={styles[tag.variant]}>
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
