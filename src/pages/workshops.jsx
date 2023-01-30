/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/workshops/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const Workshops = () => (
  <Layout headerClassnames="bg-white">
    <Hero />
  </Layout>
);

export default Workshops;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
