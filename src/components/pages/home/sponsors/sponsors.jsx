import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';

const title = 'Sponsors';

const Sponsors = () => (
  <section className="safe-paddings relative pt-[125px] lg:pt-0" id="sponsors">
    <div className="container-xl bg-blue-light bg-opacity-90">
      <div className="container flex items-center gap-x-20 py-[66px] lg:gap-x-16 lg:!px-4 lg:py-10 md:flex-col md:gap-y-10">
        <div className="text-2xl leading-normal text-primary-1 lg:text-base">
          <h2 className="font-sans-cyber text-[52px] font-bold lowercase leading-tight lg:text-[40px]">
            {title}
          </h2>
          <p className="mt-4">
            <span className="font-semibold">Kubernetes Community Days</span> is more than an event;
            it's a community-driven movement, and we invite you to be a vital contributor to its
            success. Connect with us today to explore how you can make a lasting impact on the
            future of cloud-native computing.
          </p>
          <Button className="mt-11 !h-14 !px-10" to="mailto:" theme="primary" size="sm">
            Subscribe
          </Button>
        </div>
        <StaticImage
          className="-mr-2 max-w-[560px] shrink-0 lg:mr-0 lg:max-w-[474px]"
          src="./images/sponsors-illustration.png"
          width={549}
          heigth={349}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Sponsors;
