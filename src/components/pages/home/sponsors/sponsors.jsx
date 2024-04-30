import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import loader from 'icons/loader.gif';
import acendLogo from 'icons/sponsors/acend.svg';
import adfinisLogo from 'icons/sponsors/adfinis.svg';
import airlockLogo from 'icons/sponsors/airlock.svg';
import amanoxLogo from 'icons/sponsors/amanox.svg';
import bNovaLogo from 'icons/sponsors/b-nova.svg';
import bespinianLogo from 'icons/sponsors/bespinian.svg';
import campToCampLogo from 'icons/sponsors/camp-to-camp.svg';
import flowLogo from 'icons/sponsors/flow.svg';
import googleCloudLogo from 'icons/sponsors/google-cloud.svg';
import innoqLogo from 'icons/sponsors/innoq.svg';
import isovalentLogo from 'icons/sponsors/isovalent.svg';
import letsbootLogo from 'icons/sponsors/letsboot.svg';
import nutanixLogo from 'icons/sponsors/nutanix.svg';
import postFinanceLogo from 'icons/sponsors/post-finance.svg';
import puzzleLogo from 'icons/sponsors/puzzle.svg';
import redHatLogo from 'icons/sponsors/red-hat.svg';
import separator from 'icons/sponsors/separator.svg';
import splunkLogo from 'icons/sponsors/splunk.svg';
import suseLogo from 'icons/sponsors/suse.svg';
import swisscomLogo from 'icons/sponsors/swiss-com.svg';
import veeamLogo from 'icons/sponsors/veeam.svg';
import vshnLogo from 'icons/sponsors/vshn.svg';

const title = 'Sponsors';
const subtitle = 'Already Joined';
const goldSponsors = [
  { icon: googleCloudLogo, url: 'https://cloud.google.com/', name: 'Google cloud' },
  { icon: isovalentLogo, url: 'https://isovalent.com/', name: 'Isovalent' },
  { icon: vshnLogo, url: 'https://www.vshn.ch/', name: 'VSHN' },
];
const silverSponsors = [
  { icon: redHatLogo, url: 'https://www.redhat.com/', name: 'RedHat' },
  { icon: flowLogo, url: 'https://flow.swiss/', name: 'Flow' },
  { icon: veeamLogo, url: 'https://www.veeam.com/', name: 'Veeam' },
  { icon: airlockLogo, url: 'https://www.airlock.com/en/', name: 'Airlock' },
  { icon: amanoxLogo, url: 'https://www.amanox.ch/en/', name: 'Amanox Solutions' },
  { icon: nutanixLogo, url: 'https://www.nutanix.com/', name: 'Nutanix' },
  { icon: swisscomLogo, url: 'https://www.swisscom.ch/', name: 'Swisscom' },
];
const bronzeSponsors = [
  { icon: innoqLogo, url: 'https://www.innoq.com/', name: 'Inoq' },
  { icon: adfinisLogo, url: 'https://adfinis.com/', name: 'Adfinis' },
  { icon: bespinianLogo, url: 'https://bespinian.io/', name: 'Bespinian' },
  { icon: letsbootLogo, url: 'https://www.letsboot.ch/', name: 'Letsboot.ch' },
  { icon: splunkLogo, url: 'https://www.splunk.com/', name: 'Splunk' },
  { icon: suseLogo, url: 'https://www.suse.com/', name: 'Suse' },
];
const specialSponsors = [
  { icon: postFinanceLogo, url: 'https://www.postfinance.ch/', name: 'PostFinance' },
  { icon: puzzleLogo, url: 'https://www.puzzle.ch/', name: 'Puzzle ITC' },
  { icon: campToCampLogo, url: 'https://www.camptocamp.com/', name: 'CampToCamp' },
  { icon: bNovaLogo, url: 'https://b-nova.com/', name: 'b-nova' },
  { icon: acendLogo, url: 'https://acend.ch/', name: 'Acend' },
];

const Sponsors = () => {
  const [activeColor, setActiveColor] = useState('');

  return (
    <section className="safe-paddings relative" id="sponsors">
      <div className="container-xl bg-blue-light bg-opacity-90">
        <div className="container flex items-center gap-x-20 py-[72px] lg:gap-x-16 lg:!px-4 lg:py-14 md:gap-x-4 md:!px-2 md:py-14 xs:flex-col-reverse xs:gap-y-4 xs:!px-0">
          <div className="text-2xl leading-normal text-primary-1 lg:text-base md:text-sm xs:text-base">
            <h2 className="font-sans-cyber text-[52px] font-bold lowercase leading-tight lg:text-[40px] md:text-[32px]">
              {title}
            </h2>
            <p className="mt-4 lg:mt-3 xs:mt-4">
              <span className="font-semibold">Kubernetes Community Days</span> is more than an
              event; it's a community-driven movement, and we invite you to be a vital contributor
              to its success. Connect with us today to explore how you can make a lasting impact on
              the future of cloud-native computing.
            </p>
            <Button
              className="!h-13 mt-9 !px-10 lg:mt-12 md:mt-6 md:!text-[11px] xs:mt-8"
              to="mailto:hello@kcdzurich.ch"
              theme="primary"
              size="sm"
            >
              Contact Us
            </Button>
          </div>
          <StaticImage
            className="-mr-2 max-w-[560px] shrink-0 lg:mr-0 lg:max-w-[474px] md:!hidden"
            src="./images/sponsors-illustration.png"
            width={549}
            heigth={349}
            alt=""
            loading="lazy"
          />
          <StaticImage
            className="-mr-4 -mt-5 !hidden max-w-[355px] shrink-0 md:!block xs:mr-0 xs:mt-0 xs:max-w-[95%]"
            src="./images/sponsors-tablet.png"
            width={355}
            heigth={221}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div className="container-xl relative bg-blue-super-light py-24 before:absolute before:left-0 before:top-0 before:h-12 before:w-full before:bg-sponsors-separator before:bg-cover lg:py-14 lg:before:h-9 md:py-10 sm:before:h-8">
        <div className="container lg:!px-4 md:!px-2 xs:!px-0">
          <h2 className="font-mono-cyber text-4xl font-bold uppercase tracking-wide lg:text-[32px] md:text-2xl xs:text-[32px]">
            {subtitle}
          </h2>
          <ul className="mt-8 grid grid-cols-[176px_repeat(5,minmax(0,208px))] grid-rows-[repeat(5,95px)] lg:grid-cols-[135px_repeat(5,minmax(0,1fr))] lg:grid-rows-[repeat(5,73px)] md:grid-cols-[100px_repeat(5,minmax(0,1fr))] md:grid-rows-[repeat(5,48px)] sm:mt-6 sm:grid-cols-2 sm:grid-rows-none">
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
                  'ml-4 font-mono-cyber text-3xl font-bold uppercase leading-normal tracking-wide transition-colors duration-200 lg:text-2xl md:text-xl sm:ml-3 sm:text-2xl'
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
                    height={64}
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
                  'ml-4 font-mono-cyber text-3xl font-bold uppercase leading-normal tracking-wide transition-colors duration-200 lg:text-2xl md:text-xl sm:text-2xl'
                )}
              >
                Silver
              </h3>
            </li>
            {silverSponsors.map(({ icon, url, name }, index) => (
              <li
                className={clsx('dash-border', {
                  'dash-border-right-and-bottom-none': index === 0,
                  'sm:[border-image-width:5px_5px_0_5px]': index % 2 !== 0,
                  '[border-image-width:5px_0_5px_5px]': index === 1,
                  '[border-image-width:5px_0_5px_5px] sm:[border-image-width:5px_0_0_5px]':
                    index === 2,
                  'dash-border-right-and-bottom-none col-start-2 col-end-3 sm:col-span-1 sm:[border-image-width:5px_0_5px_5px]':
                    index === 4,
                  'col-start-3 col-end-4 w-[209px] [border-image-width:0_5px_0_5px] lg:w-auto sm:col-span-1 sm:![border-image-width:5px_5px_5px_5px]':
                    index === 5,
                  'w-[209px] [border-image-width:0_5px_0_0] lg:w-auto sm:![border-image-width:0_5px_5px_5px]':
                    index === 6,
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
                    height={64}
                    loading="lazy"
                    alt=""
                  />
                </a>
              </li>
            ))}

            <li className="relative col-end-2 row-end-4 flex items-center before:absolute before:bottom-0 before:left-0 before:h-full before:w-[2px] before:bg-[#ADCFD3] sm:hidden" />
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
                  activeColor === 'special' && 'text-[#5E88C8]',
                  'ml-4 font-mono-cyber text-3xl font-bold uppercase leading-normal tracking-wide lg:text-2xl md:text-xl sm:text-2xl'
                )}
              >
                Special
              </h3>
            </li>
            {specialSponsors.map(({ icon, url, name }, index) => (
              <li
                className={clsx('dash-border dash-border-right-and-bottom-none', {
                  'sm:[border-image-width:5px_5px_0_5px]': index === 1,
                  'sm:[border-image-width:5px_0_5px_5px]': index === 2,
                  'sm:[border-image-width:5px_5px_5px_5px]': index === 3,
                  'sm:[border-image-width:0_5px_5px_5px]': index === 4,
                  '[border-image-width:5px_5px_5px_5px]': specialSponsors.length - 1 === index,
                })}
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
                  activeColor === 'bronze' && 'text-[#B09886]',
                  'ml-4 font-mono-cyber text-3xl font-bold uppercase leading-normal tracking-wide transition-colors duration-200 lg:text-2xl md:text-xl sm:text-2xl'
                )}
              >
                Bronze
              </h3>
            </li>
            {bronzeSponsors.map(({ icon, url, name }, index) => (
              <li
                className={clsx(
                  'dash-border dash-border-right-none sm:dash-border-right-and-bottom-none',
                  {
                    '[border-image-width:0_5px_5px_5px] sm:[border-image-width:0_5px_5px_5px]':
                      bronzeSponsors.length - 1 === index,
                    'sm:[border-image-width:5px_5px_0_5px]': index === 1,
                    'sm:[border-image-width:5px_5px_5px_5px]': index === 2,
                    '[border-image-width:5px_5px_5px_5px] sm:[border-image-width:5px_5px_5px_0]':
                      index === 3,
                    'col-start-2 col-end-3 [border-image-width:0_0_5px_5px] sm:col-span-1 sm:[border-image-width:0_5px_5px_5px]':
                      index === 4,
                    'col-start-3 col-end-4 w-[209px] [border-image-width:0_5px_5px_5px] lg:w-auto sm:col-span-1 sm:![border-image-width:0_5px_5px_0]':
                      index === 5,
                  }
                )}
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
                      height={64}
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
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
