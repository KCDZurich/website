import clsx from 'clsx';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import ArrowIcon from 'icons/arrow-right.inline.svg';

const styles = {
  base: 'font-semibold inline-flex items-baseline gap-1.5 leading-none transition-colors duration-200 group relative',
  size: {
    md: 'font-bold text-base leading-tight tracking-[0.32px] uppercase',
  },
  theme: {
    primary: 'text-primary-1 hover:text-blue-1',
    'primary-new': 'text-primary-1 hover:text-[#06B3B8]',
    'blue-underlined':
      'text-blue-1 border-b-2 hover:border-blue-1 pb-0.5 border-transparent transition-colors duration-200',
  },
};

const Link = ({
  className: additionalClassName,
  size,
  theme,
  to,
  children,
  withArrow,
  ...props
}) => {
  const className = clsx(
    size && theme && styles.base,
    styles.size[size],
    styles.theme[theme],
    additionalClassName
  );

  const arrow = <ArrowIcon className="h-[11px]" />;

  // eslint-disable-next-line react/prop-types
  if (to.startsWith('/') && !props.download) {
    return (
      <GatsbyLink className={className} to={to} {...props}>
        {children}
        {withArrow && arrow}
      </GatsbyLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
      {withArrow && arrow}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
  withArrow: PropTypes.bool,
};

Link.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
  withArrow: false,
};

export default Link;
