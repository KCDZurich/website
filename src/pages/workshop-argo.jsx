/* eslint-disable react/prop-types */

import React from 'react';

import Hero from 'components/pages/workshop/hero';
import Information from 'components/pages/workshop/information';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';
import LIST from 'constants/workshops';

const WorkshopArgo = () => {
  const data = LIST.find(({ name }) => name === 'argo');

  return (
    <Layout>
      <Hero title={data.page.title} description={data.page.description} />
      <Information itemName="argo" />
    </Layout>
  );
};

export default WorkshopArgo;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.workshopArgo} pathname={pathname} />
);
