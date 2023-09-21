import React from 'react';

// import Link from 'components/shared/link';

const Venue = () => (
  <section className="safe-paddings bg-white py-40 pb-20 md:py-24 sm:py-16">
    <div className="container-md text-2xl text-primary-1 sm:text-lg">
      <p>
        <span className="font-bold">Kubernetes Community Days</span> (KCDs) are global,
        community-organized events that gather adopters and technologists from open source and cloud
        native communities, supported by the Cloud Native Computing Foundation (CNCF).
      </p>
      <p className="mt-7">
        This is the first KCD in <span className="font-bold">Utrecht</span>, and we’re excited to
        bring the community together. We want to provide a platform for professionals and experts
        from all levels and backgrounds to learn, network, and share their knowledge on all things
        cloud native.
      </p>
      {/* <p className="mt-7">
        Watch all the speakers’ sessions videos from December 1, 2023 on{' '}
        <Link className="font-semibold" to="/archive" theme="blue-underlined">
          Archive page
        </Link>
        !
      </p> */}
    </div>
  </section>
);

export default Venue;
