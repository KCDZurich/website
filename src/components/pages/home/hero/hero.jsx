import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';

const dateString = 'june 13th 2024';
const title = 'KCD Zurich 2024';
const description =
  'Experience the power of community at the Kubernetes Community Days in Zurich! When a diverse group of experts comes together to learn, network, and share knowledge on all things cloud native.';
const buttonURL = 'mailto:milena@kcdzurich.ch';
const buttonText = 'Get All News';

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
      <Button
        className="z-[1] mt-12 !text-base md:mt-9 md:!text-[11px] sm:mt-8"
        theme="cyber"
        size="lg"
        to={buttonURL}
      >
        {buttonText}
      </Button>
    </div>
    <StaticImage
      className="pointer-events-none !absolute -top-[76px] left-1/2 -z-10 w-[1696px] -translate-x-1/2 lg:-top-[60px] lg:w-[1370px] md:-top-[48px] md:w-[1100px] xs:!hidden"
      src="./images/hero-desktop.png"
      formats={['auto', 'webp']}
      width={1696}
      height={832}
      loading="eager"
      alt="Hero illustration"
    />
    <StaticImage
      className="pointer-events-none !absolute left-1/2 top-0 -z-10 !hidden h-[623px] w-full min-w-[360px] -translate-x-1/2 object-contain xs:!block"
      src="./images/hero-mobile.jpg"
      layout="fullWidth"
      width={360}
      height={623}
      loading="eager"
      alt="Mobile hero illustration"
    />
  </section>
);

export default Hero;
