/* eslint-disable react/prop-types */
import React from 'react';

import Experts from 'components/pages/experts';
import Hero from 'components/pages/hero';
import Schedule from 'components/pages/schedule';
import Venue from 'components/pages/venue';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = () => (
  <Layout>
    <Hero />
    <Venue />
    <Experts />
    <Schedule />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
