/* eslint-disable react/prop-types */
import React from 'react';

import Experts from 'components/pages/experts';
import Hero from 'components/pages/hero';
import Participate from 'components/pages/participate';
import Partners from 'components/pages/partners';
import Schedule from 'components/pages/schedule';
import Sponsors from 'components/pages/sponsors';
import Venue from 'components/pages/venue';
import Workshops from 'components/pages/workshops';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = () => (
  <Layout>
    <Hero />
    <Venue />
    <Experts />
    <Schedule />
    <Participate />
    <Workshops />
    <Sponsors />
    <Partners />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
