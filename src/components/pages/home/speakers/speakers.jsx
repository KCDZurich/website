/* eslint-disable react/prop-types */
import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import useSessionize from 'hooks/use-sessionize';

import maskImage from './images/mask.svg';

const TITLE = 'Speakers';
const DESCRIPTION =
  'Explore cloud native excellence at <b>KCD Zurich 2024</b>! Join expert speakers for talks, networking, and a vibrant celebration of innovation.';
const BTN_TITLE = 'All speakers';

const Speakers = () => {
  const { topSpeakers, error } = useSessionize({ getTopSpeakers: true });

  return (
    <section className="safe-paddings relative py-[134px] lg:py-16 md:py-10 sm:py-8">
      <div className="container flex flex-col items-center">
        <h2
          className="font-sans-cyber text-[52px] font-bold lowercase leading-tight lg:text-[40px] md:text-[32px]"
          id={LINKS.speakers.id}
        >
          {TITLE}
        </h2>
        <p
          className="mt-5 max-w-[660px] text-center text-xl leading-normal md:text-lg"
          dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
        />
        {error && !topSpeakers.length && (
          <div className="mt-14 w-full md:mt-9 sm:mt-8">
            <h3 className="text-center text-lg font-bold uppercase leading-tight text-red">
              Loading error
            </h3>
          </div>
        )}
        <ul className="mt-14 grid w-full grid-cols-4 justify-items-center gap-14 lg:grid-cols-3 md:mt-9 md:grid-cols-2 md:gap-9 sm:mt-8 sm:gap-8 xs:grid-cols-1">
          {!error && !topSpeakers.length && (
            <>
              {Array.from({ length: 8 }, (_, index) => index).map((item) => (
                <li className="flex max-w-[248px] animate-pulse flex-col items-center" key={item}>
                  <div className="relative h-[280px] w-[240px]">
                    <img
                      className="absolute inset-0 z-10 h-full w-full"
                      src={maskImage}
                      width={240}
                      height={280}
                      loading="lazy"
                      alt=""
                    />
                    <div className="speaker-photo-clip-path relative h-full w-full">
                      <div className="absolute inset-0 z-10 h-full w-full bg-primary-1/10" />
                    </div>
                    <div className="speaker-shadow-clip-path absolute left-2 top-2 -z-10 h-full w-full bg-[#A1CBD3] opacity-20" />
                  </div>
                  <div className="mt-7 h-[23px] w-6/12 rounded bg-primary-1/10" />
                  <div className="mt-2 h-[18px] w-10/12 rounded bg-primary-1/10" />
                </li>
              ))}
            </>
          )}
          {!error && topSpeakers.length > 0 && (
            <>
              {topSpeakers.map(({ profilePicture, fullName, tagLine }, index) => (
                <li className="flex max-w-[248px] flex-col items-center" key={index}>
                  <div className="relative h-[280px] w-[240px]">
                    <img
                      className="absolute inset-0 z-10 h-full w-full"
                      src={maskImage}
                      width={240}
                      height={280}
                      loading="lazy"
                      alt=""
                    />
                    <div className="speaker-photo-clip-path relative h-full w-full">
                      <div className="absolute inset-0 z-10 h-full w-full bg-primary-1 opacity-50 mix-blend-color " />
                      <img
                        className="h-full object-cover brightness-110 saturate-0"
                        src={profilePicture}
                        width={240}
                        height={280}
                        loading="lazy"
                        alt={fullName}
                      />
                    </div>
                    <div className="speaker-shadow-clip-path absolute left-2 top-2 -z-10 h-full w-full bg-[#A1CBD3] opacity-20" />
                  </div>
                  <h3 className="mt-7 text-lg font-bold uppercase leading-tight text-primary-1">
                    {fullName}
                  </h3>
                  <p className="mt-2 text-center text-sm leading-tight text-primary-1/60">
                    {tagLine}
                  </p>
                </li>
              ))}
            </>
          )}
        </ul>
        <Button
          className="mt-12 min-w-[170px] flex-none md:mt-8 xs:mt-8"
          to="/speakers"
          theme="primary"
          size="sm"
          target="_blank"
        >
          {BTN_TITLE}
        </Button>
      </div>
    </section>
  );
};

export default Speakers;
