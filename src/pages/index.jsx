/* eslint-disable react/prop-types */
import React from 'react';

import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import Partners from 'components/pages/home/partners';
import Proposal from 'components/pages/home/proposal';
import Sponsors from 'components/pages/home/sponsors';
import Venue from 'components/pages/home/venue';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = () => (
  <Layout isHomePage>
    <Hero />
    <Venue />
    <Features />
    <Proposal />
    <Sponsors />
    <Partners />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
