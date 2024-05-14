import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';

const Hero = ({ className, title, description, buttonLink, buttonTitle }) => (
  <section
    className={clsx(
      'safe-paddings pb-20 pt-[88px] lg:pt-[4.5rem] md:pb-16 md:pt-16 sm:pb-8 sm:pt-8',
      className
    )}
  >
    <div className="container mt-4 text-center text-primary-1 sm:px-7">
      <h1
        className="font-sans-cyber text-[52px] font-bold lowercase leading-tight text-primary-1 lg:text-[40px] md:text-[32px]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p className="mx-auto mt-5 max-w-[890px] text-2xl leading-normal text-primary-1 md:text-xl sm:text-lg">
          {description}
        </p>
      )}
      {buttonLink && buttonTitle && (
        <Button
          className="mt-7 !text-base md:!text-[11px]"
          size="lg"
          theme="cyber"
          to={buttonLink}
          target="_blank"
        >
          {buttonTitle}
        </Button>
      )}
    </div>
  </section>
);

Hero.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonTitle: PropTypes.string,
};

Hero.defaultProps = {
  className: null,
  description: null,
  buttonLink: null,
  buttonTitle: null,
};

export default Hero;
