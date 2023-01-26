/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/hero';
import Partners from 'components/pages/partners';
import Proposal from 'components/pages/proposal';
import Schedule from 'components/pages/schedule';
import Speakers from 'components/pages/speakers';
import Sponsors from 'components/pages/sponsors';
import Venue from 'components/pages/venue';
import Workshops from 'components/pages/workshops';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = () => (
  <Layout>
    <Hero />
    <Venue />
    <Speakers />
    <Schedule />
    <Proposal />
    <Workshops />
    <Sponsors />
    <Partners />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
