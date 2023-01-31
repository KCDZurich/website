/* eslint-disable react/prop-types */
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/shared/content';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const StaticTemplate = ({
  data: {
    mdx: {
      frontmatter: { title },
      body,
    },
  },
}) => (
  <Layout headerClassnames="!bg-white">
    <section className="container">
      <article className="safe-paddings pt-24">
        <h1 className="text-6xl font-bold text-primary-1">{title}</h1>
        <Content className="" content={body} />
        <MDXProvider>{body}</MDXProvider>
      </article>
    </section>
  </Layout>
);

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default StaticTemplate;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
