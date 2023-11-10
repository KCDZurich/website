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
  <section className="safe-paddings relative xs:pb-[66.666%]">
    <div className="container py-40 lg:py-[88px] md:py-16 xs:py-12">
      <span className="ml-1 text-xl font-medium leading-normal text-white md:text-[13px]">
        // conference <time dateTime="2024-06-13">{dateString}</time>
      </span>
      <h1 className="mt-3 max-w-[480px] font-sans-cyber text-[72px] font-extrabold leading-denser tracking-tight text-primary-1 lg:max-w-[400px] lg:text-[64px] md:max-w-[320px] md:text-[40px] xs:text-[36px]">
        {title}
      </h1>
      <p className="mt-4 max-w-[440px] text-base font-medium leading-relaxed text-primary-1 md:max-w-[300px] md:text-sm xs:mt-2 xs:max-w-full xs:text-[12px]">
        {description}
      </p>
      <Button className="mt-12 !text-base md:mt-7 xs:mt-9" theme="cyber" size="lg" to={buttonURL}>
        {buttonText}
      </Button>
    </div>
    <StaticImage
      className="!absolute -top-[72px] left-1/2 -z-10 w-[1680px] -translate-x-1/2 lg:-top-[60px] lg:w-[1370px] md:-top-[73px] md:w-[1100px] xs:!hidden"
      src="./images/hero-illustration.png"
      formats={['auto', 'webp']}
      width={1680}
      height={831}
      loading="eager"
      alt="Hero illustration"
    />
    <StaticImage
      className="!absolute left-1/2 top-0 -z-10 !hidden h-[623px] w-full min-w-[360px] -translate-x-1/2 object-contain xs:!block"
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
