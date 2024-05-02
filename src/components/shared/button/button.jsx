import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Link from 'components/shared/link';

import cyberHoverBg from './images/cyber-button-bg-hover.png';
import cyberBg from './images/cyber-button-bg.png';

const styles = {
  base: 'inline-flex items-center justify-center !leading-none text-center whitespace-nowrap transition-[colors, opacity] duration-200 outline-none font-bold tracking-wide',
  size: {
    lg: 'h-16 px-11 py-[18px] text-lg md:px-8 md:py-2 md:!h-11',
    sm: 'h-12 px-5 text-base md:!h-10 md:!px-7 xs:!text-base',
    xs: 'h-10 px-5 text-xs',
  },
  theme: {
    blue: 'bg-blue-1 text-white hover:bg-blue-2 rounded',
    cyber:
      'relative w-[211px] font-semibold text-white uppercase rounded border border-primary-1 md:w-auto md:max-w-[144px]',
    primary: 'bg-white uppercase text-primary-1 border-[3px] border-primary-1 hover:bg-blue-light',
    default: 'border-0 bg-transparent text-primary-1 hover:bg-opacity-10',
    'link-primary':
      'font-semibold inline-flex items-baseline leading-none transition-colors text-primary-1 hover:text-[#06B3B8]',
    'link-red':
      'font-mono-cyber text-orange border-2 border-transparent hover:border-orange !px-2 !py-1 !h-auto !w-auto',
    'link-black':
      'font-mono-cyber text-primary-1 hover:text-orange !px-0 !py-0 !h-auto !w-auto lowercase md:!h-auto transition-colors',
  },
};

const Button = ({ className: additionalClassName, to, size, theme, children, ...otherProps }) => {
  const [isCyberButtonHovered, setIsCyberButtonHovered] = useState(false);
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={className}
      to={to}
      {...otherProps}
      onMouseEnter={() => setIsCyberButtonHovered(true)}
      onMouseLeave={() => setIsCyberButtonHovered(false)}
    >
      {theme === 'cyber' ? (
        <>
          <span className="z-20">{children}</span>
          {isCyberButtonHovered ? (
            <img
              className="absolute inset-0 z-10 block h-auto w-full rounded-[3px]"
              src={cyberHoverBg}
              alt=""
            />
          ) : (
            <img
              className="absolute inset-0 z-10 block h-auto w-full rounded-[3px]"
              src={cyberBg}
              alt=""
            />
          )}
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
