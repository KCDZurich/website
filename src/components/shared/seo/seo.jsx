/* eslint-disable react/prop-types */
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const defaultTitle = 'Kubernetes Community Days Zürich';
const defaultDescription =
  'Experience the power of community at the Kubernetes Community Days in Zürich!';

const SEO = ({ title, description, pathname, ogImagePathname, isNoIndex }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, siteUrl, siteImage },
    },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
          siteImage
        }
      }
    }
  `);

  const currentTitle = title || defaultTitle || siteTitle;
  const currentDescription = description || defaultDescription || siteDescription;
  const currentUrl = pathname !== '/' ? `${siteUrl}${pathname}` : siteUrl;
  const socialImage = `${siteUrl}${ogImagePathname || siteImage}`;

  return (
    <>
      <title key={currentTitle}>{currentTitle}</title>
      {/* General */}
      <meta name="description" content={currentDescription} />
      {/* Open Graph */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {isNoIndex && <meta name="robots" content="noindex" />}
    </>
  );
};

export default SEO;
