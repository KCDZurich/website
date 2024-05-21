import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links.js';

import bgMask from './images/bg-mask.svg';
import ticket from './images/desktop-ticket.svg';
import mobileTicket from './images/mobile-ticket.svg';
import tabletTicket from './images/tablet-ticket.svg';

const Hero = () => (
  <section className="safe-paddings relative">
    <div className="mx-auto max-w-[1696px] overflow-hidden">
      <div className="bg-inner-hero-gradient pb-[136px] pt-[104px] text-center text-xl leading-normal lg:py-20 md:py-20 xs:py-20 xs:text-base">
        <h1 className="mx-auto max-w-[580px] font-sans-cyber text-[52px] font-bold leading-tight text-primary-1 lg:max-w-[440px] lg:text-[40px] md:text-[36px] xs:px-4 xs:text-[32px]">
          wow! you&apos;ve found the secret page!
        </h1>
        <p className="mx-auto mt-3 max-w-[700px] text-xl leading-normal lg:mt-3.5 lg:max-w-[560px] lg:text-lg md:text-base xs:mt-4 xs:px-4">
          To reward your keen eye, we&apos;re giving away a limited number of golden tickets for
          free entry to <strong>KCD Zürich 2024</strong> in June{' '}
          <time dateTime="2024-06-13">13th 2024</time>!
        </p>
        <div className="relative mx-auto mt-10 w-[1336px] lg:left-1/2 lg:mx-0 lg:mt-9 lg:w-[1088px] lg:-translate-x-1/2 md:w-[1082px] xs:mt-11 xs:w-[360px]">
          <img
            className="pointer-events-none -ml-[15px] lg:-ml-[22px] lg:hidden md:-ml-[12px]"
            src={ticket}
            width={1336}
            height={319}
            loading="eager"
            alt="Ticket illustration"
          />
          <img
            className="pointer-events-none mx-auto hidden lg:block xs:hidden"
            src={tabletTicket}
            width={633}
            height={260}
            loading="eager"
            alt="Tablet Ticket illustration"
          />
          <img
            className="pointer-events-none mx-auto hidden xs:block"
            src={mobileTicket}
            width={281}
            height={530}
            loading="eager"
            alt="Mobile Ticket illustration"
          />
          <span className="absolute bottom-28 left-[510px] z-10 block font-mono-cyber text-5xl font-bold uppercase leading-normal lg:bottom-[90px] lg:left-[410px] lg:text-[32px] md:left-[406px] xs:bottom-[300px] xs:left-[74px] xs:text-[36px]">
            freeasinbeer
          </span>
        </div>
        <p className="mt-7 lg:mt-8 lg:text-lg md:mt-10 xs:px-8 xs:text-base">
          Just use this code on{' '}
          <Link
            className="border-b-2 border-transparent border-opacity-10 font-semibold text-orange transition-colors duration-200 hover:border-orange"
            to={LINKS.tickets.to}
            target="_blank"
          >
            tickets.kcdzurich.ch
          </Link>{' '}
          to get a free ticket!
        </p>
      </div>
      <img
        className="pointer-events-none relative left-1/2 min-w-[1505px] -translate-x-1/2 md:min-w-[1164px] xs:min-w-[1124px]"
        src={bgMask}
        width={1704}
        height={172}
        alt="Mask illustration"
      />
    </div>
  </section>
);

export default Hero;
