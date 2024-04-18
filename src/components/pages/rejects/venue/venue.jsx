import React from 'react';

const Venue = () => (
  <section className="safe-paddings pt-24 lg:pt-16 md:pt-10 xs:pt-12">
    <div className="container flex gap-x-36 lg:gap-x-10 md:gap-x-4 xs:flex-col xs:gap-y-4">
      <div className="max-w-[270px] shrink-0 md:max-w-[220px] xs:max-w-full">
        <h2 className="font-sans-cyber text-[52px] font-bold leading-tight lg:text-[40px] md:text-[36px] xs:text-[32px]">
          what is Rejects?
        </h2>
      </div>
      <div className="text-2xl leading-normal text-primary-1 lg:text-xl md:text-base">
        <p>
          With over 110 proposals received and only 17 slots available for KCD Zürich, Rejects
          serves as a platform for those outstanding speakers who didn’t make the initial cut,
          enabling them to share their expertise and insights with the community.
        </p>
        <p className="mt-6 md:mt-4">
          At KCD Zürich, we are deeply committed to fostering community engagement and providing
          platforms for knowledge exchange. Given the unprecedented interest, we’ve decided to
          organize an additional event titled{' '}
          <strong className="font-bold">KCD Zürich Rejects</strong> on very short notice.
        </p>
      </div>
    </div>
  </section>
);

export default Venue;
