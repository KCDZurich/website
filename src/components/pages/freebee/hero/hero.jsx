import React from 'react';

import Link from 'components/shared/link';

import bgMask from './images/bg-mask.svg';
import ticket from './images/ticket.svg';

const Hero = () => (
  <section className="safe-paddings relative">
    <div className="mx-auto max-w-[1696px] overflow-hidden">
      <div className="bg-inner-hero-gradient pb-[136px] pt-[104px] text-center text-xl leading-normal md:py-20 xs:py-11">
        <h1 className="mx-auto max-w-[520px] font-sans-cyber text-[48px] font-bold leading-tight text-primary-1 md:max-w-[440px] md:text-[40px] sm:px-4 sm:text-[36px]">
          wow! you&apos;ve found the secret page!
        </h1>
        <p className="mx-auto mt-3 max-w-[700px] text-xl leading-normal md:max-w-[440px] md:text-lg sm:px-4 sm:text-base">
          To reward your keen eye, we&apos;re giving away a limited number of golden tickets for
          free entry to <strong>KCD Zürich 2024</strong> in June{' '}
          <time dateTime="2024-06-13">13th 2024</time>!
        </p>
        <div className="relative mx-auto mt-14 w-[1336px] lg:left-1/2 lg:-translate-x-1/2 md:w-[1060px] 2xs:left-[33%] 2xs:w-[960px]">
          <img
            className="pointer-events-none"
            src={ticket}
            width={1336}
            height={305}
            loading="eager"
            alt="Ticket illustration"
          />
          <span className="absolute bottom-28 left-[525px] z-10 block font-mono-cyber text-5xl font-bold uppercase leading-normal md:bottom-[88px] md:left-[404px] md:text-4xl 2xs:bottom-[82px] 2xs:left-[380px] 2xs:text-3xl">
            freeasinbeer
          </span>
        </div>
        <p className="mt-7 md:text-lg sm:px-4 sm:text-base">
          Just use this code on{' '}
          <Link
            className="border-b-2 border-transparent border-opacity-10 font-semibold text-orange transition-colors duration-200 hover:border-orange"
            to="https://tickets.kcdzurich.ch/"
            target="_blank"
          >
            tickets.kcdzurich.ch
          </Link>{' '}
          to get a free ticket!
        </p>
      </div>
      <img
        className="pointer-events-none min-w-[1200px]"
        src={bgMask}
        width={1704}
        height={172}
        alt="Mask illustration"
      />
    </div>
  </section>
);

export default Hero;
