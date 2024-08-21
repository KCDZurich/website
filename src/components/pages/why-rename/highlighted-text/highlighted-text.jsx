import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const HighlightedText = ({ title, content, className }) => (
  <section className="highlighted-text safe-paddings pt-24 lg:pt-16 md:pt-10">
    <div className={clsx('container-xl bg-blue-light/90 py-[72px] lg:py-12 md:py-8', className)}>
      <div className="mx-auto flex max-w-[1216px] justify-center gap-x-[68px] md:gap-x-8 sm:flex-col sm:gap-y-5">
        <h2 className="w-[348px] shrink-0 font-sans-cyber text-[48px] font-bold lowercase leading-tight lg:w-72 lg:text-[40px] md:w-60 md:text-[32px] sm:w-full">
          {title}
        </h2>
        <p className="max-w-[800px] text-lg leading-normal lg:text-base sm:text-sm">{content}</p>
      </div>
    </div>
  </section>
);

HighlightedText.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.elementType]).isRequired,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.elementType]).isRequired,
  className: PropTypes.string,
};

HighlightedText.defaultProps = {
  className: '',
};

export default HighlightedText;
