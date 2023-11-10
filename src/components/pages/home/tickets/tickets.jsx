import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const title = 'Ticketing coming soon';

const Tickets = () => (
  <section className="safe-paddings">
    <div className="container-xl bg-primary-1">
      <div className="container flex items-center gap-x-20 md:flex-col md:gap-y-10">
        <div className="text-2xl leading-normal text-white">
          <h2 className="font-sans-cyber text-[52px] font-bold lowercase leading-tight text-red">
            {title}
          </h2>
          <p className="mt-5">
            We will be launching ticketing for the conference in the coming weeks. You will also
            soon be able to book our popular workshops here. <b>Stay tuned!</b>
          </p>
        </div>
        <StaticImage
          className="-mr-2 max-w-[560px] shrink-0 lg:max-w-[700px]"
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
