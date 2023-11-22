import content from '@/asset/content.json';

import { AboutUs } from '@/components/AboutUs';
import { FAQ } from '@/components/FAQ';
import Layout from '@/components/Layout/Layout';
import { Wrapper } from '@/components/Wrapper';
import { Exchanges } from '@/components/pages/InstitutionsPage/Exchanges';
import { HeroSection } from '@/components/pages/InstitutionsPage/HeroSection';
import { Statistic } from '@/components/pages/InstitutionsPage/Statistic';

export const InstitutionsPage = () => {
  const {
    institutionsPage: { whatWeOffer, faq },
  } = content;

  return (
    <Layout>
      <HeroSection />
      <Wrapper>
        <Statistic />
        <Exchanges />
      </Wrapper>
      <AboutUs {...whatWeOffer} />
      <Wrapper>
        <FAQ faq={faq} />
      </Wrapper>
    </Layout>
  );
};
