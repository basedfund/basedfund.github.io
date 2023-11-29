import content from '@/asset/content.json';

import Layout from '@/components/Layout/Layout';
import { TextContent } from '@/components/TextContent';

export const TermsServicePage = () => {
  const {
    termsServicePage: { title, descriptions },
  } = content;

  return (
    <Layout>
      <TextContent title={title} descriptions={descriptions} />
    </Layout>
  );
};
