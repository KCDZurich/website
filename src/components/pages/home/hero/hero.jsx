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
    <div className="container py-40 lg:py-[88px] md:py-16">
      <span className="ml-1 text-xl font-medium leading-normal text-white md:text-[13px]">
        // conference <time dateTime="2024-06-13">{dateString}</time>
      </span>
      <h1 className="mt-3 max-w-[480px] font-sans-cyber text-[72px] font-extrabold leading-denser tracking-tight text-primary-1 lg:max-w-[400px] lg:text-[64px] md:max-w-[320px] md:text-[40px]">
        {title}
      </h1>
      <p className="mt-4 max-w-[440px] text-base font-medium leading-relaxed text-primary-1 md:max-w-[300px] md:text-sm">
        {description}
      </p>
      <Button className="mt-12 !text-base md:mt-7" theme="cyber" size="lg" to={buttonURL}>
        {buttonText}
      </Button>
    </div>
    <StaticImage
      className="!absolute -top-[72px] left-1/2 -z-10 w-[1680px] -translate-x-1/2 lg:-top-[60px] lg:w-[1370px] md:-top-[73px] md:w-[1100px]"
      src="./images/hero-illustration.webp"
      width={1680}
      height={831}
      loading="eager"
      alt="Hero illustration"
    />
  </section>
);

export default Hero;
