import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

const title = 'archive';
const description =
  'Thank you to each of you for making <b>Kubernetes Community Days Zürich</b> a resounding success. Our sincere thanks also go to our <b>sponsors</b>. Your support played a crucial role in the success of this event.';

const Hero = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalShow = () => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
  };

  return (
    <section className="safe-paddings overflow-hidden bg-blue-super-light bg-archive-hero bg-cover pt-20 md:pt-12">
      <div className="container relative z-[1] flex lg:items-center xs:flex-col xs:gap-y-10">
        <div className="mt-20 lg:mt-0">
          <h1 className="font-sans-cyber text-[72px] font-bold leading-denser tracking-tight text-primary-1 lg:text-5xl md:text-4xl">
            {title}
          </h1>
          <p
            className="mt-5 text-base font-medium leading-normal lg:max-w-[500px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Button
            className="mt-14 !h-[75px] !w-[248px] !text-base md:mt-9 md:!text-[11px] sm:mt-8"
            theme="cyber"
            size="lg"
            to="https://www.youtube.com/watch?v=7-b0llQFT8E"
            target="_blank"
            rel="nofollow noreferrer"
          >
            Watch on YouTube
          </Button>
        </div>
        <div className="relative w-[59%] shrink-0 xs:w-full">
          <StaticImage
            className="relative z-20 -ml-6 -mr-24 -mt-10 md:-mr-16 md:mt-7 xs:-mx-6 xs:mt-0"
            src="./images/tv.png"
            width={1679}
            height={1202}
            loading="eager"
            alt=""
          />
          <button
            className="group absolute left-[55%] top-[5%] z-30 block h-[63%] w-[700px] max-w-[72%] -translate-x-1/2 md:left-[53%] md:top-[18.8%] md:h-[54%] xs:left-1/2 xs:top-[14%] xs:max-w-[66%]"
            type="button"
            onClick={() => handleModalShow()}
          >
            <span className="sr-only">Play video</span>
            <StaticImage
              className="!absolute inset-0 z-0 transition-all duration-200 group-hover:scale-110"
              src="./images/play-icon.png"
              width={383}
              height={395}
              loading="eager"
              alt=""
            />
          </button>
          <video
            className="absolute left-[55%] top-[5%] z-10 block max-w-[72%] -translate-x-1/2 md:top-[18.8%] xs:left-1/2 xs:top-[15%] xs:max-w-[66%]"
            width="700"
            height="472"
            autoPlay
            playsInline
            muted
            loop
          >
            <source type="video/webm" src="/images/archive.webm" />
            <source type="video/mp4" src="/images/archive.mp4" />
          </video>
        </div>
      </div>
      <Modal modalData={{}} isVisible={isModalVisible} isVideoModal onModalHide={handleModalHide} />
    </section>
  );
};

export default Hero;
