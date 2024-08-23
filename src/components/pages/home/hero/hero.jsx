import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS from 'constants/links';

const title = 'Cloud Native Zürich';
const description =
  'Experience the power of community at the Cloud Native Zürich! When a diverse group of experts comes together to learn, network, and share knowledge on all things cloud native.';

const mainButtonURL = LINKS.archive2024.to;
const mainButtonText = 'KCD 2024 Recap';

const Hero = () => (
  <section className="safe-paddings relative xs:max-h-[623px] xs:pb-[66.666%]">
    <div className="container py-[174px] 2xl:pb-[180px] lg:py-[114px] md:py-[92px] sm:py-[94px] xs:py-12">
      <h1 className="mt-[9px] max-w-[500px] font-sans-cyber text-[72px] font-extrabold leading-denser tracking-tight text-primary-1 lg:max-w-[460px] lg:text-[64px] md:mt-0 md:max-w-[320px] md:text-[40px] xs:text-[36px]">
        {title}
      </h1>
      <p className="mt-3.5 max-w-[420px] text-base font-medium leading-relaxed text-primary-1 md:mt-3 md:max-w-[320px] md:text-sm xs:mt-2 xs:max-w-[310px] xs:text-[12px]">
        {description}
      </p>
      <div className="mt-12 flex items-center gap-8 lg:gap-3.5 md:mt-9 md:flex-col md:items-start sm:mt-8">
        <Button
          className="z-[1] !text-base !tracking-wider md:!text-[13px]"
          theme="cyber"
          size="lg"
          to={mainButtonURL}
        >
          {mainButtonText}
        </Button>
        <Link to={LINKS.whyRename.to} theme="primary-new" size="md" withArrow>
          {LINKS.whyRename.title}
        </Link>
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
      className="pointer-events-none !absolute -top-[60px] left-1/2 -z-10 !mr-40 !hidden w-[1370px] -translate-x-[52%] bg-hero-gradient lg:!block md:-top-[48px] md:w-[1100px] md:-translate-x-1/2 xs:!hidden"
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
