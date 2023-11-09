import React from 'react';

import Link from 'components/shared/link';

const Venue = () => (
  <section className="safe-paddings py-24">
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
        <p className="mt-7">
          Learn more about our work and watch all the speakers’ sessions videos from June 15, 2023
          on{' '}
          <Link className="font-semibold" to="/archive" theme="blue-underlined">
            Archive page
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default Venue;
