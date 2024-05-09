import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';

const Hero = ({ className, title, description, buttonLink, buttonTitle }) => (
  <section
    className={clsx('safe-paddings pb-10 pt-24 lg:pt-[4.5rem] md:pb-4 md:pt-16 sm:py-8', className)}
  >
    <div className="container mt-4 text-center text-primary-1 sm:px-7">
      <h1
        className="text-6xl font-bold leading-denser tracking-[-0.01em] md:text-4xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p className="mx-auto mt-9 max-w-[865px] text-2xl leading-normal md:mt-6 md:text-xl sm:text-lg">
          {description}
        </p>
      )}
      {buttonLink && buttonTitle && (
        <Button
          className="mt-10 shadow-xl hover:bg-blue-2 hover:shadow-[0px_15px_30px_#adadad] md:mt-8 xs:mt-7 xs:w-full"
          size="lg"
          theme="blue"
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
