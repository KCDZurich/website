/* eslint-disable react/prop-types */
import React from 'react';

import Archive from 'components/pages/archive/archive';
import Gallery from 'components/pages/archive/gallery';
import Hero from 'components/pages/archive/hero';
import Podcast from 'components/pages/archive/podcast';
import Sponsors from 'components/pages/archive/sponsors';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const ArchivePage = () => (
  <Layout>
    <Hero year="2024" />
    <Podcast year="2024" />
    <Archive year="2024" />
    <Sponsors year="2024" />
    <Gallery year="2024" />
  </Layout>
);

export default ArchivePage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.archive2024} pathname={pathname} />
);
