import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';
import AcendLogo from 'icons/acend-logo.inline.svg';
import iconPlus from 'icons/plus.svg';

const position = {
  'top-left': '-top-2 -left-2',
  'top-right': '-top-2 -right-2',
  'bottom-left': '-bottom-2 -left-2',
  'bottom-right': '-bottom-2 -right-2',
};

const DESCRIPTION =
  'As a knowledge platform, acend accompanies engineers and their businesses across new technological frontiers. We offer extraordinary, inspiring and practice-oriented teaching and learning experiences.';

const Acend = () => (
  <section className="safe-paddings relative pb-[120px] pt-[104px] lg:py-20 md:py-14 sm:py-8">
    <div className="container">
      <div className="dash-border relative grid grid-cols-12 [border-image-width:5px_5px_5px_5px]">
        <div className="dash-border relative col-span-4 flex min-h-[179px] items-center justify-center [border-image-width:0_5px_0_0] md:col-span-12 md:[border-image-width:0_0_5px_0]">
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((item, index) => (
            <img
              className={clsx('absolute h-[17px] w-[17px]', position[item])}
              src={iconPlus}
              width={17}
              height={17}
              loading="lazy"
              alt=""
              key={index}
            />
          ))}
          <Link className="h-fit w-fit" to="https://acend.ch/" target="_blank">
            <AcendLogo className="h-[79px] w-[252px]" />
          </Link>
        </div>
        <div className="relative col-span-8 flex min-h-[179px] items-center justify-center lg:p-12 md:col-span-12 md:p-8">
          {['top-right', 'bottom-right'].map((item, index) => (
            <img
              className={clsx('absolute h-[17px] w-[17px] md:hidden', position[item])}
              src={iconPlus}
              width={17}
              height={17}
              loading="lazy"
              alt=""
              key={index}
            />
          ))}
          {['bottom-left', 'bottom-right'].map((item, index) => (
            <img
              className={clsx('absolute hidden h-[17px] w-[17px] md:block', position[item])}
              src={iconPlus}
              width={17}
              height={17}
              loading="lazy"
              alt=""
              key={index}
            />
          ))}
          <p className="max-w-[704px] text-xl leading-normal text-primary-1 lg:max-w-none">
            {DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Acend;
