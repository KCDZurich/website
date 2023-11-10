/* eslint-disable react/prop-types */
import React from 'react';

import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import Partners from 'components/pages/home/partners';
import Sponsors from 'components/pages/home/sponsors';
import Tickets from 'components/pages/home/tickets';
import Venue from 'components/pages/home/venue';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = () => (
  <Layout isHomePage>
    <Hero />
    <Venue />
    <Features />
    <Sponsors />
    <Tickets />
    <Partners />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
