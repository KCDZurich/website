import React from 'react';

import Button from 'components/shared/button';

import illustrationLg from './images/hero-illustration-lg.png';
import illustration from './images/hero-illustration.png';

const TITLE = 'Kubernetes Community Days Zürich';

const DESCRIPTION =
  'Experience the power of community at the Kubernetes Community Days in Zurich! When a diverse group of experts comes together to learn, network, and share knowledge on all things cloud native.';

const Hero = () => (
  <section className="safe-paddings bg-[#EDC3C7] bg-opacity-10 pt-28 pb-40 lg:pb-32 md:py-24">
    <div className="container relative md:flex md:flex-col">
      <div>
        <span className="rounded-3xl bg-yellow px-4 py-2 text-xs font-bold uppercase leading-none text-black">
          June 15, 2023
        </span>
        <h1 className="mt-3 max-w-[570px] text-8xl font-bold leading-denser text-primary-1 lg:max-w-[1050px] sm:text-7xl">
          {TITLE}
        </h1>
        <p className="mt-5 max-w-[500px] text-lg leading-normal text-primary-1 lg:max-w-[600px]">
          {DESCRIPTION}
        </p>
        <Button
          className="mt-7 text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
          to="/"
          theme="blue"
          size="lg"
        >
          Get your ticket
        </Button>
      </div>
      <img
        className="absolute -top-44 -left-32 translate-x-1/2 xl:-top-28 xl:-left-8 xl:w-[920px] lg:hidden"
        src={illustration}
        width={1090}
        height="auto"
        loading="eager"
        alt="Illustration"
      />
      <img
        className="hidden w-[800px] lg:mx-auto lg:mt-4 lg:block md:w-[800px] xs:hidden"
        src={illustrationLg}
        width={1200}
        height="auto"
        loading="eager"
        alt="Illustration"
      />
    </div>
  </section>
);

export default Hero;
