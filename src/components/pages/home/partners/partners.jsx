import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';

import gogrow from './images/gogrow.png';
import timAndKoko from './images/tim-and-koko.svg';
import whiterabbit from './images/whiterabbit.svg';

const ITEMS = [
  {
    icon: gogrow,
    url: 'https://thegogrow.company/',
    name: 'The GoGrow Company',
    width: 152,
    height: 49,
    imageClassName: 'max-w-[240px] md:max-w-full',
  },
  {
    icon: timAndKoko,
    url: 'https://rokt.cloud/',
    name: 'Tim & Koko',
    width: 100,
    height: 70,
    imageClassName: 'w-auto xs:max-w-[96px]',
  },
  {
    icon: whiterabbit,
    url: 'https://www.whiterabbitcom.ch',
    name: 'WhiteRabbit',
    width: 188,
    height: 1,
    imageClassName: 'w-[188px] -mr-[18px] translate-y-1 lg',
    cardClassName: 'max-w-[261px]',
  },
];

const Partners = () => (
  <section className="safe-paddings py-[108px] lg:py-10 sm:py-9">
    <div className="container flex justify-between lg:flex-col lg:gap-y-6">
      <h2 className="max-w-xs pt-0.5 font-sans-cyber text-[52px] font-bold lowercase leading-[1.13] tracking-tight lg:max-w-full lg:text-[40px] md:text-[36px] xs:text-[32px]">
        Community partners
      </h2>
      <ul className="grid w-[818px] grid-cols-[repeat(2,1fr)_minmax(261px,max-content)] lg:w-full lg:grid-cols-3 sm:grid-cols-2 sm:grid-rows-2">
        {ITEMS.map(({ icon, url, name, width, height, imageClassName, cardClassName }, index) => (
          <li
            className={clsx(
              'relative before:absolute before:right-0 before:h-full before:w-px before:bg-vertical-dashed-line after:absolute after:inset-x-0 after:bottom-0 after:hidden after:h-px after:w-full after:bg-horizontal-dashed-line after:bg-auto after:bg-center last:before:hidden sm:max-w-full sm:p-[18px] sm:after:block sm:last:after:hidden sm:odd:before:block sm:even:before:hidden',
              cardClassName
            )}
            key={index}
          >
            <Link
              className="flex h-full w-full items-center justify-center transition-all duration-200 hover:bg-primary-1 hover:bg-opacity-10"
              to={url}
              target="_blank"
            >
              <img
                className={clsx(imageClassName, 'lg:max-w-60')}
                src={icon}
                width={width}
                height={height}
                loading="lazy"
                alt=""
              />
              <span className="sr-only">{name} partner page</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Partners;
