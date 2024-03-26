import React from 'react';

import Link from 'components/shared/link';

import cloudnative from './images/cloudnative.svg';
import gogrow from './images/gogrow.png';
import rokt from './images/rokt.svg';
import whiterabbit from './images/whiterabbit.svg';

const ITEMS = [
  {
    icon: rokt,
    url: 'https://rokt.cloud/',
    name: 'Rokt',
    width: 112,
    height: 74,
    imageClassName: 'w-auto max-w-[240px] md:max-w-full',
  },
  {
    icon: whiterabbit,
    url: 'https://www.whiterabbitcom.ch',
    name: 'WhiteRabbit',
    width: 83,
    height: 92,
    imageClassName: 'w-auto max-w-[240px] md:max-w-full',
  },
  {
    icon: cloudnative,
    url: 'https://www.cncf.io/',
    name: 'CloudNative',
    width: 240,
    height: 46,
    imageClassName: 'w-auto max-w-[240px] md:max-w-full',
  },
  {
    icon: gogrow,
    url: 'https://thegogorow.notion.site/The-GoGrow-Company-0ce3608a3f5d456286fad64d8d791202',
    name: 'The GoGrow Company',
    width: 152,
    height: 49,
    imageClassName: 'max-w-[240px] md:max-w-full',
  },
];

const Partners = () => (
  <section className="safe-paddings py-28 lg:py-10 sm:py-9">
    <div className="container flex gap-x-8 lg:flex-col lg:gap-y-6">
      <h2 className="w-1/2 max-w-[590px] font-sans-cyber text-[52px] font-bold lowercase leading-tight tracking-tight lg:w-full lg:text-[40px] md:text-[36px] xs:text-[32px]">
        Community
        <span className="-mt-1 ml-16 block lg:ml-0">// Media Partners</span>
      </h2>
      <ul className="grid w-1/2 grid-cols-2 grid-rows-2 lg:w-full sm:grid-cols-2">
        {ITEMS.map(({ icon, url, name, width, height, imageClassName }, index) => (
          <li
            className="relative before:absolute before:right-0 before:h-full before:w-[1px] before:bg-vertical-dashed-line after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-horizontal-dashed-line after:bg-auto after:bg-center last:after:hidden even:before:hidden [&:nth-last-child(2)]:after:hidden"
            key={index}
          >
            <Link
              className="flex h-full w-full items-center justify-center p-[18px] transition-all duration-200 hover:bg-primary-1 hover:bg-opacity-10"
              to={url}
              target="_blank"
            >
              <img
                className={imageClassName}
                src={icon}
                width={width}
                height={height}
                loading="lazy"
                alt={name}
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
