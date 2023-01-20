import React from 'react';

import ArchCloud from './images/archcloud.svg';
import Cloudnative from './images/cloudnative.svg';
import InsideIt from './images/insideIt.svg';
import Rokt from './images/rokt.svg';
import Techface from './images/techface.svg';
import Vshn from './images/vshn.svg';
import WhiteRabbit from './images/white-rabbit.svg';

const TITLE = 'Community & Media Partners';

const ITEMS = [Cloudnative, Techface, InsideIt, ArchCloud, Rokt, Vshn, WhiteRabbit];

const Partners = () => (
  <section className="safe-paddings relative bg-gray-12 pt-24 pb-48 lg:pb-40 md:pb-32 sm:pb-24 sm:pt-16">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1">{TITLE}</h2>

      <ul className="mt-16 flex flex-wrap justify-center gap-y-8 gap-x-8">
        {ITEMS.map((logo, index) => (
          <li
            className="flex min-h-[80px] min-w-[280px] items-center justify-center  rounded border border-gray-10"
            key={index}
          >
            <img
              className="h-auto w-auto"
              src={logo}
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Partners;
