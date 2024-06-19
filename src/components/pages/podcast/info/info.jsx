import React from 'react';

import filipPhoto from 'images/schedule-2023/filip-nicolic-photo.jpg';
import juliusVolzPhoto from 'images/schedule-2023/julius-volz-photo.jpg';
import maxKorbacherPhoto from 'images/schedule-2023/max-korbacher-photo.jpg';
import sebastianKisterPhoto from 'images/schedule-2023/sebastian-kister-photo.jpg';
import timoSalmPhoto from 'images/schedule-2023/timo-salm-photo.jpg';

const SPEAKERS = [
  {
    photo: juliusVolzPhoto,
    name: 'Julius Volz',
  },
  {
    photo: maxKorbacherPhoto,
    name: 'Max Körbächer',
  },
  {
    photo: timoSalmPhoto,
    name: 'Timo Salm',
  },
  {
    photo: filipPhoto,
    name: 'Filip Nicolic',
  },
  {
    photo: sebastianKisterPhoto,
    name: 'Sebastian Kister',
  },
];

const Info = () => (
  <section className="safe-paddings container mb-32 lg:mb-12">
    <div className="relative grid grid-cols-[524px_1fr] bg-blue-super-light px-8 pb-10 pt-[71px] before:absolute before:left-0 before:top-0 before:h-12 before:w-full before:bg-sponsors-separator before:bg-cover lg:grid-cols-[416px_1fr] lg:px-6 lg:py-14 lg:before:h-9 md:grid-cols-[311px_1fr] md:py-10 sm:grid-cols-1 sm:gap-y-6 sm:before:h-8">
      <div className="relative pr-14 after:absolute after:bottom-0 after:right-0 after:top-1 after:w-px after:bg-[url('/images/dash-line-gray.svg')] md:pr-6 sm:after:bg-none">
        <h2 className="font-mono-cyber text-4xl font-bold uppercase -tracking-[0.03em] lg:text-[32px] md:text-2xl xs:text-[32px]">
          All Episodes 2023
        </h2>
        <p className="mt-3 text-lg leading-normal lg:text-sm md:mt-2 md:text-[13px] sm:mt-2 [&_a]:font-semibold [&_a]:text-[#F14600] [&_a]:transition-colors [&_a]:duration-200 hover:[&_a]:text-[#FF9737]">
          We would like to extend a thank you to{' '}
          <a href="https://b-nova.com/home" target="_blank" rel="noreferrer">
            b-nova
          </a>
          , our podcast sponsor for Kubernetes Community Day Zürich 2023.
        </p>
      </div>
      <div className="pl-9 pr-16 lg:pl-7 md:pl-5 md:pr-0 sm:pl-0">
        <h2 className="font-mono-cyber text-4xl font-bold uppercase -tracking-[0.03em] lg:text-[32px] md:text-2xl xs:text-[32px]">
          Speakers
        </h2>
        <ul className="mt-3.5 grid grid-cols-3 gap-x-12 gap-y-6 lg:gap-x-8 md:gap-5 sm:grid-cols-2">
          {SPEAKERS.map(({ name, photo }, index) => (
            <li key={index}>
              <figure className="flex items-center gap-x-3 md:gap-x-2">
                <img
                  className="max-w-[44px] lg:max-w-[40px]"
                  src={photo}
                  width={44}
                  height={44}
                  alt={`${name} photo`}
                  loading="lazy"
                />
                <figcaption className="text-base font-semibold leading-tight lg:text-sm">
                  {name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Info;
