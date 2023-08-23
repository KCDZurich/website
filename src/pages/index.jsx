/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/home/hero';
import Partners from 'components/pages/home/partners';
// import Speakers from 'components/pages/home/speakers';
import Venue from 'components/pages/home/venue';
// import Workshops from 'components/pages/home/workshops';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = () => (
  <Layout homepage>
    <Hero />
    <Venue />
    {/* <Speakers location={location} /> */}
    {/* <Workshops /> */}
    <Partners />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
