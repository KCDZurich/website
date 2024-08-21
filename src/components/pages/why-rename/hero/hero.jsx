import React from 'react';

import pattern from './images/pattern.svg';

const Hero = () => (
  <section className="safe-paddings">
    <div className="container-xl relative overflow-hidden px-0 pb-[172px] sm:pb-[121px]">
      <div className="md:px- bg-[linear-gradient(179deg,#0FDBE2_-4.41%,#DFEFF2_56.83%)] pb-[124px] pt-[137px] xl:px-8 md:py-24 sm:px-4 sm:pb-8 sm:pt-16 ">
        <div className="mx-auto flex max-w-[1008px] flex-col-reverse gap-[15px]">
          <h1 className="max-w-[500px] font-sans-cyber text-[64px] font-bold leading-tight md:max-w-[350px] md:text-[40px] xs:max-w-[300px] xs:text-[36px]">
            Introducing Cloud Native Zürich 2025!
          </h1>
          <p className="text-xl font-semibold leading-none lg:text-base md:text-sm">
            Same Great Event, Brand New Name!
          </p>
        </div>
      </div>
      <img
        className="absolute bottom-0 left-1/2 w-full min-w-[1696px] -translate-x-1/2 sm:min-w-[1200px]"
        src={pattern}
        alt=""
      />
    </div>
  </section>
);

export default Hero;
