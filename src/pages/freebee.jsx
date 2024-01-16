/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/freebee/hero';
import LearnMore from 'components/pages/freebee/learn-more';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const FreeBeePage = () => (
  <Layout>
    <Hero />
    <LearnMore />
  </Layout>
);

export default FreeBeePage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.freebee} pathname={pathname} isNoIndex />
);
