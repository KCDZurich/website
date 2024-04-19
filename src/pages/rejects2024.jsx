/* eslint-disable react/prop-types */
import React from 'react';

import Features from 'components/pages/rejects/features';
import Hero from 'components/pages/rejects/hero';
import Location from 'components/pages/rejects/location';
import Partners from 'components/pages/rejects/partners';
import Sponsors from 'components/pages/rejects/sponsors';
import Venue from 'components/pages/rejects/venue';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const RejectsPage = () => (
  <Layout isHomePage>
    <Hero />
    <Venue />
    <Features />
    <Location />
    <Sponsors />
    <Partners />
  </Layout>
);

export default RejectsPage;

export const Head = ({ location: { pathname } }) => (
  <SEO
    title="KCD Zürich Rejects 2024"
    description="KCD Zürich Rejects on June 5th! This unique half-day event brings together tech enthusiasts and professionals for inspiring talks,  networking, and a stunning rooftop Apéro. Dive into discussions on the latest tech trends and connect with the community in the heart of Zürich."
    ogImagePathname="/images/rejects-social-preview.jpg"
    pathname={pathname}
  />
);
