import React from 'react';

import Button from 'components/shared/button';

import illustration from './images/section-illustration.svg';

const DESCRIPTION =
  "Roll up your sleeves and learn! We have an exciting lineup of hands-on workshops where you can put your skills to the test and learn from experts. Whether you're a beginner looking to get started with cloud native technologies or a seasoned pro looking to dive deeper, we have something for everyone. Don't miss out on this chance to advance your knowledge and skills in a practical, hands-on environment.";

const Workshops = () => (
  <section className="safe-paddings relative bg-white pt-40 lg:pt-32 md:pt-24 sm:pt-16">
    <div className="container flex justify-between lg:flex-col-reverse">
      <img
        className="mt-14 h-[238px] w-[520px] lg:mx-auto"
        src={illustration}
        width={520}
        height={238}
        loading="lazy"
        alt=""
      />
      <div className="text-primary-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center">
        <h2 className="max-w-[592px] text-6xl font-bold leading-tight lg:max-w-[650px]">
          Workshops <br />
          on June 14, 2023
        </h2>
        <p className="mt-5 max-w-[592px] text-lg leading-normal lg:max-w-[700px] ">{DESCRIPTION}</p>
        <Button className="mt-7 text-white" to="/" theme="blue" size="lg">
          Get your ticket
        </Button>
      </div>
    </div>
  </section>
);

export default Workshops;
