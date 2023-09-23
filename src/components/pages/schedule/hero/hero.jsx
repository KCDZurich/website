import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links.js';

const TITLE = 'Schedule for <time class="text-blue-1 xs:block">1 December, 2023</time>';
const DESCRIPTION =
  "Get ready for an action-packed day. With two tracks to choose from, you'll have plenty of opportunities to learn from experts in the field. The whole event will be held in English.";

const Hero = () => (
  <section className="safe-paddings pt-24 pb-10 lg:pt-[4.5rem] md:pt-16 md:pb-4 sm:py-8">
    <div className="container mt-4 text-center text-primary-1 sm:px-7">
      <h1
        className="text-6xl font-bold leading-denser tracking-[-0.01em] md:text-4xl"
        dangerouslySetInnerHTML={{ __html: TITLE }}
      />
      <p className="mx-auto mt-9 max-w-[865px] text-2xl leading-normal md:mt-6 md:text-xl sm:text-lg">
        {DESCRIPTION}
      </p>
      <Button
        className="mt-10 shadow-xl hover:bg-blue-2 hover:shadow-[0px_15px_30px_#adadad] md:mt-8 xs:mt-7 xs:w-full"
        size="lg"
        theme="blue"
        {...LINKS.tickets}
      >
        Get your ticket
      </Button>
      <Button
        className="mt-7 ml-3 text-primary-1 shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
        theme="primary"
        size="lg"
        {...LINKS.cfp}
      >
        Call for Papers
      </Button>
    </div>
  </section>
);

export default Hero;
