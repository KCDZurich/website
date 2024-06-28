import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import SponsorsList from 'components/pages/home/sponsors/sponsors-list';
import Link from 'components/shared/link';
import loader from 'icons/loader.gif';
import acendLogo from 'icons/sponsors/acend.svg';
import adfinisLogo from 'icons/sponsors/adfinis.svg';
import bNovaLogo from 'icons/sponsors/b-nova.svg';
import campToCampLogo from 'icons/sponsors/camp-to-camp.svg';
import dynatraceLogo from 'icons/sponsors/dynatrace.svg';
import flowLogo from 'icons/sponsors/flow.svg';
import googleCloudLogo from 'icons/sponsors/google-cloud.svg';
import innoqLogo from 'icons/sponsors/innoq.svg';
import isovalentLogo from 'icons/sponsors/isovalent.svg';
import postFinanceLogo from 'icons/sponsors/post-finance.svg';
import puzzleLogo from 'icons/sponsors/puzzle.svg';
import redHatLogo from 'icons/sponsors/red-hat.svg';
import separator from 'icons/sponsors/separator.svg';
import swisscomLogo from 'icons/sponsors/swiss-com.svg';
import vmareLogo from 'icons/sponsors/vmare.svg';
import vshnLogo from 'icons/sponsors/vshn.svg';

const goldSponsors = [
  { icon: googleCloudLogo, url: 'https://cloud.google.com/', name: 'Google cloud' },
  { icon: isovalentLogo, url: 'https://isovalent.com/', name: 'Isovalent' },
  { icon: vshnLogo, url: 'https://www.vshn.ch/', name: 'VSHN' },
];

const silverSponsors = [
  { icon: redHatLogo, url: 'https://www.redhat.com/', name: 'RedHat' },
  { icon: vmareLogo, url: 'https://www.vmware.com/', name: 'Vmware' },
  { icon: dynatraceLogo, url: 'https://www.dynatrace.com/', name: 'Dynatrace' },
  { icon: swisscomLogo, url: 'https://www.swisscom.ch/', name: 'Swisscom' },
  { icon: flowLogo, url: 'https://flow.swiss/', name: 'Flow' },
];

const bronzeSponsors = [
  { icon: innoqLogo, url: 'https://www.innoq.com/', name: 'Inoq' },
  { icon: adfinisLogo, url: 'https://adfinis.com/', name: 'Adfinis' },
];

const specialSponsors = [
  { icon: postFinanceLogo, url: 'https://www.postfinance.ch/', name: 'PostFinance' },
  { icon: puzzleLogo, url: 'https://www.puzzle.ch/', name: 'Puzzle ITC' },
  { icon: campToCampLogo, url: 'https://www.camptocamp.com/', name: 'CampToCamp' },
  { icon: bNovaLogo, url: 'https://b-nova.com/', name: 'b-nova' },
  { icon: acendLogo, url: 'https://acend.ch/', name: 'Acend' },
];

const Sponsors = ({ year }) => {
  const [activeColor, setActiveColor] = useState('');

  return (
    <section className="container-xl relative mt-[123px] bg-blue-super-light pt-24 before:absolute before:left-0 before:top-0 before:h-12 before:w-full before:bg-sponsors-separator before:bg-cover lg:mt-16 lg:py-14 lg:before:h-9 md:mt-10 md:pb-6 sm:mt-8 sm:before:h-8">
      <div className="container lg:!px-4 md:!px-2 xs:!px-0">
        <h2 className="leading-tighter font-mono-cyber text-4xl font-bold uppercase tracking-tighter md:text-3xl">
          Thanks to our sponsors for KCD 2023
        </h2>
        <p className="mt-3 max-w-[960px] text-xl leading-normal text-primary-1 lg:text-lg">
          We would like to extend a special thank you to our sponsors for their support and
          commitment to the community. We couldn&apos;t do it without them! If you&apos;re
          interested in becoming a next year sponsor, please contact{' '}
          <Link
            className="!border-b !border-black !text-black hover:!border-mint hover:!text-mint"
            theme="blue-underlined"
            to="mailto:hello@kcdzurich.ch"
          >
            hello@kcdzurich.ch
          </Link>
        </p>
        {year === '2023' ? (
          <ul className="mt-10 grid grid-cols-[176px_repeat(5,minmax(0,208px))] grid-rows-[repeat(5,95px)] lg:grid-cols-[135px_repeat(5,minmax(0,1fr))] lg:grid-rows-[repeat(5,73px)] md:grid-cols-[100px_repeat(5,minmax(0,1fr))] md:grid-rows-[repeat(5,48px)] sm:mt-6 sm:grid-cols-2 sm:grid-rows-none">
            <li className="relative col-end-2 flex items-center before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-[2px] before:bg-[#ADCFD3] sm:col-span-full sm:mb-3 sm:before:hidden">
              <span className="relative z-10 bg-[#EFFAFB] py-3">
                <img
                  className="md:max-w-[15px] sm:max-w-[23px]"
                  src={separator}
                  width={28}
                  height={19}
                  alt=""
                />
              </span>
              <h3
                className={clsx(
                  activeColor === 'gold' && 'text-[#E4A62D]',
                  'ml-4 font-mono-cyber text-3xl font-bold uppercase leading-normal tracking-wide transition-colors duration-200 lg:text-2xl md:ml-2 md:text-xl sm:ml-3 sm:text-2xl'
                )}
              >
                Gold
              </h3>
            </li>
            {goldSponsors.map(({ icon, url, name }, index) => (
              <li
                className={clsx('dash-border dash-border-right-and-bottom-none', {
                  'sm:[border-image-width:5px_5px_5px_5px]': index % 2 !== 0,
                  'w-[209px] [border-image-width:5px_5px_0_5px] lg:w-auto sm:[border-image-width:5px_5px_5px_5px]':
                    goldSponsors.length - 1 === index,
                })}
                key={index}
              >
                <a
                  className="flex h-full w-full items-center justify-center px-4 py-3.5 transition-all duration-200 hover:bg-primary-1 hover:bg-opacity-10 md:p-2"
                  href={url}
                  target="_blank"
                  rel="nofollow noreferrer"
                  onMouseEnter={() => setActiveColor('gold')}
                  onMouseLeave={() => setActiveColor('')}
                >
                  <span className="sr-only">{`${name} partner link`}</span>
                  <img
                    className="sm:max-h-[48px] sm:w-auto"
                    src={icon}
                    width={176}
                    height={65}
                    loading="lazy"
                    alt=""
                  />
                </a>
              </li>
            ))}
            <li className="relative col-end-2 flex items-center before:absolute before:bottom-0 before:left-0 before:h-full before:w-[2px] before:bg-[#ADCFD3] sm:col-span-full sm:mb-3 sm:mt-6 sm:before:hidden">
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
                  activeColor === 'silver' && 'text-[#63B5BE]',
                  'ml-4 font-mono-cyber text-3xl font-bold uppercase leading-normal tracking-wide transition-colors duration-200 lg:text-2xl md:ml-2 md:text-xl sm:text-2xl'
                )}
              >
                Silver
              </h3>
            </li>
            {silverSponsors.map(({ icon, url, name }, index) => (
              <li
                className={clsx('dash-border', {
                  'dash-border-right-and-bottom-none': index < 2,
                  'sm:[border-image-width:5px_5px_0_5px]': index % 2 !== 0,
                  '[border-image-width:5px_0_5px_5px] sm:[border-image-width:5px_0_0_5px]':
                    index === 2,
                  '[border-image-width:5px_0_5px_5px] sm:[border-image-width:5px_5px_5px_5px]':
                    index === 3,
                })}
                key={index}
              >
                <a
                  className="flex h-full w-full items-center justify-center px-4 py-3.5 transition-all duration-200 hover:bg-primary-1 hover:bg-opacity-10"
                  href={url}
                  target="_blank"
                  rel="nofollow noreferrer"
                  onMouseEnter={() => setActiveColor('silver')}
                  onMouseLeave={() => setActiveColor('')}
                >
                  <span className="sr-only">{`${name} partner link`}</span>
                  <img
                    className="sm:max-h-[48px] sm:w-auto"
                    src={icon}
                    width={176}
                    height={65}
                    loading="lazy"
                    alt=""
                  />
                </a>
              </li>
            ))}
            <li className="relative col-end-2 flex items-center before:absolute before:bottom-0 before:left-0 before:h-full before:w-[2px] before:bg-[#ADCFD3] sm:col-span-full sm:mb-3 sm:mt-6 sm:before:hidden">
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
                  activeColor === 'bronze' && 'text-[#B09886]',
                  'ml-4 font-mono-cyber text-3xl font-bold uppercase leading-normal tracking-wide transition-colors duration-200 lg:text-2xl md:ml-2 md:text-xl sm:text-2xl'
                )}
              >
                Bronze
              </h3>
            </li>
            {bronzeSponsors.map(({ icon, url, name }, index) => (
              <li
                className={clsx('dash-border dash-border-right-and-bottom-none', {
                  'sm:[border-image-width:5px_0_5px_5px]': index === 0,
                  'w-[209px] [border-image-width:5px_5px_0_5px] lg:w-auto sm:[border-image-width:5px_5px_5px_5px]':
                    index === 1,
                })}
                key={index}
              >
                {url ? (
                  <a
                    className="flex h-full w-full items-center justify-center px-4 py-3.5 transition-all duration-200 hover:bg-primary-1 hover:bg-opacity-10"
                    href={url}
                    target="_blank"
                    rel="nofollow noreferrer"
                    onMouseEnter={() => setActiveColor('bronze')}
                    onMouseLeave={() => setActiveColor('')}
                  >
                    <span className="sr-only">{`${name} partner link`}</span>
                    <img
                      className="sm:max-h-[48px] sm:w-auto"
                      src={icon}
                      width={176}
                      height={65}
                      loading="lazy"
                      alt=""
                    />
                  </a>
                ) : (
                  <span className="flex h-full w-full items-center justify-center px-4 py-3.5 font-mono-cyber text-2xl font-bold uppercase -tracking-[0.72px] text-[#7d8597] lg:text-xl md:text-sm sm:min-h-[76px] sm:py-3.5">
                    loading...
                    <img
                      className="ml-3 lg:ml-5 lg:h-[20px] lg:w-[20px] sm:h-[16px] sm:w-[16px]"
                      src={loader}
                      width={26}
                      height={26}
                      loading="lazy"
                      alt=""
                    />
                  </span>
                )}
              </li>
            ))}
            <li className="relative col-end-2 flex items-center before:absolute before:left-0 before:top-0 before:h-1/2 before:w-[2px] before:bg-[#ADCFD3] sm:col-span-full sm:mb-3 sm:mt-6 sm:before:hidden">
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
                  'ml-4 font-mono-cyber text-3xl font-bold uppercase leading-normal tracking-wide lg:text-2xl md:ml-2 md:text-xl sm:text-2xl'
                )}
              >
                Special
              </h3>
            </li>
            {specialSponsors.map(({ icon, url, name }, index) => (
              <li
                className={clsx(
                  'dash-border dash-border-right-none sm:dash-border-right-and-bottom-none',
                  {
                    '[border-image-width:5px_5px_5px_5px] sm:[border-image-width:5px_5px_5px_5px]':
                      specialSponsors.length - 1 === index,
                    'sm:[border-image-width:5px_5px_0_5px]': index === 1,
                    'sm:[border-image-width:5px_5px_5px_5px]': index === 3,
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
                    height={65}
                    loading="lazy"
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <SponsorsList className="py-10 sm:py-6" />
        )}
      </div>
    </section>
  );
};

Sponsors.propTypes = {
  year: PropTypes.oneOf(['2023', '2024']).isRequired,
};

export default Sponsors;
