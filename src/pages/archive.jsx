/* eslint-disable react/prop-types */
import React from 'react';

import Archive from 'components/pages/archive/archive';
// import Gallery from 'components/pages/archive/gallery';
import Hero from 'components/pages/archive/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const ArchivePage = () => (
  <Layout>
    <Hero />
    <Archive />
    {/* <Gallery /> */}
  </Layout>
);

export default ArchivePage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.archive} pathname={pathname} />
);
