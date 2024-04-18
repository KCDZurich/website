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
          With over 90 people on the waiting list and a remarkable 110 talk submissions for KCD
          Zürich, your enthusiasm has left us speechless.
        </p>
        <p className="mt-6 md:mt-4">
          We’re excited to announce a special addition to our schedule:{' '}
          <strong>KCD Zürich Rejects</strong>, to give more community members the opportunity to
          share their insights and connect. We are excited to feature the top 6 speakers who didn’t
          make the cut for the main event, ensuring their valuable talks are heard.
        </p>
      </div>
    </div>
  </section>
);

export default Venue;
