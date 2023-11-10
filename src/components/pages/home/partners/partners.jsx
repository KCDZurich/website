import React from 'react';

import Link from 'components/shared/link';

import cloudNative from './images/cloudnative.svg';
import rokt from './images/rokt.svg';
import whiteRabbit from './images/white-rabbit.svg';

const ITEMS = [
  { icon: rokt, url: 'https://rokt.cloud/' },
  { icon: whiteRabbit, url: 'https://www.whiterabbitcom.ch' },
  { icon: cloudNative, url: 'https://www.cncf.io/' },
];

const Partners = () => (
  <section className="safe-paddings py-28 lg:py-8 md:py-14 sm:py-9">
    <div className="container flex gap-x-8 lg:flex-col lg:gap-y-6">
      <h2 className="w-1/2 max-w-[590px] font-sans-cyber text-[52px] font-bold lowercase leading-tight tracking-tight lg:w-full lg:text-[40px] md:text-[36px] xs:text-[32px]">
        Community
        <span className="-mt-1 ml-16 block lg:ml-0">// Media Partners</span>
      </h2>
      <ul className="grid w-1/2 grid-cols-2 grid-rows-2 lg:w-full lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2">
        {ITEMS.map(({ icon, url }, index) => (
          <li
            className="relative before:absolute before:right-0 before:h-full before:w-[1px] before:bg-vertical-dashed-line after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-horizontal-dashed-line last:after:hidden even:before:hidden lg:after:hidden lg:before:last:hidden lg:before:even:block sm:after:block sm:before:last:block sm:before:even:hidden [&:nth-last-child(2):even]:after:hidden"
            key={index}
          >
            <Link
              className="flex h-full w-full items-center justify-center p-[18px] transition-all duration-200 hover:bg-primary-1 hover:bg-opacity-10"
              to={url}
            >
              <img
                className="max-w-[240px] md:max-w-full xs:max-h-[60px]"
                src={icon}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Partners;
