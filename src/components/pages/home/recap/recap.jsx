import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

const title = 'KCD 2024 recap';
const description =
  'Take a look back at the standout moments from our 2024 conference! Our wrap-up video captures the dynamic presentations, interactive workshops, and the enthusiastic participation that made this event a success.';

const Recap = () => {
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
    <section className="safe-paddings mt-28 lg:mt-16 md:mt-10 sm:mt-8">
      <div className="container overflow-hidden">
        <div className="relative flex sm:flex-col sm:gap-y-8 sm:overflow-hidden sm:bg-[linear-gradient(180deg,#DAF2F4_0%,#E8F1F3_100%)] sm:px-6 sm:pb-8 sm:pt-10">
          <div className="relative flex shrink-0 flex-col bg-[linear-gradient(180deg,#DAF2F4_0%,#E8F1F3_100%)] py-9 pl-8 pr-10 after:absolute after:left-full after:top-0 after:h-6 after:w-1.5 after:bg-[#daf2f4] lg:shrink lg:pb-8 lg:pl-6 lg:pr-7 lg:pt-6 md:pr-[22px] md:pt-11 sm:bg-none sm:p-0">
            <div className="max-w-[524px] border-4 border-b-[#0a113333] border-l-white border-r-[#0a113333] border-t-white p-2.5 lg:max-w-[386px] md:border-[3px] sm:max-w-none">
              <button
                className="absolute inset-0 z-30 block h-full w-full"
                type="button"
                onClick={() => handleModalShow()}
              >
                <span className="sr-only">Play video in modal</span>
              </button>
              <StaticImage
                class="h-auto w-full lg:max-w-[362px] md:max-w-[262px] md:object-contain sm:max-w-none"
                src="./img/recap-cover.jpg"
                width={496}
                height={330}
                alt="Recap 2024 cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="before:triangle relative mt-6 flex w-full flex-col items-start bg-[linear-gradient(180deg,#DAF2F4_0%,#E8F1F3_100%)] py-8 pl-9 pr-8 text-primary-1 before:absolute before:-left-[11px] before:bottom-[calc(100%-16.5px)] after:absolute after:bottom-8 after:left-0 after:top-1 after:w-px after:bg-[url('/images/dash-line-gray.svg')] lg:flex-1 lg:pl-7 md:pl-[22px] md:pt-6 sm:mt-0 sm:bg-[url('/images/dash-line-gray-horizontal.svg')] sm:bg-[length:100%_auto] sm:bg-no-repeat sm:p-0 sm:before:border-none sm:after:bg-none">
            <header className="mt-8 max-w-[520px] lg:mt-3 md:mt-0 md:max-w-none sm:mt-8">
              <h2 className="flex items-center font-sans-cyber text-6xl font-bold leading-denser tracking-wide text-primary-1 lg:text-5xl md:text-4xl sm:text-[32px]">
                {title}
              </h2>
            </header>
            <div
              className="mt-7 max-w-[520px] space-y-5 bg-[url('/images/dash-line-gray-horizontal.svg')] bg-[length:100%_auto] bg-no-repeat pt-6 text-lg leading-normal lg:mt-4 lg:max-w-[87%] lg:space-y-[18px] lg:pt-5 lg:text-base md:max-w-full sm:mt-8 sm:max-w-none sm:bg-none sm:pt-0"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <Button
              className="!h-13 mt-10 !px-10 lg:mt-8 md:mt-4 md:!text-[11px] xs:mt-8 2xs:w-full"
              to="/archive-2024"
              theme="primary"
              size="sm"
            >
              Explore archive
            </Button>
          </div>
        </div>
      </div>
      <Modal modalData={{}} isVisible={isModalVisible} isVideoModal onModalHide={handleModalHide} />
    </section>
  );
};

export default Recap;
