/* eslint-disable react/prop-types */
import React from 'react';

import Features from 'components/pages/rejects/features';
import Hero from 'components/pages/rejects/hero';
import Location from 'components/pages/rejects/location';
import Partners from 'components/pages/rejects/partners';
import Speakers from 'components/pages/rejects/speakers';
import Sponsors from 'components/pages/rejects/sponsors';
import Venue from 'components/pages/rejects/venue';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const RejectsPage = () => (
  <Layout isHomePage>
    <Hero />
    <Venue />
    <Features />
    <Speakers />
    <Location />
    <Sponsors />
    <Partners />
  </Layout>
);

export default RejectsPage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.rejects} pathname={pathname} />
);
