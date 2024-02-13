import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';

import CardIllusrtation from './images/card-illustration.jpg';

const TITLE = 'Venue information';

const Venue = () => (
  <section className="safe-paddings relative pb-[152px] md:pb-24 sm:pb-16">
    <div className="container-xl bg-[#FFF4F0]">
      <div className="container grid grid-cols-12 gap-8 py-[88px] lg:gap-10 lg:!px-4 lg:py-[4.5rem] md:gap-12 md:!px-2 md:py-16 sm:py-8 xs:!px-0">
        <div className="col-span-5 md:col-span-12">
          <Link
            to="https://goo.gl/maps/ooQufQWKzaRM286Z7"
            className="group relative z-10 flex max-w-[416px] flex-none flex-col border border-primary-1 bg-white shadow-[20px_20px_0px_0px_rgba(255,229,219,1)] outline outline-4 outline-offset-0 outline-white"
            theme="primary"
          >
            <img
              className="min-w-full md:h-full"
              src={CardIllusrtation}
              width={416}
              height={198}
              loading="lazy"
              alt="card-illustration"
            />
            <div className="flex flex-col px-8 pb-8 pt-6">
              <h3 className="font-mono-cyber text-4xl font-bold leading-[1.125] tracking-[-0.03em] text-primary-1 transition-colors group-hover:text-primary-1/60">
                Google HQ <br />
                at Zürich Europaallee
              </h3>
              <address className="mt-[18px] font-mono-cyber text-3xl not-italic leading-[1.125] text-primary-1/80 transition-colors group-hover:text-primary-1/40">
                Google EURF <br /> Europaallee 36 <br /> 8004 Zürich
              </address>
            </div>
          </Link>
        </div>
        <div className="col-span-7 flex flex-col md:col-span-12">
          <h2 className="font-sans-cyber text-[52px] font-bold lowercase leading-tight text-primary-1 lg:text-[40px] md:col-span-12 md:text-[32px]">
            {TITLE}
          </h2>
          <p className="mt-5 text-xl leading-normal md:text-lg">
            <b>The Kubernetes Community Days</b> in Zürich will be held at the Google HQ at Zürich
            Europaallee, a modern and convenient location next to the train station. Attendees can
            expect to enjoy a variety of vegetarian and vegan food options throughout the day.
          </p>
          <p className="mt-4 text-xl leading-normal md:text-lg">
            Don’t miss out on the opportunity to connect with fellow attendees and continue the
            conversation at the networking Apéro.
          </p>
          <p className="mt-4 text-xl font-bold leading-normal md:text-lg">
            We can't wait to see you there!
          </p>
          <Button
            className="mt-14 sm:mt-8"
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

export default Venue;
