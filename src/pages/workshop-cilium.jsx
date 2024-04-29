/* eslint-disable react/prop-types */

import React from 'react';

import Hero from 'components/pages/workshop/hero';
import Information from 'components/pages/workshop/information';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';
import LIST from 'constants/workshops';

const WorkshopGo = () => {
  const data = LIST.find(({ name }) => name === 'cilium');

  return (
    <Layout>
      <Hero title={data.page.title} description={data.page.description} />
      <Information data={data} />
    </Layout>
  );
};

export default WorkshopGo;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.workshopCilium} pathname={pathname} />
);
