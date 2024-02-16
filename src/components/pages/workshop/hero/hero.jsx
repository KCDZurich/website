import PropTypes from 'prop-types';
import React from 'react';

const Hero = ({ title, description }) => (
  <section className="safe-paddings relative pt-4">
    <div className="container-xl bg-blue-light bg-opacity-90">
      <div className="container grid-gap grid grid-cols-12 py-[72px] lg:!px-4 lg:py-14 md:!px-2 md:py-14 xs:!px-0">
        <h1 className="col-span-4 font-sans-cyber text-[48px] font-bold lowercase leading-tight text-primary-1 lg:text-[40px] md:col-span-12 md:text-[32px]">
          {title}
        </h1>
        <ul className="col-span-8 flex flex-col gap-y-5 md:col-span-12 md:mt-4">
          {description.map((item, index) => (
            <li key={index}>
              <p
                className="text-2xl leading-normal text-primary-1 lg:text-xl sm:text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
};

export default Hero;
