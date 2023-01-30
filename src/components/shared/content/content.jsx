import { MDXProvider } from '@mdx-js/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import AnchorHeading from 'components/shared/anchor-heading';

const components = {
  h2: AnchorHeading('h2'),
  h3: AnchorHeading('h3'),
};

const Content = ({ className, content, asHTML }) => {
  <div className={clsx('prose-doc prose dark:prose-invert xs:prose-code:break-words', className)}>
    {asHTML ? (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    ) : (
      <MDXProvider components={components}>{content}</MDXProvider>
    )}
  </div>;
};

Content.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  asHTML: PropTypes.bool,
};

Content.defaultProps = {
  className: null,
  asHTML: false,
};

export default Content;
