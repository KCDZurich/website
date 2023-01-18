import React from 'react';

import Button from 'components/shared/button';

import illustration from './images/section-illustration.svg';

const DESCRIPTION =
  "Roll up your sleeves and learn! We have an exciting lineup of hands-on workshops where you can put your skills to the test and learn from experts. Whether you're a beginner looking to get started with cloud native technologies or a seasoned pro looking to dive deeper, we have something for everyone. Don't miss out on this chance to advance your knowledge and skills in a practical, hands-on environment.";

const Workshops = () => (
  <section className="safe-paddings relative bg-gray-12 pt-40">
    <div className="container flex justify-between">
      <img
        className="mt-14 h-[238px] w-[520px]"
        src={illustration}
        width={520}
        height={238}
        loading="lazy"
        alt=""
      />
      <div className="max-w-[592px] text-primary-1">
        <h2 className="text-6xl font-bold leading-tight ">
          Workshops <br />
          on June 14, 2023
        </h2>
        <p className="mt-5 text-xl leading-normal">{DESCRIPTION}</p>
        <Button className="mt-7 text-white" to="/" theme="blue" size="lg">
          Get your ticket
        </Button>
      </div>
    </div>
  </section>
);

export default Workshops;
