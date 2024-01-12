import Layout from '@/components/Layout/Layout';
import { Wrapper } from '@/components/Wrapper';
import { HeroSection } from '@/components/pages/StrategiesPage/HeroSection';
import { Info } from '@/components/pages/StrategiesPage/Info';

export const StrategiesPage = () => {
  return (
    <Layout>
      <HeroSection />
      <Wrapper>
        <Info />
      </Wrapper>
    </Layout>
  );
};
