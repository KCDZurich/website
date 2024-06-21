import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';

const TITLE = 'Event Information';

const Location = () => (
  <section className="safe-paddings relative pb-32 pt-28 md:py-24 sm:py-16">
    <div className="container-xl">
      <div className="container grid w-full grid-cols-12 gap-8 py-8 lg:gap-10 lg:!px-4 lg:py-[4.5rem] md:flex md:flex-col md:gap-12 md:!px-2 md:py-16 sm:py-8 xs:!px-0">
        <Link
          to="https://maps.app.goo.gl/PKysm9HGHDBVbxLe6"
          className="group relative z-10 col-span-5 flex max-w-[416px] flex-col border border-primary-1 bg-white shadow-[20px_20px_0px_0px_rgba(161,203,211,0.3)] outline outline-4 outline-offset-0 outline-white md:max-w-none md:flex-row md:justify-stretch"
          theme="primary"
          target="_blank"
          rel="nofollow noreferrer"
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
            Choose from two experiences, both including food and drinks in the ticket price:
          </p>
          <ul className="mt-4 list-inside list-disc text-xl leading-normal md:text-lg sm:text-base">
            <li>
              <b>Half-Day Experience [KCD Rejects]:</b>
              <br />
              Attend the afternoon’s KCD Rejects conference, featuring a series of insightful talks
              and discussions.
            </li>
            <li>
              <b>Full-Day Experience [Workshops + KCD Rejects]:</b>
              <br />
              Start your day with engaging Kubernetes or ArgoCD workshops, enjoy lunch, and continue
              with the KCD Rejects conference in the afternoon.
            </li>
          </ul>
          <p className="mt-4 text-xl leading-normal md:text-lg sm:text-base">
            Both options end with an amazing Rooftop Networking Apéro on a terrace with stunning
            views, and is the perfect way to unwind and connect after a day filled with valuable
            insights and interactions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Location;
