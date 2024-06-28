import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';

import SponsorsList from './sponsors-list';

const title = 'Sponsors';
const subtitle = 'Already Joined';

const Sponsors = () => (
  <section className="safe-paddings relative scroll-mt-4" id="sponsors">
    <div className="container-xl bg-blue-light bg-opacity-90">
      <div className="container flex items-center gap-x-20 py-[72px] lg:gap-x-16 lg:!px-4 lg:py-14 md:gap-x-4 md:!px-2 md:py-14 xs:flex-col-reverse xs:gap-y-4 xs:!px-0">
        <div className="text-2xl leading-normal text-primary-1 lg:text-base md:text-sm xs:text-base">
          <h2 className="font-sans-cyber text-[52px] font-bold lowercase leading-tight lg:text-[40px] md:text-[32px]">
            {title}
          </h2>
          <p className="mt-4 lg:mt-3 xs:mt-4">
            <span className="font-semibold">Kubernetes Community Days</span> is more than an event;
            it's a community-driven movement, and we invite you to be a vital contributor to its
            success. Connect with us today to explore how you can make a lasting impact on the
            future of cloud-native computing.
          </p>
          <Button
            className="!h-13 mt-9 !px-10 lg:mt-12 md:mt-6 md:!text-[11px] xs:mt-8"
            to="mailto:hello@kcdzurich.ch"
            theme="primary"
            size="sm"
          >
            Contact Us
          </Button>
        </div>
        <StaticImage
          className="-mr-2 max-w-[560px] shrink-0 lg:mr-0 lg:max-w-[474px] md:!hidden"
          src="./images/sponsors-illustration.png"
          width={549}
          heigth={349}
          alt=""
          loading="lazy"
        />
        <StaticImage
          className="-mr-4 -mt-5 !hidden max-w-[355px] shrink-0 md:!block xs:mr-0 xs:mt-0 xs:max-w-[95%]"
          src="./images/sponsors-tablet.png"
          width={355}
          heigth={221}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
    <div className="container-xl relative bg-blue-super-light py-24 before:absolute before:left-0 before:top-0 before:h-12 before:w-full before:bg-sponsors-separator before:bg-cover lg:py-14 lg:before:h-9 md:py-10 sm:before:h-8">
      <div className="container lg:!px-4 md:!px-2 xs:!px-0">
        <h2 className="font-mono-cyber text-4xl font-bold uppercase tracking-wide lg:text-[32px] md:text-2xl xs:text-[32px]">
          {subtitle}
        </h2>
        <SponsorsList />
      </div>
    </div>
  </section>
);

export default Sponsors;
