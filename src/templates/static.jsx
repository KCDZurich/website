/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/shared/content';
import Layout from 'components/shared/layout';
// import SEO from 'components/shared/seo';

const StaticTemplate = ({
  data: {
    mdx: {
      frontmatter: { title },
    },
  },
  children,
}) => {
  // const info = mdx;

  console.log(children);

  return (
    <Layout>
      <article className="safe-paddings 3xl:py-44 py-48 2xl:py-40 xl:py-32 lg:pt-12 lg:pb-24 md:pt-6 md:pb-20">
        <h1 className="t-5xl font-semibold">{title}</h1>
        <Content className="mt-8 2xl:mt-7 xl:mt-6" content={children} asHTML />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export default StaticTemplate;

// export const Head = ({
//   location: { pathname },
//   data: {
//     mdx: {
//       frontmatter: { title },
//     },
//   },
// }) => <SEO pathname={pathname} {...SEO_DATA.static({ title })} />;

// export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
