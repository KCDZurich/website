import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LIST from 'constants/workshops';
import Argo from 'icons/argo-logo.svg';
import Cilium from 'icons/cilium-logo.svg';
import Go from 'icons/go-logo.svg';
import Kubernetes from 'icons/kubernetes-logo.svg';
import iconPlus from 'icons/plus.svg';

const position = {
  'top-left': '-top-2 -left-2',
  'top-right': '-top-2 -right-2',
  'bottom-left': '-bottom-2 -left-2',
  'bottom-right': '-bottom-2 -right-2',
};

const items = [
  {
    ...LIST[3],
    home: {
      icon: Kubernetes,
      width: 74,
      height: 72,
      decoretionPositions: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
  },
  {
    ...LIST[0],
    home: {
      icon: Argo,
      width: 80,
      height: 80,
      decoretionPositions: ['top-right'],
    },
  },
  {
    ...LIST[1],
    home: {
      icon: Go,
      width: 104,
      height: 39,
      decoretionPositions: ['bottom-left', 'bottom-right'],
    },
  },
  {
    ...LIST[2],
    home: {
      icon: Cilium,
      width: 70,
      height: 72,
      decoretionPositions: ['top-right', 'bottom-right'],
    },
  },
];

const TITLE = 'Workshops<br />on <time datetime="2024-06-12">june 12, 2024</time>';
const DESCRIPTION =
  "Explore workshops to test and enhance your skills — ideal for beginners and seasoned pros. Don't miss this chance to advance your knowledge in a practical environment.";
const BTN_TITLE = 'All workshops';

const Workshops = () => (
  <section
    className="safe-paddings relative bg-white py-[164px] lg:py-32 md:py-24 sm:py-16"
    id="workshops"
  >
    <div className="container grid-gap grid grid-cols-2 md:grid-cols-1">
      <div className="flex flex-col">
        <h2
          className="font-sans-cyber text-[52px] font-bold lowercase leading-tight text-primary-1 lg:text-[40px] md:text-[32px]"
          dangerouslySetInnerHTML={{ __html: TITLE }}
        />
        <p className="mb-11 mt-5 text-2xl leading-normal text-primary-1 lg:text-base md:mb-8 md:text-sm xs:text-base">
          {DESCRIPTION}
        </p>
        <Button className="max-w-[200px] flex-none" theme="primary" size="sm" to="/workshops">
          {BTN_TITLE}
        </Button>
      </div>
      <div className="pl-[72px] md:pl-0 md:pt-8">
        <ul className="dash-border grid h-full w-full grid-cols-2 [border-image-width:5px_5px_5px_5px]">
          {items.map(
            (
              { home: { icon, width, height, decoretionPositions }, name, card: { title } },
              index
            ) => (
              <li
                className="dash-border relative flex min-h-[190px] items-center justify-center [border-image-width:0_0_0_0] first:[border-image-width:0_5px_5px_0] last:[border-image-width:5px_0_0_5px] lg:min-h-[146px]"
                key={index}
              >
                {decoretionPositions.map((item, index) => (
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
                <Link
                  className="flex h-full w-full items-center justify-center transition-colors duration-200 hover:bg-primary-1/10"
                  to={`/workshop-${name}/`}
                >
                  <img src={icon} width={width} height={height} loading="lazy" alt="" />
                  <span className="sr-only">More info about {title} workshop</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  </section>
);

export default Workshops;
