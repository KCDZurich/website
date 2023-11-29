import React from 'react';

const TITLE = 'team';

const DESCRIPTION =
  '<strong>The Kubernetes Community Days in Zürich</strong> are organized by a dedicated committee who are passionate about bringing people together and fostering a sense of community. Our goal is to provide a platform for like-minded individuals from all levels and backgrounds that is dedicated to learning, growth, and diversity.';

const Hero = () => (
  <section className="safe-paddings safe-paddings overflow-hidden bg-opacity-10 pb-[104px] pt-[88px] lg:pb-20 lg:pt-16 md:pb-0 md:pt-8">
    <div className="container mt-4 text-primary-1">
      <div className="relative grid grid-cols-12 gap-x-8 md:grid-cols-1 md:gap-y-6">
        <h1 className="col-span-4 col-start-1 font-sans-cyber text-[52px] font-bold leading-tight md:col-span-full sm:text-5xl">
          {TITLE}
        </h1>
        <p
          className="col-start-5 col-end-13 mx-auto text-2xl leading-normal md:col-span-full md:text-xl [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
        />
      </div>
    </div>
  </section>
);

export default Hero;
