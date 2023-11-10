import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import cyberBg from './images/cyber-button-bg.png';

const styles = {
  base: 'inline-flex items-center justify-center !leading-none text-center whitespace-nowrap rounded transition-[colors, opacity] duration-200 outline-none font-bold tracking-wide',
  size: {
    lg: 'h-16 px-11 py-[18px] text-lg',
    sm: 'h-12 px-5 text-base',
    xs: 'h-10 px-5 text-xs',
  },
  theme: {
    blue: 'bg-blue-1 text-white hover:bg-blue-2',
    cyber: 'relative min-w-[212px] text-white uppercase rounded border border-primary-1',
    primary:
      'bg-white uppercase text-primary-1 border-[3px] border-primary-1 hover:bg-primary-1 hover:bg-opacity-10',
    'link-primary':
      'font-semibold inline-flex items-baseline leading-none transition-colors text-primary-1 hover:text-blue-1',
  },
};

const Button = ({ className: additionalClassName, to, size, theme, children, ...otherProps }) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {theme === 'cyber' ? (
        <>
          <span className="z-20">{children}</span>
          <img
            className="absolute inset-0 z-10 block h-auto w-full rounded-[3px]"
            src={cyberBg}
            alt=""
          />
        </>
      ) : (
        children
      )}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
  size: null,
};

export default Button;
