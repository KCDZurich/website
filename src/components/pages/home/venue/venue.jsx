import React from 'react';

const Venue = () => (
  <section className="safe-paddings pt-[103px] lg:pt-16 md:pt-11 xs:pt-11">
    <div className="container flex gap-x-9 lg:gap-x-10 md:gap-x-8 xs:flex-col xs:gap-y-4">
      <div className="max-w-[380px] shrink-0 lg:max-w-[300px] md:max-w-[270px] xs:max-w-full">
        <h2 className="font-sans-cyber text-[52px] font-bold leading-tight lg:text-[40px] md:text-[36px] xs:text-[32px]">
          what is Cloud Native Zürich?
        </h2>
      </div>
      <div className="text-2xl leading-normal text-primary-1 lg:text-xl md:text-base">
        <p>
          Cloud Native Zürich is community-organized events that gather adopters and technologists
          from open source and cloud native communities. <br /> We are committed to supporting the
          local Zurich community and local businesses.
        </p>
      </div>
    </div>
  </section>
);

export default Venue;
