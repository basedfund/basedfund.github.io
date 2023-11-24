import { Arrow } from '@/asset/svg/Arrow';
import { useState } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
// requires a loader
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Slide } from '@/components/Carousel/Slide';

import styles from './carousel.module.css';

export const Carousel = ({ slides }) => {
  const [slideTheme, setSlideTheme] = useState();

  const handleChange = (selectedIndex) => {
    setSlideTheme(slides[selectedIndex]?.theme);
  };

  return (
    <div className={styles.wrapper}>
      <ReactCarousel
        className={styles[slideTheme]}
        showArrows
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        onChange={handleChange}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              onClick={clickHandler}
              className={`${styles.arrow} ${styles.prevArrow} ${hasPrev ? '' : styles.disabled}`}
            >
              <Arrow />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              onClick={clickHandler}
              className={`${styles.arrow} ${styles.nextArrow} ${hasNext ? '' : styles.disabled}`}
            >
              <Arrow />
            </div>
          );
        }}
      >
        {slides.map((item) => (
          <Slide key={item.title} {...item} />
        ))}
      </ReactCarousel>
    </div>
  );
};
