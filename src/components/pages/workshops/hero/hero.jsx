import React from 'react';

const TITLE = 'Workshops';

const DESCRIPTION =
  "Roll up your sleeves and learn! We have an exciting lineup of hands-on workshop where you can put your skills to the test and learn from experts. Whether you're a beginner looking to get started with cloud native technologies or a seasoned pro looking to dive deeper, we have something for everyone. Take advantage of this.";

const Hero = () => (
  <section className="safe-paddings py-[88px] lg:py-[4.5rem] md:py-16 sm:py-8">
    <div className="container grid-gap grid grid-cols-12">
      <h1 className="col-span-4 font-sans-cyber text-[52px] font-bold lowercase leading-tight text-primary-1 lg:text-[40px] md:col-span-12 md:text-[32px]">
        {TITLE}
      </h1>
      <p
        className="col-span-8 text-2xl leading-normal text-primary-1 lg:text-xl md:col-span-12 md:mt-4 sm:text-lg"
        dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
      />
    </div>
  </section>
);

export default Hero;
