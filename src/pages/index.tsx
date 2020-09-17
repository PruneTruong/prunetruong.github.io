import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { PersonalInformation } from '../components/personal-information';
import { Articles } from '../components/articles';
import { Box } from 'rebass';

export const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box mt={4}>
      <PersonalInformation />
    </Box>
    <Articles />
  </Layout>
);

export default IndexPage;
