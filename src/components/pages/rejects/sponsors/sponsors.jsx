import clsx from 'clsx';
import React, { useState } from 'react';

import adfinisLogo from 'icons/sponsors/adfinis.svg';
import campToCampLogo from 'icons/sponsors/camp-to-camp.svg';
import cloudnativeLogo from 'icons/sponsors/cloudnative.svg';
import dbiLogo from 'icons/sponsors/dbi.svg';
import flowLogo from 'icons/sponsors/flow.svg';
import isovalentLogo from 'icons/sponsors/isovalent.svg';
import letsbootLogo from 'icons/sponsors/letsboot.svg';
import peakScaleLogo from 'icons/sponsors/peak-scale.svg';
import puzzleLogo from 'icons/sponsors/puzzle.svg';
import redHatLogo from 'icons/sponsors/red-hat.svg';
import roktLogo from 'icons/sponsors/rokt.svg';
import separator from 'icons/sponsors/separator.svg';
import vshnLogo from 'icons/sponsors/vshn.svg';

const title = 'Sponsors';
const platinumSponsors = [
  { icon: vshnLogo, url: 'https://www.vshn.ch/', name: 'VSHN' },
  { icon: cloudnativeLogo, url: 'https://kcdzurich.ch/', name: 'KCD Zurich' },
];
const silverSponsors = [
  { icon: isovalentLogo, url: 'https://isovalent.com/', name: 'Isovalent' },
  { icon: puzzleLogo, url: 'https://www.puzzle.ch/', name: 'Puzzle ITC' },
  { icon: campToCampLogo, url: 'https://www.camptocamp.com/', name: 'CampToCamp' },
  { icon: adfinisLogo, url: 'https://adfinis.com/', name: 'Adfinis' },
  { icon: dbiLogo, url: 'https://www.dbi-services.com/', name: 'DBI Service' },
  { icon: redHatLogo, url: 'https://www.redhat.com/', name: 'RedHat' },
  { icon: roktLogo, url: 'https://rokt.cloud/', name: 'Rokt Cloud' },
  { icon: letsbootLogo, url: 'https://www.letsboot.ch/', name: 'Letsboot.ch' },
  { icon: flowLogo, url: 'https://flow.swiss/', name: 'Flow' },
  { icon: peakScaleLogo, url: 'https://peakscale.ch/', name: 'Peak Scale' },
];

const Sponsors = () => {
  const [activeColor, setActiveColor] = useState('');

  return (
    <section className="safe-paddings relative" id="sponsors">
      <div className="container-xl relative bg-blue-super-light py-24 before:absolute before:left-0 before:top-0 before:h-12 before:w-full before:bg-sponsors-separator before:bg-cover lg:py-14 lg:before:h-9 md:py-10 sm:before:h-8">
        <div className="container lg:!px-4 md:!px-2 xs:!px-0">
          <h2 className="font-mono-cyber text-4xl font-bold uppercase tracking-tighter lg:text-[32px] md:text-2xl xs:text-[32px]">
            {title}
          </h2>
          <ul className="mt-8 grid grid-cols-[190px_repeat(5,minmax(0,208px))] grid-rows-[repeat(3,95px)] lg:grid-cols-[170px_repeat(5,minmax(0,1fr))] lg:grid-rows-[repeat(3,73px)] md:grid-cols-[130px_repeat(5,minmax(0,1fr))] md:grid-rows-[repeat(3,48px)] sm:mt-6 sm:grid-cols-2 sm:grid-rows-none">
            <li className="relative col-end-2 flex items-center before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-[2px] before:bg-[#ADCFD3] sm:col-span-full sm:mb-3 sm:before:hidden">
              <span className="relative z-10 bg-[#EFFAFB] py-3">
                <img
                  className="md:max-w-[15px] sm:max-w-[23px]"
                  src={separator}
                  width={28}
                  height={19}
                  loading="lazy"
                  alt=""
                />
              </span>
              <h3
                className={clsx(
                  activeColor === 'platinum' && 'text-[#63B5BE]',
                  'ml-4 font-mono-cyber text-3xl font-bold uppercase leading-normal tracking-tighter transition-colors duration-200 lg:text-2xl md:text-xl sm:ml-3 sm:text-2xl'
                )}
              >
                Platinum
              </h3>
            </li>
            {platinumSponsors.map(({ icon, url, name }, index) => (
              <li
                className={clsx(
                  'dash-border dash-border-right-and-bottom-none sm:[border-image-width:5px_0_5px_5px]',
                  {
                    '[border-image-width:5px_5px_0_5px] sm:[border-image-width:5px_5px_5px_5px]':
                      platinumSponsors.length - 1 === index,
                  }
                )}
                key={index}
              >
                <a
                  className="flex h-full w-full items-center justify-center px-4 py-3.5 transition-all duration-200 hover:bg-primary-1 hover:bg-opacity-10 md:p-2"
                  href={url}
                  target="_blank"
                  rel="nofollow noreferrer"
                  onMouseEnter={() => setActiveColor('platinum')}
                  onMouseLeave={() => setActiveColor('')}
                >
                  <span className="sr-only">{`${name} partner link`}</span>
                  <img
                    className="sm:max-h-[48px] sm:w-auto"
                    src={icon}
                    width={176}
                    height={64}
                    loading="lazy"
                    alt=""
                  />
                </a>
              </li>
            ))}
            <li className="relative col-end-2 flex items-center before:absolute before:left-0 before:top-0 before:h-[55%] before:w-[2px] before:bg-[#ADCFD3] sm:col-span-full sm:mb-3 sm:mt-6 sm:before:hidden">
              <span className="relative z-10 bg-[#EFFAFB] py-3">
                <img
                  className="md:max-w-[15px] sm:max-w-[23px]"
                  src={separator}
                  width={28}
                  height={19}
                  loading="lazy"
                  alt=""
                />
              </span>
              <h3
                className={clsx(
                  activeColor === 'special' && 'text-[#5E88C8]',
                  'ml-4 font-mono-cyber text-3xl font-bold uppercase leading-normal tracking-tighter transition-colors duration-200 lg:text-2xl md:text-xl sm:text-2xl'
                )}
              >
                Community
              </h3>
            </li>
            {silverSponsors.map(({ icon, url, name }, index) => (
              <li
                className={clsx(
                  'dash-border dash-border-right-and-bottom-none sm:dash-border-right-and-bottom-none',
                  {
                    '[border-image-width:0_5px_5px_5px] sm:[border-image-width:5px_5px_5px_5px]':
                      silverSponsors.length - 1 === index,
                    'sm:[border-image-width:5px_0_5px_5px]': silverSponsors.length - 2 === index,
                    '[border-image-width:5px_5px_5px_5px]': index === 4,
                    'col-start-2 col-end-3 sm:col-span-1 sm:[border-image-width:5px_0_5px_5px]':
                      index === 5,
                    '[border-image-width:5px_0_5px_5px]':
                      index === 5 || index === 6 || index === 7 || index === 8,
                    'sm:[border-image-width:5px_5px_0_5px]': index % 2 !== 0,
                  }
                )}
                key={index}
              >
                <a
                  className="flex h-full w-full items-center justify-center px-4 py-3.5 transition-all duration-200 hover:bg-primary-1 hover:bg-opacity-10"
                  href={url}
                  target="_blank"
                  rel="nofollow noreferrer"
                  onMouseEnter={() => setActiveColor('special')}
                  onMouseLeave={() => setActiveColor('')}
                >
                  <span className="sr-only">{`${name} partner link`}</span>
                  <img
                    className="sm:max-h-[48px] sm:w-auto"
                    src={icon}
                    width={176}
                    height={64}
                    loading="lazy"
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
