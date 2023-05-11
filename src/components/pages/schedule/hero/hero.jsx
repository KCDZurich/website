import React from 'react';

import Button from 'components/shared/button';

const TITLE = 'Schedule for <time class="text-blue-1">15 June, 2023</time>';
const DESCRIPTION =
  "Get ready for an action-packed day. With two tracks and more than 15 sessions to choose from, you'll have plenty of opportunities to learn from experts in the field. The whole event will be held in English.";

const Hero = () => (
  <section className="safe-paddings pt-24 pb-10">
    <div className="container mt-4 text-center text-primary-1">
      <h1
        className="text-6xl font-bold leading-denser tracking-[-0.01em]"
        dangerouslySetInnerHTML={{ __html: TITLE }}
      />
      <p className="mx-auto mt-9 max-w-[865px] text-2xl leading-normal">{DESCRIPTION}</p>
      <Button
        className="mt-10 shadow-xl"
        size="lg"
        theme="blue"
        to="https://tickets.kcdzurich.ch/"
        target="_blank"
      >
        Get your ticket
      </Button>
    </div>
  </section>
);

export default Hero;
