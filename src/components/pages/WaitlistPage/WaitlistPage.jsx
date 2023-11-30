'use client';

import { Widget } from '@typeform/embed-react';

import Layout from '@/components/Layout/Layout';
import { Wrapper } from '@/components/Wrapper';

export const WaitlistPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Widget id="https://nfv8h0h75wk.typeform.com/to/NBJ4X9G9" className="my-form" style={{ height: '500px' }} />
      </Wrapper>
    </Layout>
  );
};
