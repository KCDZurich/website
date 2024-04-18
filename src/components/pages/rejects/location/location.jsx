import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';

const TITLE = 'Venue information';

const Location = () => (
  <section className="safe-paddings relative pb-32 pt-28 md:py-24 sm:py-16">
    <div className="container-xl">
      <div className="container grid w-full grid-cols-12 gap-8 py-8 lg:gap-10 lg:!px-4 lg:py-[4.5rem] md:flex md:flex-col md:gap-12 md:!px-2 md:py-16 sm:py-8 xs:!px-0">
        <Link
          to="https://goo.gl/maps/ooQufQWKzaRM286Z7"
          className="group relative z-10 col-span-5 flex max-w-[416px] flex-col border border-primary-1 bg-white shadow-[20px_20px_0px_0px_rgba(161,203,211,0.3)] outline outline-4 outline-offset-0 outline-white md:max-w-none md:flex-row md:justify-stretch"
          theme="primary"
        >
          <div className="relative h-[390px] w-full overflow-hidden md:h-auto md:w-auto md:flex-1">
            <StaticImage
              className="absolute inset-[5px] m-auto min-h-[390px] min-w-[404px] md:!hidden"
              src="./images/rejects-location.jpg"
              width={404}
              height={390}
              loading="lazy"
              alt=""
            />
            <StaticImage
              className="absolute inset-0 m-auto !hidden md:!block"
              src="./images/rejects-location-mobile.jpg"
              width={404}
              height={192}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex flex-col px-8 pb-8 pt-7 md:flex-1 sm:p-[18px]">
            <h3 className="font-mono-cyber text-4xl font-bold uppercase leading-[1.125] tracking-[-0.03em] text-primary-1 transition-colors group-hover:text-primary-1/60 sm:text-xl">
              Bluelion incubator
            </h3>
            <address className="mt-3 font-mono-cyber text-3xl not-italic leading-[1.125] text-primary-1/80 transition-colors group-hover:text-primary-1/40 sm:text-base">
              Josefstrasse 219 <br /> 8005 Zürich
            </address>
          </div>
        </Link>
        <div className="col-span-7 mt-14 flex flex-col">
          <h2 className="font-sans-cyber text-[52px] font-bold lowercase leading-tight text-primary-1 lg:text-[40px] md:col-span-12 md:text-[32px] sm:text-[28px]">
            {TITLE}
          </h2>
          <p className="mt-5 text-xl leading-normal md:text-lg sm:text-base">
            Zentralwäscherei (ZWZ) is a 5-minute walk from Bahnhof Hardbrücke.{' '}
            <strong className="font-bold">The Ombre Event Space</strong>
            is located on the second floor and offers enough space for up to 100 people. It is set
            up with a stage, a large video wall, a café seating area with bistro tables, and a
            tribune for the audience.
          </p>
          <p className="mt-4 text-xl leading-normal md:text-lg sm:text-base">
            At the very top of our location, a spacious terrace awaits our guests with an extra
            large dinner table, bistro tables, lounge and BBQ grill. The perfect place to end an
            event with an aperitif.
          </p>
          <p className="mt-4 text-xl font-bold leading-normal md:text-lg sm:text-base">
            We can't wait to see you!
          </p>
          <Button
            className="mt-14 md:mt-7 md:text-[11px]"
            to="https://rejects.kcdzurich.ch/"
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

export default Location;
