/* eslint-disable react/prop-types */

import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hero from 'components/shared/workshop-hero/hero';
import Information from 'components/shared/workshop-information';
import SEO_DATA from 'constants/seo-data';

const TITLE = 'AWS Serverless';

const DESCRIPTION = [
  'Great ideas usually start on a napkin. Where do they go from there? Ideas are converted to mockup screens, often with the Figma tool. Next step is creation of functional front-end components that are used in some frontend web frameworks, e.g. the React framework. That leads to figuring out how and where to host that frontend code. Next question is how to develop and test backend logic locally, before pushing it to the cloud somewhere. Once all the pieces are developed, the question becomes how to script the infrastructure as code and create continuous deployment pipelines in the cloud.',
  'This workshop will guide you through all the previous steps using the latest AWS serverless services. The workshop is new and original, developed by arch.cloud exclusively for the KDC event. Some of the services and techniques that will be demonstrated have not been seen in other workshops yet.',
];

const WorkshopGo = () => (
  <Layout>
    <Hero title={TITLE} description={DESCRIPTION} />
    <Information itemName="aws" />
  </Layout>
);

export default WorkshopGo;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.workshopAws} pathname={pathname} />
);
