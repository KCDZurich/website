import React from 'react';

import Button from 'components/shared/button';

import illustration from './images/section-illustration.svg';

const TITLE = 'Our  schedule is jam-packed with brilliant geniuses';

const DESCRIPTION =
  "Get ready for an action-packed day. With two tracks and more than 15 sessions to choose from, you'll have plenty of opportunities to learn from experts in the field. The whole event will be held in English.";

const Schedule = () => (
  <section className="safe-paddings relative bg-white pb-40 lg:pb-32 md:py-24 sm:py-16">
    <div className="container flex justify-between lg:flex-col">
      <div className="text-primary-1">
        <h2 className="lg:min-w-none min-w-[428px] max-w-[428px] text-6xl font-bold leading-tight lg:max-w-[800px]">
          {TITLE}
        </h2>
        <p className="mt-5 max-w-[428px] text-lg leading-normal lg:max-w-[650px]">{DESCRIPTION}</p>
        <Button className="mt-7 text-white" to="/" theme="blue" size="lg">
          Get your ticket
        </Button>
      </div>
      <img
        className="mt-16 h-[238px] w-[728px] lg:mx-auto lg:h-auto sm:max-h-[200px]"
        src={illustration}
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
      />
    </div>
  </section>
);

export default Schedule;
