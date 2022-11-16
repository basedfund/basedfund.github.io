import React from 'react';
import { Slide1WhyBedRock } from './Slide1WhyBedRock';
import { Slide2TheProblem } from './Slide2TheProblem';
import { Slide3HowDifferent } from './Slide3HowDifferent';
import { Slide4HowItWorks } from './Slide4HowItWorks';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'

import { FreeMode, Mousewheel } from 'swiper'

export function SectionSlides() {
  return (
    <Swiper
      slidesPerView={window.innerWidth / (window.innerWidth >= 1024 ? 1150 : 385)}
      freeMode={true}
      mousewheel
      modules={[Mousewheel, FreeMode]}
    >
      <SwiperSlide><Slide1WhyBedRock /></SwiperSlide>
      <SwiperSlide><Slide2TheProblem /></SwiperSlide>
      <SwiperSlide><Slide3HowDifferent /></SwiperSlide>
      <SwiperSlide><Slide4HowItWorks /></SwiperSlide>
    </Swiper>
  );
}
