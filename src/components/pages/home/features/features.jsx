import React from 'react';

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
  <section className="safe-paddings pt-[82px] lg:pt-10">
    <div className="relative mx-auto max-w-[1232px] bg-box-bordered bg-contain bg-center bg-no-repeat py-6 lg:max-w-[95vw] lg:py-0">
      <ul className="grid grid-cols-12">
        {items.map(({ title, content, icon }, index) => (
          <li
            className="col-span-4 flex flex-col px-8 py-4 leading-normal text-primary-1 first:pl-10 last:pr-10 lg:py-8"
            key={index}
          >
            <img className="mx-auto" src={icon} width={97} height={91} loading="lazy" alt="" />
            <h3 className="mx-auto font-mono-cyber text-4xl font-bold uppercase tracking-wide lg:text-[33px]">
              {title}
            </h3>
            <p className="mt-12 text-xl lg:text-base">{content}</p>
          </li>
        ))}
      </ul>
      {/* <img className="absolute inset-0" src="/images/border.svg" alt="" /> */}
    </div>
  </section>
);

export default Features;
