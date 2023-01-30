/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/argo-workshop/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const WorkshopArgo = () => (
  <Layout>
    <Hero />
  </Layout>
);

export default WorkshopArgo;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
