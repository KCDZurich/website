import React from 'react';

import mobileBorder from './images/border-mobile.svg';
import border from './images/border.svg';
import compassIcon from './images/compas.svg';
import folderIcon from './images/folder.svg';
import goalIcon from './images/goal.svg';

const items = [
  {
    icon: folderIcon,
    title: 'Our work',
    content:
      'We’re dedicated to fostering a network within the cloud native community, providing a platform for like-minded professionals to exchange knowledge, ideas, and explore opportunities.',
  },
  {
    icon: compassIcon,
    title: 'Our goal',
    content:
      'Our goal is to create a platform where professionals and experts from all backgrounds and levels can come together to learn, network, and share their knowledge on all aspects of cloud-native technology.',
  },
  {
    icon: goalIcon,
    title: 'Our mission',
    content:
      'We are passionately committed to promoting holistic diversity and inclusion in the tech industry, and we are dedicated to providing a platform for everyone to have a voice and be heard.',
  },
];

const Features = () => (
  <section className="safe-paddings pt-[104px] lg:pt-10 md:pt-11">
    <div className="relative mx-auto max-w-[1232px] pb-9 lg:max-w-[95vw] lg:pb-5 md:pb-2.5">
      <ul className="grid grid-cols-12 xs:flex xs:flex-col xs:items-center xs:gap-y-5">
        {items.map(({ title, content, icon }, index) => (
          <li
            className="relative col-span-4 flex flex-col px-8 py-4 leading-normal text-primary-1 first:pl-10 last:pr-10 lg:px-4 lg:py-8 lg:first:pl-6 lg:last:pr-6 md:px-3.5 md:py-6 md:first:pl-4 md:last:pr-5 xs:max-w-[342px] xs:!p-6"
            key={index}
          >
            <div className="flex flex-col xs:flex-row xs:items-center xs:justify-center">
              <img
                className="mx-auto md:max-w-[65px] xs:mx-0 xs:max-w-[60px]"
                src={icon}
                width={97}
                height={91}
                loading="lazy"
                alt=""
              />
              <h3 className="mx-auto font-mono-cyber text-4xl font-bold uppercase tracking-wide lg:text-[33px] md:text-[25px] xs:mx-0 xs:ml-3 xs:text-[31px]">
                {title}
              </h3>
            </div>
            <p className="mt-12 text-xl lg:mt-7 lg:text-base md:text-sm xs:mt-8">{content}</p>
            <img
              className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full object-contain xs:block"
              src={mobileBorder}
              width={342}
              height={241}
              alt=""
            />
          </li>
        ))}
      </ul>
      <img
        className="pointer-events-none absolute inset-0 -top-2 -z-10 block h-full w-full lg:top-1 md:-top-1 sm:-top-4 xs:hidden"
        src={border}
        width={1216}
        height={424}
        alt=""
      />
    </div>
  </section>
);

export default Features;
