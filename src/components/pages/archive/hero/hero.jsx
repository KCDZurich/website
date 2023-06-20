import React from 'react';

import Button from 'components/shared/button';

const TITLE = 'Archive';
const DESCRIPTION =
  'Thank you to each of you for making Kubernetes Community Days Zürich a resounding success. Our sincere thanks also go to our sponsors. Your support played a crucial role in the success of this event.';

const Hero = () => (
  <section className="safe-paddings overflow-hidden bg-[#EDC3C7] bg-opacity-10 pt-28 pb-40 lg:pb-32 md:pt-24 md:pb-[500px] sm:pb-[520px] [@media(max-width:600px)]:pb-[430px] [@media(max-width:460px)]:pb-[420px]">
    <div className="container flex items-center gap-x-5 lg:flex-col">
      <div className="text-primary-1">
        <h1 className="text-6xl font-bold leading-tight sm:text-5xl">{TITLE}</h1>
        <p className="mt-9 text-lg leading-normal">{DESCRIPTION}</p>
        <Button
          className="mt-7 text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
          to="https://tickets.kcdzurich.ch/"
          theme="blue"
          size="lg"
          target="_blank"
        >
          Get your ticket
        </Button>
      </div>
      <iframe
        className="max-w-[800px] shrink-0"
        allow="autoplay; picture-in-picture; web-share"
        src="https://www.youtube.com/embed/7-b0llQFT8E?autoplay=0&mute=0&rel=0"
        title="Kubernetes Community Days Zurich 2023"
        width="100%"
        height="400"
        allowFullScreen
      />
    </div>
  </section>
);

export default Hero;
