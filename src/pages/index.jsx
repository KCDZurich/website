/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/hero';
import Venue from 'components/pages/venue';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = () => (
  <Layout>
    <Hero />
    <Venue />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
