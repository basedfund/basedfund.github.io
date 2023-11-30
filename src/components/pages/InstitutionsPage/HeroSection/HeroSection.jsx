'use client';

import content from '@/asset/content.json';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import BRButton from '@/components/BRButton/BRButton';
import { BRTypography } from '@/components/BRTypography';
import { AnimatedChart } from '@/components/pages/InstitutionsPage/AnimatedChart';

import heroImage from '../../../../../public/asset/img/hero_inst.png';
import styles from './heroSection.module.css';

export const HeroSection = () => {
  const router = useRouter();
  const {
    institutionsPage: { mainsSection },
  } = content;

  const { title, description, leftButton, rightButton } = mainsSection;

  const handleOpenURl = (url) => {
    if (url.includes('https://')) {
      window.open(url, '_self');
    } else {
      router.push(url);
    }
  };

  return (
    <div className={styles.heroSectionWrapper}>
      <div className={styles.heroContent}>
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
          <BRTypography text={title} variantMapping="headlineHero" />
          <BRTypography text={description} variantMapping="bodyM" />

          <div className={styles.buttonsWrapper}>
            <BRButton text={leftButton.text} variant="contained" onClick={() => handleOpenURl(leftButton.url)} />
            <BRButton text={rightButton.text} variant="outlined" onClick={() => handleOpenURl(rightButton.url)} />
          </div>
        </div>
      </div>
      <AnimatedChart />
    </div>
  );
};
