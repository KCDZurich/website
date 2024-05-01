/* eslint-disable react/prop-types */
import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

import josephinePfeifferPhoto from './images/josephine-pfeiffer.jpg';
import kyraGoudPhoto from './images/kyra-goud.jpg';
import marcHerrenPhoto from './images/marc-herren.jpg';
import marcoKuendigPhoto from './images/marco-kuendig.jpg';
import maskImage from './images/mask.svg';
import simonKrengerPhoto from './images/simon-krenger.jpg';

const TITLE = 'Speakers';
const DESCRIPTION =
  'Explore cloud native excellence at <b>KCD Zurich 2024</b>! Join expert speakers for talks, networking, and a vibrant celebration of innovation.';
const BTN_TITLE = 'More to come';

const SPEAKERS = [
  {
    fullName: 'Marco Kündig',
    tagLine: 'Kubernetes Pod and Node Autoscaling on Spot Instances in practice',
    profilePicture: marcoKuendigPhoto,
  },
  {
    fullName: 'Simon Krenger',
    tagLine: 'Fixing Kubernetes anytime, anywhere',
    profilePicture: simonKrengerPhoto,
  },
  {
    fullName: 'Kyra Goud',
    tagLine:
      'Would you like fries with that? How we added AI-powered recommendations to Developer Hub',
    profilePicture: kyraGoudPhoto,
  },
  {
    fullName: 'Josie Pfeiffer',
    tagLine:
      'Would you like fries with that? How we added AI-powered recommendations to Developer Hub',
    profilePicture: josephinePfeifferPhoto,
  },
  {
    fullName: 'Thomas Graf',
    tagLine: 'Senior Field Engineer @Apple | TOC @CNCF ',
    profilePicture: josephinePfeifferPhoto,
  },
  {
    fullName: 'Marc Herren',
    tagLine:
      'How do you make life easier as a Dev | Ops | TooBusy / Lazy person? Use earthly to build your artifcacts',
    profilePicture: marcHerrenPhoto,
  },
];

const Speakers = () => (
  <section className="safe-paddings relative pt-[120px] lg:pt-16 md:pt-10 sm:pt-8">
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
      <ul className="mt-14 grid w-full grid-cols-4 justify-center gap-14 lg:grid-cols-3 md:mt-9 md:grid-cols-2 md:gap-9 sm:mt-8 sm:gap-8 xs:grid-cols-1">
        {SPEAKERS.map(({ profilePicture, fullName, tagLine }, index) => (
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
            <p className="mt-2 text-center text-sm leading-tight text-primary-1/60">{tagLine}</p>
          </li>
        ))}
      </ul>
      <Button
        className="mt-12 min-w-[170px] flex-none opacity-60 hover:bg-white md:mt-8 xs:mt-8"
        theme="primary"
        size="sm"
        disabled
      >
        {BTN_TITLE}
      </Button>
    </div>
  </section>
);

export default Speakers;
