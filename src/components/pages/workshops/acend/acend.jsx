import React from 'react';

import Link from 'components/shared/link';
import AcendLogo from 'icons/acend-logo.inline.svg';
import iconPlus from 'icons/plus.svg';

const DESCRIPTION =
  'As a knowledge platform, acend accompanies engineers and their businesses across new technological frontiers. We offer extraordinary, inspiring and practice-oriented teaching and learning experiences.';

const Acend = () => (
  <section className="safe-paddings relative pb-[120px] pt-[104px] lg:py-20 md:py-14 sm:py-8">
    <div className="container">
      <div className="relative grid min-h-[179px] grid-cols-12 before:absolute before:top-0 before:h-[1px] before:w-full before:bg-horizontal-dashed-line before:bg-auto before:bg-center after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-horizontal-dashed-line after:bg-auto after:bg-center">
        <div className="relative col-span-4 flex items-center justify-center before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-vertical-dashed-line after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-vertical-dashed-line lg:col-span-12">
          <img
            className="absolute -left-2 -top-2 h-[17px] w-[17px]"
            src={iconPlus}
            width={17}
            height={17}
            loading="eager"
            alt=""
          />
          <img
            className="absolute -right-2 -top-2 h-[17px] w-[17px]"
            src={iconPlus}
            width={17}
            height={17}
            loading="eager"
            alt=""
          />
          <img
            className="absolute -bottom-2 -right-2 h-[17px] w-[17px]"
            src={iconPlus}
            width={17}
            height={17}
            loading="eager"
            alt=""
          />
          <img
            className="absolute -bottom-2 -left-2 h-[17px] w-[17px]"
            src={iconPlus}
            width={17}
            height={17}
            loading="eager"
            alt=""
          />
          <Link className="h-fit w-fit" to="https://acend.ch/" target="_blank">
            <AcendLogo className="h-[79px] w-[252px]" />
          </Link>
        </div>
        <div className="relative col-span-8 flex items-center justify-center after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-vertical-dashed-line lg:col-span-12">
          <img
            className="absolute -right-2 -top-2 h-[17px] w-[17px]"
            src={iconPlus}
            width={17}
            height={17}
            loading="eager"
            alt=""
          />
          <img
            className="absolute -bottom-2 -right-2 h-[17px] w-[17px]"
            src={iconPlus}
            width={17}
            height={17}
            loading="eager"
            alt=""
          />
          <p className="max-w-[704px] text-xl leading-normal text-primary-1">{DESCRIPTION}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Acend;
