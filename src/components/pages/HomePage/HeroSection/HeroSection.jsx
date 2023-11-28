'use client';

import { useRouter } from 'next/navigation';
import content from '@/asset/content.json';
import Image from 'next/image';

import BRButton from '@/components/BRButton/BRButton';
import { BRTypography } from '@/components/BRTypography';

import heroImage from '../../../../../public/asset/img/xasds.png';
import styles from './heroSection.module.css';

export const HeroSection = () => {
  const {
    homePage: { mainsSection },
  } = content;
  const router = useRouter();

  const { title, description, leftButton, rightButton } = mainsSection;

  const scrollToFeature = () => {
    const targetElement = document.querySelector('#features');
    const offset = 80;
    const targetPosition = targetElement.offsetTop - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
    });
  };

  const navigateToLogin = () => {
    router.push('/login')
  }


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
        <BRTypography text={title} variantMapping="headlineHero" />
        <BRTypography text={description} variantMapping="bodyM" />

        <div className={styles.buttonsWrapper}>
          <BRButton text={leftButton} variant="contained" onClick={navigateToLogin} />
          <BRButton text={rightButton} variant="outlined" onClick={scrollToFeature} />
        </div>
      </div>
    </div>
  );
};
