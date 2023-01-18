import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';

import Adfinis from './images/adfinis.svg';
import Camptocamp from './images/camptocamp.svg';
import Dynatrace from './images/dynatrace.svg';
import Google from './images/google.svg';
import Innoq from './images/innoq.svg';
import Isovalent from './images/isovalent.svg';
import Postfinance from './images/postfinance.svg';
import Puzzle from './images/puzzle.svg';
import Swisscom from './images/swisscom.svg';
import Vmware from './images/vmware.svg';

const TITLE = 'Sponsors';

const ITEMS = [
  {
    title: 'Gold',
    logos: [Google, Isovalent],
    cardClassname: 'min-w-[488px] min-h-[152px]',
  },
  {
    title: 'Silver',
    logos: [Swisscom, Vmware, Dynatrace],
    cardClassname: 'min-w-[384px] min-h-[122px]',
  },
  {
    title: 'Bronze',
    logos: [Innoq, Adfinis],
    cardClassname: 'min-w-[280px] min-h-[104px]',
  },
  {
    title: 'Special Sponsors',
    logos: [Postfinance, Puzzle, Camptocamp],
    cardClassname: 'min-w-[280px] min-h-[104px]',
  },
];

const Sponsors = () => (
  <section className="safe-paddings relative bg-gray-12 pt-40">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1">{TITLE}</h2>
      <p className="mx-auto mt-5 max-w-[800px] text-xl leading-normal text-primary-1">
        We would like to extend a special thank you to our sponsors for their support and commitment
        to the community. We couldn't do it without them! If you’re interested in becoming a
        sponsor, please contact <Link to="mailto:hello@kcdzurich.ch">hello@kcdzurich.ch</Link>
      </p>

      <ul className="mt-20 flex flex-col">
        {ITEMS.map(({ title, logos, cardClassname }, index) => (
          <li className="" key={index}>
            <p className="text-center text-2xl font-bold uppercase leading-normal text-primary-1">
              {title}
            </p>

            <ul className="mt-10 mb-[70px] flex justify-center">
              {logos.map((logo, index) => (
                <li
                  className={clsx(
                    'ml-8 flex items-center justify-center rounded border border-gray-10 first:ml-0',
                    cardClassname
                  )}
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
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Sponsors;
