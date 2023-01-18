import React from 'react';

import Button from 'components/shared/button';

import illustration from './images/hero-illustration.svg';

const TITLE = 'Kubernetes Community Days Zürich';

const DESCRIPTION =
  'Experience the power of community at the Kubernetes Community Days in Zurich! When a diverse group of experts comes together to learn, network, and share knowledge on all things cloud native.';

const Hero = () => (
  <section className="safe-paddings relative bg-[#EDC3C7] bg-opacity-10 pt-28 pb-40">
    <div className="container flex">
      <div>
        <span className="rounded-3xl bg-yellow px-4 py-2 text-xs font-bold uppercase leading-none text-black">
          June 15, 2023
        </span>
        <h1 className="mt-3 max-w-[570px] text-8xl font-bold leading-denser text-primary-1">
          {TITLE}
        </h1>
        <p className="mt-5 max-w-[500px] text-lg leading-normal text-primary-1">{DESCRIPTION}</p>
        <Button className="mt-7 text-white" to="/" theme="blue" size="lg">
          Get your ticket
        </Button>
      </div>
      <img
        className="center absolute left-52 -top-1 translate-x-1/2"
        src={illustration}
        width={1090}
        height={840}
        loading="eager"
        alt="Illustration"
      />
    </div>
  </section>
);

export default Hero;
