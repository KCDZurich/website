/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/schedule/hero';
import Schedule from 'components/pages/schedule/schedule';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const TITLE = 'Schedule for <time class="text-blue-1 xs:block">15 June, 2023</time>';
const DESCRIPTION =
  "Get ready for an action-packed day. With two tracks and more than 15 sessions to choose from, you'll have plenty of opportunities to learn from experts in the field. The whole event will be held in English.";

const SchedulePage = ({ location }) => (
  <Layout headerClassnames="!bg-white">
    <Hero
      title={TITLE}
      description={DESCRIPTION}
      buttonLink="https://tickets.kcdzurich.ch/"
      buttonTitle="Get your ticket"
    />
    <Schedule location={location} />
  </Layout>
);

export default SchedulePage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.schedule2023} pathname={pathname} />
);
