import content from '@/asset/content.json';

import { AboutUs } from '@/components/AboutUs';
import Layout from '@/components/Layout/Layout';
import { Wrapper } from '@/components/Wrapper';
import { Cryptocurrency } from '@/components/pages/HomePage/Cryptocurrency';
import { HeroSection } from '@/components/pages/HomePage/HeroSection';
import { OurMission } from '@/components/pages/HomePage/OurMission';
import { WhatWeDo } from '@/components/pages/HomePage/WhatWeDo';
import { FAQ } from 'src/components/FAQ';

export const HomePage = () => {
  const {
    homePage: { faq },
  } = content;

  return (
    <Layout>
      <HeroSection />
      <div className="backgroundDark">
        <Wrapper>
          <Cryptocurrency />
          <WhatWeDo />
        </Wrapper>
        <OurMission />
      </div>
      <Wrapper>
        <FAQ faq={faq} />
      </Wrapper>
    </Layout>
  );
};
