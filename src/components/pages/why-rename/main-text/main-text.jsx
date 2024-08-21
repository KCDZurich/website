import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const MainText = ({ title, content, className }) => (
  <section className={clsx('safe-paddings pt-24 lg:pt-16 md:pt-10', className)}>
    <div className="container-sm">
      <h2 className="font-sans-cyber text-[48px] font-bold lowercase leading-tight lg:text-[40px] md:text-[32px] sm:[&_br]:hidden">
        {title}
      </h2>
      <div className="mt-7 flex flex-col gap-y-4 pr-px text-lg leading-normal lg:text-base sm:gap-y-3 sm:text-sm">
        {content}
      </div>
    </div>
  </section>
);

MainText.propTypes = {
  title: PropTypes.elementType.isRequired,
  content: PropTypes.elementType.isRequired,
  className: PropTypes.string,
};

MainText.defaultProps = {
  className: '',
};

export default MainText;
