import content from '@/asset/content.json';

import { AboutUs } from '@/components/AboutUs';
import Layout from '@/components/Layout/Layout';
import { Wrapper } from '@/components/Wrapper';
import { Exchanges } from '@/components/pages/HomePage/Exchanges';
import { HeroSection } from '@/components/pages/HomePage/HeroSection';
import { WhatWeDo } from '@/components/pages/HomePage/WhatWeDo';
import { FAQ } from 'src/components/FAQ';

export const HomePage = () => {
  const {
    homePage: { whatIsBedrock, faq },
  } = content;

  return (
    <Layout>
      <HeroSection />
      <Wrapper>
        <WhatWeDo />
        <Exchanges />
      </Wrapper>
      <AboutUs {...whatIsBedrock} />
      <Wrapper>
        <FAQ faq={faq} />
      </Wrapper>
    </Layout>
  );
};
