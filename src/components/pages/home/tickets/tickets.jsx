import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const title = 'Ticketing coming soon';

const Tickets = () => (
  <section className="safe-paddings">
    <div className="container-xl bg-primary-1">
      <div className="container flex items-center gap-x-20 lg:gap-x-16 lg:!px-5 md:gap-x-4 md:!px-2 xs:flex-col-reverse xs:gap-y-2.5 xs:!px-0 xs:pb-12 xs:pt-4">
        <div className="text-2xl leading-normal text-white lg:text-base md:text-sm xs:text-base">
          <h2 className="font-sans-cyber text-[52px] font-bold lowercase leading-tight text-red lg:text-[40px] md:text-[32px]">
            {title}
          </h2>
          <p className="mt-5 lg:mt-2 md:mt-4 xs:mt-3">
            We will be launching ticketing for the conference in the coming weeks. You will also
            soon be able to book our popular workshops here. <b>Stay tuned!</b>
          </p>
        </div>
        <StaticImage
          className="-mr-2 max-w-[560px] shrink-0 lg:max-w-[480px] md:max-w-[355px] xs:h-[141px] xs:max-w-full"
          src="./images/tickets-illustration.png"
          width={495}
          heigth={336}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Tickets;
