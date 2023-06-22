import React from 'react';

import Link from 'components/shared/link';

const Venue = () => (
  <section className="safe-paddings bg-white py-40 md:py-24 sm:py-16">
    <div className="container-md">
      <iframe
        className="mb-20"
        allow="autoplay; picture-in-picture; web-share"
        src="https://www.youtube.com/embed/7-b0llQFT8E?autoplay=0&mute=0&rel=0"
        title="Kubernetes Community Days Zurich 2023"
        width="100%"
        height="400"
        allowFullScreen
      />
      <div className="text-2xl text-primary-1 sm:text-lg">
        <p>
          <span className="font-bold">Kubernetes Community Days</span> (KCDs) are global,
          community-organized events that gather adopters and technologists from open source and
          cloud native communities, supported by the Cloud Native Computing Foundation (CNCF).
        </p>
        <p className="mt-7">
          This is the first KCD in <span className="font-bold">Switzerland</span>, and we’re excited
          to bring the community together. We want to provide a platform for professionals and
          experts from all levels and backgrounds to learn, network, and share their knowledge on
          all things cloud native.
        </p>
        <p className="mt-7">
          Watch all the speakers’ sessions videos from June 15, 2023 on{' '}
          <Link className="font-semibold" to="/archive" theme="blue-underlined">
            Archive page
          </Link>
          !
        </p>
      </div>
    </div>
  </section>
);

export default Venue;
