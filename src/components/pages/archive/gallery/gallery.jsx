/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useState } from 'react';

import LINKS from 'constants/links';

import AnnieTalvastoPhoto from './images/annie-talvasto-photo.jpg';
import JuliusVolzPhoto from './images/julius-volz-photo.jpg';
import LizRicePhoto from './images/liz-rice-photo.jpg';
import RicardoRochaPhoto from './images/ricardo-rocha-photo.jpg';
import ThomasGrafPhoto from './images/thomas-graf-photo.jpg';
import ChevronDown from './svg/arrow-down.inline.svg';

const TITLE = 'Photo gallery';
const ITEMS = [
  {
    photo: ThomasGrafPhoto,
  },
  {
    photo: LizRicePhoto,
  },
  {
    photo: JuliusVolzPhoto,
  },
  {
    photo: AnnieTalvastoPhoto,
  },
  {
    photo: RicardoRochaPhoto,
  },
  {
    photo: ThomasGrafPhoto,
  },
  {
    photo: LizRicePhoto,
  },
  {
    photo: JuliusVolzPhoto,
  },
  {
    photo: AnnieTalvastoPhoto,
  },
  {
    photo: RicardoRochaPhoto,
  },
];

const Gallery = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleShowMoreClick = () => {
    setIsGalleryOpen((isGalleryOpen) => !isGalleryOpen);
  };

  return (
    <section className="safe-paddings relative bg-white py-16 md:py-24 sm:py-16">
      <div className="container flex flex-col sm:items-center">
        <h2
          className="text-6xl font-bold leading-tight text-primary-1 md:text-center"
          id={LINKS.speakers.id}
        >
          {TITLE}
        </h2>
        <ul className="mt-14 grid w-full grid-cols-4 gap-8 lg:gap-6 md:grid-cols-3 md:justify-items-center md:gap-4 xs:flex xs:flex-wrap xs:justify-evenly [@media(max-width:620px)]:grid-cols-2">
          {ITEMS.map(({ photo }, index) => (
            <li
              className={clsx(
                'group flex sm:w-auto sm:max-w-full',
                index > 7 && !isGalleryOpen ? 'hidden' : 'flex'
              )}
              key={index}
            >
              <img
                className="w-full"
                src={photo}
                width={280}
                height={158}
                loading="lazy"
                alt="Gallery item"
              />
            </li>
          ))}
        </ul>
        <button
          className="mx-auto mt-10 flex items-center px-5 py-2 text-center text-lg font-bold leading-none text-primary-1 transition-colors duration-200"
          type="button"
          onClick={handleShowMoreClick}
        >
          <span>{isGalleryOpen ? 'Hide all photos' : 'See all photos'}</span>
          <ChevronDown
            className={clsx(
              'ml-2 block w-2.5 shrink-0 transition-[transform,color] duration-200',
              isGalleryOpen ? 'rotate-180' : ''
            )}
          />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
