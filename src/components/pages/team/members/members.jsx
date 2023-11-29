import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';

import linkedinIcon from './images/linkedin-logo.svg';

const ITEMS = [
  {
    name: 'Milena Thalmann',
    position: 'Founder,<br/> White Rabbit Communications',
    photo: () => (
      <StaticImage
        src="./images/milena-thalmann-photo.jpg"
        alt="Milena Thalmann"
        width={312}
        height={409}
      />
    ),
    url: 'https://www.linkedin.com/in/milena-thalmann/',
  },
  {
    name: 'Philipp Meier',
    position: 'Ecosystem Builder, <br/> Isovalent',
    photo: () => (
      <StaticImage
        src="./images/philipp-meier-photo.jpg"
        alt="Philipp Meier"
        width={312}
        height={409}
      />
    ),
    url: 'https://www.linkedin.com/in/phmeier/',
  },
  {
    name: 'Thomas Philipona',
    position: 'Founder, ROKT GmbH',
    photo: () => (
      <StaticImage
        src="./images/thomas-philipona-photo.jpg"
        alt="Thomas Philipona"
        width={312}
        height={409}
      />
    ),
    url: 'https://www.linkedin.com/in/thomas-philipona-thun/',
  },
];

const Members = () => (
  <section className="safe-paddings relative mt-[104px] bg-white pb-28 lg:mt-20 md:mt-14 md:pb-24 sm:mt-0 sm:py-16">
    <div className="container">
      <ul className="grid max-w-[1144px] grid-cols-3 gap-x-[104px] gap-y-8 lg:gap-x-24 md:gap-x-20 sm:flex sm:flex-wrap sm:justify-center">
        {ITEMS.map(({ name, position, photo: Photo, url }, index) => (
          <li className="flex flex-col sm:max-w-[280px]" key={index}>
            <Photo className="h-auto w-full" />
            <div className="mt-6 flex items-center">
              <span className="text-2xl font-bold uppercase leading-normal text-primary-1 lg:text-xl md:text-lg sm:text-left">
                {name}
              </span>
              <Link className="ml-auto" to={url} target="_blank">
                <img
                  className="md:h-7 md:w-7"
                  src={linkedinIcon}
                  width={32}
                  height={32}
                  alt="LinkedIn"
                />
              </Link>
            </div>

            <span
              className="mt-2 text-lg text-primary-1"
              dangerouslySetInnerHTML={{ __html: position }}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Members;
