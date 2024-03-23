import Layout from '@/components/Layout/Layout';
import { Wrapper } from '@/components/Wrapper';

import { HeroSection } from './HeroSection';
import { Statistic } from './Statistic';
import { WhyBedrock } from './WhyBedrock';

export const CompaniesPage = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="backgroundDark">
        <Wrapper>
          <Statistic />
        </Wrapper>
        <WhyBedrock />
      </div>
    </Layout>
  );
};
