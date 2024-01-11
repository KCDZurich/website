import React from 'react';

import Link from 'components/shared/link';

import computerMask from './images/computer-icon.svg';
import disketteMask from './images/diskette-icon.svg';

const items = [
  {
    icon: computerMask,
    title: 'Gain Insight Into the <br /> KCD Zürich 2024',
    description:
      'Key details encompassing the essence of KCD, community principles, and corporate backers behind the event.',
    linkUrl: '/',
    linkText: 'Learn more about KCD',
  },
  {
    icon: disketteMask,
    title: 'Evolution of the Event: <br /> Past Editions',
    description:
      'Explore the Kubernetes world at Kubernetes Community Days Zürich 2023 and expert insights shared in our speakers&apos; lectures.',
    linkUrl: '/archive',
    linkText: 'Watch archive page',
  },
];

const LearnMore = () => (
  <section className="safe-paddings relative">
    <div className="container my-[136px] grid grid-cols-[390px_1fr] gap-x-32 lg:gap-12 md:my-16 md:grid-cols-1">
      <h2 className="font-sans-cyber text-[52px] font-bold leading-tight text-primary-1 md:text-[40px] xs:text-[36px]">
        want to know more?
      </h2>
      <ul className="grid grid-cols-[repeat(2,minmax(0,280px))] gap-9 lg:grid-cols-2">
        {items.map(({ icon, title, description, linkText, linkUrl }, idx) => (
          <li className="text-lg leading-normal text-primary-1 md:text-base sm:text-sm" key={idx}>
            <img
              className="sm:h-10 sm:w-10"
              src={icon}
              width={53}
              height={53}
              alt={`${title} illustration`}
            />
            <h3
              className="mt-5 font-bold leading-normal"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: description }} />
            <Link
              className="-ml-2 mt-5 inline-flex border-2 border-transparent border-opacity-10 px-2 py-1 font-mono-cyber text-2xl font-bold leading-normal tracking-tighter text-orange transition-colors duration-200 hover:border-orange md:-ml-1 md:px-1 md:text-xl"
              to={linkUrl}
            >
              {linkText}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default LearnMore;
