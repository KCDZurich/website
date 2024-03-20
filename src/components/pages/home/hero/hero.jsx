import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';

import ArrowIcon from './images/arrow.inline.svg';

const dateString = 'june 13th 2024';
const title = 'KCD Zürich 2024';
const description =
  'Experience the power of community at the Kubernetes Community Days in Zürich! When a diverse group of experts comes together to learn, network, and share knowledge on all things cloud native.';

const mainButtonURL = 'https://tickets.kcdzurich.ch/';
const mainButtonText = 'Get Your Ticket';

const secondaryButtonURL = '/workshops';
const secondaryButtonText = 'book a workshop';

const Hero = () => (
  <section className="safe-paddings relative xs:max-h-[623px] xs:pb-[66.666%]">
    <div className="container py-40 lg:py-[88px] md:pb-[66px] md:pt-[85px] xs:py-12">
      <span className="ml-1 text-xl font-medium leading-normal text-white md:text-[13px]">
        // conference <time dateTime="2024-06-13">{dateString}</time>
      </span>
      <h1 className="mt-3 max-w-[480px] font-sans-cyber text-[72px] font-extrabold leading-denser tracking-tight text-primary-1 lg:max-w-[400px] lg:text-[64px] md:max-w-[320px] md:text-[40px] xs:text-[36px]">
        {title}
      </h1>
      <p className="mt-4 max-w-[440px] text-base font-medium leading-relaxed text-primary-1 md:mt-3 md:max-w-[300px] md:text-sm xs:mt-2 xs:max-w-[330px] xs:text-[12px]">
        {description}
      </p>
      <div className="mt-12 flex items-center gap-6 lg:flex-col lg:items-start md:mt-9 sm:mt-8">
        <Button
          className="z-[1] !text-base md:!text-[11px] "
          theme="cyber"
          size="lg"
          to={mainButtonURL}
          target="_blank"
          rel="nofollow noreferrer"
        >
          {mainButtonText}
        </Button>
        <Button
          className="z-[1] inline-flex items-center gap-2 !text-2xl leading-normal lg:!text-xl md:!text-lg"
          theme="link-black"
          size="lg"
          to={secondaryButtonURL}
          rel="nofollow noreferrer"
        >
          <span>{secondaryButtonText}</span>
          <ArrowIcon className="mt-[3px] h-2 w-auto" />
        </Button>
      </div>
    </div>
    <StaticImage
      className="hero-clip-path pointer-events-none !absolute -top-[76px] left-1/2 -z-10 w-[1696px] -translate-x-1/2 after:absolute after:left-1/2 after:top-0 after:-z-20 after:h-full after:w-full after:-translate-x-1/2 after:bg-hero-gradient lg:!hidden"
      src="./images/hero-desktop.png"
      formats={['auto', 'webp']}
      width={1696}
      height={832}
      loading="eager"
      alt="Hero illustration"
    />
    <StaticImage
      className="pointer-events-none !absolute -top-[60px] left-1/2 -z-10 !hidden w-[1370px] -translate-x-1/2 bg-hero-gradient lg:!block md:-top-[48px] md:w-[1100px] xs:!hidden"
      src="./images/hero-tablet.png"
      formats={['auto', 'webp']}
      loading="eager"
      alt="Tablet hero illustration"
    />
    <StaticImage
      className="pointer-events-none !absolute left-1/2 top-0 -z-10 !hidden max-h-[623px] w-full min-w-[360px] -translate-x-1/2 bg-hero-mobile-gradient xs:!block"
      src="./images/hero-mobile.jpg"
      loading="eager"
      alt="Mobile hero illustration"
    />
  </section>
);

export default Hero;
