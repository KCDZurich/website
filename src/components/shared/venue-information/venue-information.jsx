import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';

const TITLE = 'Venue information';

const VenueInformation = ({ className }) => (
  <section className={clsx('safe-paddings relative', className)}>
    <div className="container-xl bg-[#FFF4F0]">
      <div className="container grid w-full grid-cols-12 gap-8 py-[88px] lg:gap-10 lg:!px-4 lg:py-[4.5rem] md:flex md:flex-col md:gap-12 md:!px-2 md:py-16 sm:py-8 xs:!px-0">
        <Link
          to="https://goo.gl/maps/ooQufQWKzaRM286Z7"
          className="group relative z-10 col-span-5 flex max-w-[416px] flex-col border border-primary-1 bg-white shadow-[20px_20px_0px_0px_rgba(255,229,219,1)] outline outline-4 outline-offset-0 outline-white md:max-w-none md:flex-row md:justify-stretch"
          theme="primary"
        >
          <div className="relative h-[198px] w-full overflow-hidden md:h-auto md:w-auto md:flex-1">
            <StaticImage
              className="absolute inset-0 m-auto min-h-[198px] min-w-[416px] md:min-h-full md:min-w-[442px]"
              src="./images/card-illustration.jpg"
              width={416}
              height={198}
              loading="lazy"
              alt="card-illustration"
            />
          </div>
          <div className="flex flex-col px-8 pb-8 pt-6 md:flex-1 sm:p-[18px]">
            <h3 className="font-mono-cyber text-4xl font-bold leading-[1.125] tracking-[-0.03em] text-primary-1 transition-colors group-hover:text-primary-1/60 sm:text-xl">
              Google HQ <br />
              at Zürich Europaallee
            </h3>
            <address className="mt-[18px] font-mono-cyber text-3xl not-italic leading-[1.125] text-primary-1/80 transition-colors group-hover:text-primary-1/40 sm:text-base">
              Google EURF <br /> Europaallee 36 <br /> 8004 Zürich
            </address>
          </div>
        </Link>
        <div className="col-span-7 flex flex-col">
          <h2 className="font-sans-cyber text-[52px] font-bold lowercase leading-tight text-primary-1 lg:text-[40px] md:col-span-12 md:text-[32px] sm:text-[28px]">
            {TITLE}
          </h2>
          <p className="mt-5 text-xl leading-normal md:text-lg sm:text-base">
            <b>The Kubernetes Community Days</b> in Zürich will be held at the Google HQ at Zürich
            Europaallee, a modern and convenient location next to the train station. Attendees can
            expect to enjoy a variety of vegetarian and vegan food options throughout the day.
          </p>
          <p className="mt-4 text-xl leading-normal md:text-lg sm:text-base">
            Don’t miss out on the opportunity to connect with fellow attendees and continue the
            conversation at the networking Apéro.
          </p>
          <p className="mt-4 text-xl font-bold leading-normal md:text-lg sm:text-base">
            We can't wait to see you there!
          </p>
          <Button
            className="mt-14 md:mt-7 md:text-[11px]"
            to="https://tickets.kcdzurich.ch/"
            size="lg"
            theme="cyber"
          >
            Get your ticket
          </Button>
        </div>
      </div>
    </div>
  </section>
);

VenueInformation.propTypes = {
  className: PropTypes.string,
};

VenueInformation.defaultProps = {
  className: null,
};

export default VenueInformation;
