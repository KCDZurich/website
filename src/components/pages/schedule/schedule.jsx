import React from 'react';

import Button from 'components/shared/button';

import illustration from './images/section-illustration.svg';

const TITLE = 'Our  schedule is jam-packed with brilliant geniuses';

const DESCRIPTION =
  "Get ready for an action-packed day. With two tracks and more than 15 sessions to choose from, you'll have plenty of opportunities to learn from experts in the field. The whole event will be held in English.";

const Schedule = () => (
  <section className="safe-paddings relative bg-gray-12 pb-40">
    <div className="container flex justify-between">
      <div className="max-w-[428px]">
        <h2 className="text-6xl font-bold leading-tight text-primary-1">{TITLE}</h2>
        <p className="mt-5 max-w-[500px] text-xl leading-normal text-primary-1">{DESCRIPTION}</p>
        <Button className="mt-7 text-white" to="/" theme="blue" size="lg">
          Get your ticket
        </Button>
      </div>
      <img
        className="mt-16 h-[238px] w-[728px]"
        src={illustration}
        width={728}
        height={238}
        loading="lazy"
        alt=""
      />
    </div>
  </section>
);

export default Schedule;
