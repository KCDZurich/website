import clsx from 'clsx';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton } from 'react-share';

import useCopyToClipboard from 'hooks/use-copy-to-clipboard';
import CopyIcon from 'icons/pixel/copy-pixel-icon.inline.svg';
import FacebookIcon from 'icons/pixel/facebook-pixel-logo.inline.svg';
import LinkedinIcon from 'icons/pixel/linkedin-pixel-logo.inline.svg';
import TwitterIcon from 'icons/pixel/x-pixel-logo.inline.svg';

import AmazonIcon from './svg/amazon-icon.inline.svg';
import AppleIcon from './svg/apple-icon.inline.svg';
import GoogleIcon from './svg/google-icon.inline.svg';
import loadingIcon from './svg/loading.svg';
import rectangleSvg from './svg/rectangle.svg';
import SpotifyIcon from './svg/spotify-icon.inline.svg';

const SUB_TITLE =
  'Podcast by <a href="https://b-nova.com/home/techhub/decodify" target="_blank">decodify</a> presented by <a href="https://b-nova.com/home" target="_blank">b-nova</a>';
const DURATION = '23:05';

const DESCRIPTION =
  '<p>They’re back – the charming show hosts from b-nova, Tom and Stefan! This time, they’ve sat down with our most recent KCD Zürich speakers to extract even more exciting stories and insights. Stay tuned and listen in to the latest episodes.</p><p>On behalf of the Cloud Native Zürich team and the community, we extend a heartfelt thank you! Their generous support and commitment to the community have made it possible for us to continue sharing valuable content and insights.</p>';

const SOCIAL_SHARE_TEXT =
  'Dive into our insightful Podcast and meet our brilliant speakers, making waves in the industry. This has been made possible by our dedicated sponsor, b-nova, who shares our passion for enriching our community. Listen now at Kcdzurich.ch/podcast 🎧';

const PODCAST_SOCIAL_LINKS = [
  {
    icon: TwitterIcon,
    tag: TwitterShareButton,
  },
  {
    icon: LinkedinIcon,
    tag: LinkedinShareButton,
  },
  {
    icon: FacebookIcon,
    tag: FacebookShareButton,
  },
];

const PODCAST_LINKS = [
  {
    to: 'https://podcasts.apple.com/de/podcast/decodify/id1623146015?l=en',
    title: 'Apple Podcast',
    icon: AppleIcon,
  },
  {
    to: 'https://open.spotify.com/show/5y6dGUnEuXjUQCZofTAVqg',
    title: 'Spotify',
    icon: SpotifyIcon,
  },
  {
    to: 'https://podcasts.google.com/feed/aHR0cHM6Ly9kZWNvZGlmeS5iLW5vdmEuY29tL3Jzc2ZlZWQ',
    title: 'Google podcasts',
    icon: GoogleIcon,
  },
  {
    to: 'https://music.amazon.de/podcasts/ee1e2a24-ea2f-423f-a724-246f8bc38bc7/decodify',
    title: 'Amazon Music',
    icon: AmazonIcon,
  },
];

const Hero = () => {
  const { isCopied, handleCopy } = useCopyToClipboard(3000);
  const sharedUrl = `${process.env.GATSBY_DEFAULT_SITE_URL}/podcast`;

  return (
    <section className="safe-paddings pt-[86px] lg:pt-10 md:pt-[52px] sm:pt-14">
      <div className="container">
        <div className="relative flex sm:flex-col sm:gap-y-8 sm:overflow-hidden sm:bg-[linear-gradient(180deg,#DAF2F4_0%,#E8F1F3_100%)] sm:px-6 sm:pb-8 sm:pt-10">
          <img
            className="absolute -top-[18px] left-[56%] hidden h-[35px] w-auto sm:block"
            src={rectangleSvg}
            width={587}
            height={35}
            loading="lazy"
            alt=""
          />
          <div className="relative flex shrink-0 flex-col bg-[linear-gradient(180deg,#DAF2F4_0%,#E8F1F3_100%)] py-8 pl-8 pr-9 after:absolute after:left-full after:top-0 after:h-6 after:w-1.5 after:bg-[#daf2f4] lg:shrink lg:pb-8 lg:pl-6 lg:pr-7 lg:pt-6 md:pr-[22px] md:pt-11 sm:bg-none sm:p-0">
            <div className="max-w-[488px] border-4 border-b-[#0a113333] border-l-white border-r-[#0a113333] border-t-white p-2.5 lg:max-w-[386px] md:border-[3px] sm:max-w-none">
              <StaticImage
                class="h-auto w-full max-w-[460px] lg:max-w-[362px] md:max-w-[262px] md:object-contain sm:max-w-none"
                src="./img/podcast-cover.jpg"
                alt="Podcast cover"
                loading="eager"
              />
            </div>

            <div className="mb-[18px] mt-4 flex items-baseline whitespace-nowrap font-mono-cyber text-[22px] font-normal lg:mb-4 lg:max-w-[386px] lg:text-lg md:mt-3 md:text-sm sm:my-2.5 sm:max-w-none">
              <span>b-nova - &nbsp;&gt;_decodify</span>
              <span className="flex w-full items-baseline justify-between">
                <time>(JUN19.24)</time>

                <span className="flex h-px flex-1 bg-[url('/images/dash-line.svg')] bg-cover" />
                <span>{DURATION}</span>
              </span>
            </div>

            <div className="mt-auto flex items-center gap-x-7 text-primary-1 lg:gap-x-5 md:flex-col md:items-start md:gap-y-1.5 sm:flex-row sm:gap-x-[18px] [@media(max-width:359px)]:flex-col">
              <span className="whitespace-nowrap font-mono-cyber text-[22px] font-bold uppercase tracking-tighter lg:text-base lg:tracking-[-0.03em]">
                Listen to podcast:
              </span>
              <ul className="flex gap-x-2 md:gap-x-[5px]">
                {PODCAST_LINKS.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <li key={index}>
                      <a
                        className="flex h-full items-center justify-center border-2 border-primary-1 bg-white px-5 py-1 transition-colors duration-200 hover:bg-blue-light lg:px-4 lg:py-0.5 md:px-4 md:py-[2px] sm:border-[1.5px] sm:px-2"
                        href={link.to}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        <span className="sr-only">{link.title}</span>
                        <Icon className="h-auto w-6 lg:w-[19px] sm:w-3" aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="before:triangle relative mt-6 flex w-full flex-col bg-[linear-gradient(180deg,#DAF2F4_0%,#E8F1F3_100%)] py-8 pl-9 pr-8 text-primary-1 before:absolute before:-left-[11px] before:bottom-[calc(100%-16.5px)] after:absolute after:bottom-8 after:left-0 after:top-1 after:w-px after:bg-[url('/images/dash-line-gray.svg')] lg:flex-1 lg:pl-7 md:pl-[22px] md:pt-6 sm:mt-0 sm:bg-[url('/images/dash-line-gray-horizontal.svg')] sm:bg-[length:100%_auto] sm:bg-no-repeat sm:p-0 sm:before:border-none sm:after:bg-none">
            <header className="mt-8 max-w-[520px] lg:mt-3 md:mt-0 md:max-w-none sm:mt-8">
              <h1
                className="flex items-center font-sans-cyber text-6xl font-bold leading-denser text-primary-1 lg:text-5xl md:text-4xl sm:text-[32px]"
                aria-hidden
              >
                podcast
              </h1>
              <p
                className="mt-3 text-lg leading-normal lg:text-sm md:mt-2 md:text-[13px] sm:mt-2 [&_a]:font-semibold [&_a]:text-[#F14600] [&_a]:transition-colors [&_a]:duration-200 hover:[&_a]:text-[#FF9737]"
                dangerouslySetInnerHTML={{ __html: SUB_TITLE }}
              />
            </header>
            <div
              className="mb-8 mt-6 max-w-[520px] space-y-5 bg-[url('/images/dash-line-gray-horizontal.svg')] bg-[length:100%_auto] bg-no-repeat pt-7 text-lg leading-normal lg:mt-[18px] lg:max-w-[87%] lg:space-y-[18px] lg:pt-5 lg:text-sm md:mb-5 md:max-w-[96%] md:text-[13px] sm:mt-8 sm:max-w-none sm:bg-none sm:pt-0"
              dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
            />
            <p className="flex items-center gap-x-3 font-mono-cyber text-2xl -tracking-[0.03em] opacity-50 lg:gap-x-2 lg:text-base">
              <img
                className="lg:max-w-[18px]"
                src={loadingIcon}
                width={24}
                height={24}
                loading="lazy"
                alt=""
              />
              Stay tuned - new episodes coming soon....
            </p>
            <div className="-mb-1 mt-auto flex items-center overflow-hidden text-primary-1">
              <span className="whitespace-nowrap font-semibold lg:text-sm md:text-[13px]">
                Share episode:
              </span>
              <div className="ml-5 flex items-center gap-x-4 lg:gap-x-3 md:mb-0 md:ml-7 2xs:ml-5 2xs:gap-x-2">
                {PODCAST_SOCIAL_LINKS.map(({ icon: Icon, tag: Tag }, index) => (
                  <Tag className="group" url={sharedUrl} title={SOCIAL_SHARE_TEXT} key={index}>
                    <Icon className="h-[30px] w-[30px] text-primary-1 transition-colors duration-200 group-hover:text-[#405480] lg:h-6 lg:w-6 2xs:h-[18px] 2xs:w-[18px]" />
                  </Tag>
                ))}
                <LazyMotion features={domAnimation}>
                  <m.button
                    className={clsx(
                      'relative flex cursor-default items-center py-2 transition duration-200',
                      isCopied && 'pointer-events-none'
                    )}
                    animate={isCopied ? 'toggled' : 'initial'}
                    disabled={isCopied}
                    onClick={() => handleCopy(sharedUrl)}
                  >
                    <CopyIcon
                      className="w-[30px] shrink-0 cursor-pointer text-primary-1 transition-colors duration-200 hover:text-[#405480] lg:h-6 lg:w-6 2xs:h-[18px] 2xs:w-[18px]"
                      aria-hidden
                    />
                    <m.p
                      className="ml-2 whitespace-nowrap text-sm font-semibold leading-none opacity-0 md:ml-1"
                      variants={{
                        initial: {
                          opacity: 0,
                          translateY: 10,
                          transition: { duration: 0.3 },
                        },
                        toggled: {
                          opacity: 1,
                          translateY: 0,
                          transition: { duration: 0.3 },
                        },
                      }}
                    >
                      Copied!
                    </m.p>
                  </m.button>
                </LazyMotion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
