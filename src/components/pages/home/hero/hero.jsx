import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';

const dateString = 'june 13th 2024';
const title = 'KCD Zurich 2024';
const description =
  'Experience the power of community at the Kubernetes Community Days in Zurich! When a diverse group of experts comes together to learn, network, and share knowledge on all things cloud native.';
const buttonURL = '/';
const buttonText = 'Get All News';

const Hero = () => (
  <section className="safe-paddings relative">
    <div className="container py-40 md:flex md:flex-col md:items-center md:text-center">
      <span className="ml-1 text-xl font-medium leading-normal text-white">
        // conference <time dateTime="2024-06-13">{dateString}</time>
      </span>
      <h1 className="mt-3 max-w-[480px] font-sans-cyber text-[72px] font-extrabold leading-denser tracking-tight text-primary-1 lg:max-w-[400px] sm:text-7xl">
        {title}
      </h1>
      <p className="mt-4 max-w-[440px] text-base font-medium leading-relaxed text-primary-1 lg:max-w-[500px]">
        {description}
      </p>
      <Button className="mt-12 !text-base" theme="cyber" size="lg" to={buttonURL}>
        {buttonText}
      </Button>
    </div>
    <StaticImage
      className="!absolute -top-[72px] left-1/2 -z-10 w-[1680px] -translate-x-1/2"
      src="./images/hero-illustration.webp"
      width={1680}
      height={831}
      loading="eager"
      alt="Hero illustration"
    />
  </section>
);

export default Hero;
