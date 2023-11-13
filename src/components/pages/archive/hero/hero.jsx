import React from 'react';

import Button from 'components/shared/button';

const TITLE = 'Archive';
const DESCRIPTION =
  'Thank you to each of you for making <b>Kubernetes Community Days Zürich</b> a resounding success. Our sincere thanks also go to our <b>sponsors</b>. Your support played a crucial role in the success of this event.';

const Hero = () => (
  <section className="safe-paddings overflow-hidden bg-[#EDC3C7] bg-opacity-10 pb-20 pt-24 lg:pb-32 md:pb-24">
    <div className="container flex items-center gap-x-10 md:flex-col md:gap-y-10">
      <div className="text-primary-1 md:flex md:flex-col md:items-center md:text-center">
        <h1 className="text-6xl font-bold leading-tight lg:max-w-[500px] sm:text-5xl">{TITLE}</h1>
        <p
          className="mt-9 text-lg leading-normal lg:max-w-[500px]"
          dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
        />
        <Button
          className="mt-7 !h-16 shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
          to="https://www.youtube.com/watch?v=7-b0llQFT8E"
          theme="primary"
          size="sm"
          target="_blank"
        >
          Watch on YouTube
        </Button>
      </div>
      <iframe
        className="max-w-[800px] shrink-0 lg:max-w-[700px]"
        allow="autoplay; picture-in-picture; web-share"
        src="https://www.youtube.com/embed/7-b0llQFT8E?autoplay=0&mute=0&rel=0"
        title="Kubernetes Community Days Zürich 2023"
        width="100%"
        height="350"
        allowFullScreen
      />
    </div>
  </section>
);

export default Hero;
