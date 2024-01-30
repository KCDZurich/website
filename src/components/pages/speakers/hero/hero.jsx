import React from 'react';

const TITLE = 'Speakers';
const DESCRIPTION =
  'Meet the voices driving cloud native excellence at <strong>Kubernetes Community Days 2024</strong>! Our Speakers embody the spirit of collaboration, coming together to illuminate the path forward in Kubernetes and open source. Join us for insightful talks, networking, and a celebration of the vibrant community that fuels innovation.';

const Hero = () => (
  <section className="safe-paddings pt-[88px] lg:pt-[4.5rem] md:pt-16 sm:pt-8">
    <div className="container grid grid-cols-12">
      <h1
        className="col-span-4 font-sans-cyber text-[52px] font-bold lowercase leading-tight text-primary-1 lg:text-[40px] md:col-span-12 md:text-[32px]"
        dangerouslySetInnerHTML={{ __html: TITLE }}
      />
      <p
        className="col-span-8 text-2xl leading-normal text-primary-1 md:col-span-12 md:mt-4 md:text-xl sm:text-lg"
        dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
      />
    </div>
  </section>
);

export default Hero;
