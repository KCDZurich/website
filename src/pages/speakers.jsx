/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/speakers/hero';
import Speakers from 'components/pages/speakers/speakers';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';
import endpoints from 'constants/sessionize';

const SpeakersPage = () => (
  <Layout headerClassnames="!bg-white">
    <Hero />
    <Speakers endpoint={endpoints.speakers} />
  </Layout>
);

export default SpeakersPage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.speakers} pathname={pathname} />
);
