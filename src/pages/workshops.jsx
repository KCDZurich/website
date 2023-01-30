/* eslint-disable react/prop-types */
import React from 'react';

import Acend from 'components/pages/workshops/acend';
import Hero from 'components/pages/workshops/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const Workshops = () => (
  <Layout headerClassnames="bg-white">
    <Hero />
    <Acend />
  </Layout>
);

export default Workshops;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
