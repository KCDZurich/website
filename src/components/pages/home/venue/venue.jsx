import React from 'react';

import Link from 'components/shared/link';
import DisketteIcon from 'icons/diskette.inline.svg';

const Venue = () => (
  <section className="safe-paddings pt-24">
    <div className="container flex gap-x-36">
      <div className="max-w-[270px] shrink-0">
        <h2 className="font-sans-cyber text-[52px] font-bold leading-tight">What is KCD?</h2>
      </div>
      <div className="text-2xl leading-normal text-primary-1 sm:text-lg">
        <p>
          <span className="font-bold">Kubernetes Community Days</span> (KCDs) are global,
          community-organized events that gather adopters and technologists from open source and
          cloud native communities, supported by the Cloud Native Computing Foundation (CNCF).{' '}
          <br /> We are committed to supporting the local Zurich community and local businesses.
        </p>
        <p className="mt-6">
          Learn more about our work and watch all the speakers’ sessions videos from June 15, 2023
          on{' '}
          <Link
            className="ml-3 inline-flex items-center border-b-2 border-transparent pb-0.5 font-mono-cyber text-[27px] font-bold leading-none tracking-wide transition-colors duration-200 hover:border-primary-1"
            to="/archive"
          >
            <DisketteIcon className="mr-2 h-5 w-5" aria-hidden />
            archive page
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default Venue;
