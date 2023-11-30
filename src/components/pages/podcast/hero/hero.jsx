import clsx from 'clsx';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton } from 'react-share';

import useCopyToClipboard from 'hooks/use-copy-to-clipboard';
import CopyIcon from 'icons/copy-pixel-icon.inline.svg';
import FacebookIcon from 'icons/facebook-pixel-logo.inline.svg';
import LinkedinIcon from 'icons/linkedin-pixel-logo.inline.svg';
import TwitterIcon from 'icons/x-pixel-logo.inline.svg';

import AmazonIcon from './svg/amazon-icon.inline.svg';
import AppleIcon from './svg/apple-icon.inline.svg';
import GoogleIcon from './svg/google-icon.inline.svg';
import SpotifyIcon from './svg/spotify-icon.inline.svg';

// const TITLE = 'Kubernetes Community Day Zürich 2023';
const SUB_TITLE =
  'Podcast by <a class="text-[#F14600]" href="https://b-nova.com/home/techhub/decodify" target="_blank">decodify</a> presented by <a class="text-[#F14600]" href="https://b-nova.com/home" target="_blank">b-nova</a>';
const DURATION = '36:00';

const DESCRIPTION =
  '<p>We would like to extend a thank you to b-nova, our podcast sponsor for the Kubernetes Community Day Zürich 2023.</p><p>Their generous support and commitment to the community have made it possible for us to continue sharing valuable content and insights about KCD Zürich. Thank you, b-nova, for empowering our community through your sponsorship.</p><p>Make sure to subscribe and stay tuned for more exciting discussions and insights!</p>';

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
    <section className="safe-paddings pb-20 pt-[86px] md:pt-12 sm:pb-16 xs:pt-8">
      <div className="container">
        <h1 className="sr-only">Podcast</h1>
        <div className="flex md:flex-col md:gap-y-10 md:bg-[linear-gradient(180deg,#DAF2F4_0%,#E8F1F3_100%)] md:p-8 sm:px-6">
          <div className="relative flex shrink-0 flex-col justify-center bg-[linear-gradient(180deg,#DAF2F4_0%,#E8F1F3_100%)] py-8 pl-8 pr-9 after:absolute after:left-full after:top-0 after:h-6 after:w-1.5 after:bg-[#daf2f4] lg:flex-1 lg:shrink md:flex-row md:gap-x-8 md:bg-none md:p-0 xs:flex-col">
            <div className="max-w-[488px] border-4 border-b-[#0a113333] border-l-white border-r-[#0a113333] border-t-white p-2.5 md:flex-1 sm:max-w-none">
              <StaticImage
                class="h-auto w-full max-w-[460px] lg:max-w-none md:max-w-full md:object-contain"
                src="./img/podcast-cover.jpg"
                alt="Podcast cover"
                loading="eager"
              />
            </div>
            <div className="max-w-[488px] md:flex-1 sm:max-w-none">
              <div className="mt-4 flex items-baseline whitespace-nowrap font-mono-cyber text-[22px] font-normal md:mt-0 md:flex-col xs:mt-4 xs:flex-row 2xs:flex-col">
                <span>b-nova - &nbsp;&gt;_decodify</span>
                <span className="flex w-full items-baseline justify-between">
                  <time>(JUN18.23)</time>

                  <span className="flex h-px flex-1 bg-[url('/images/dash-line.svg')] bg-cover" />
                  <span>{DURATION}</span>
                </span>
              </div>

              <div className="mt-[18px] flex items-center gap-x-7 text-primary-1 lg:flex-col lg:items-start lg:gap-y-1.5">
                <h3 className="whitespace-nowrap font-mono-cyber text-[22px] font-bold uppercase tracking-[-0.04em]">
                  Listen to podcast:
                </h3>
                <ul className="flex gap-x-2 md:gap-x-3">
                  {PODCAST_LINKS.map((link, index) => {
                    const Icon = link.icon;

                    return (
                      <li key={index}>
                        <a
                          className="flex h-full items-center justify-center border-2 border-primary-1 bg-white px-5 py-1 transition-colors duration-200 hover:bg-blue-light md:px-4 2xs:px-3"
                          href={link.to}
                          target="_blank"
                          rel="nofollow noreferrer"
                        >
                          <span className="sr-only">{link.title}</span>
                          <Icon className="h-auto w-6" aria-hidden />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="before:triangle relative mt-6 flex w-full flex-col bg-[linear-gradient(180deg,#DAF2F4_0%,#E8F1F3_100%)] py-8 pl-9 pr-8 text-primary-1 before:absolute before:-left-[11px] before:bottom-[calc(100%-16.5px)] after:absolute after:bottom-8 after:left-0 after:top-1 after:w-px after:bg-[url('/images/dash-line-gray.svg')] lg:flex-1 md:mt-0 md:border-t md:border-dashed md:border-primary-1/20 md:bg-none md:p-0 md:before:border-none md:after:bg-none">
            <header className="mt-8 max-w-[520px] md:max-w-none">
              <h2
                className="flex items-center font-sans-cyber text-6xl font-bold leading-denser text-primary-1 md:text-5xl sm:text-4xl"
                aria-hidden
              >
                podcast
              </h2>
              <p
                className="mt-3 text-lg font-semibold leading-normal sm:text-base"
                dangerouslySetInnerHTML={{ __html: SUB_TITLE }}
              />
            </header>
            <div
              className="mb-8 mt-6 max-w-[520px] space-y-5 border-t border-dashed border-primary-1/20 pt-7 text-lg leading-normal md:max-w-none sm:text-base"
              dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
            />
            <div className="-mb-1 mt-auto flex items-center overflow-hidden text-primary-1 2xs:flex-col 2xs:items-start">
              <h3 className="whitespace-nowrap font-semibold">Share episode:</h3>
              <div className="ml-5 flex gap-x-4 md:ml-3 2xs:ml-0 2xs:mt-1">
                {PODCAST_SOCIAL_LINKS.map(({ icon: Icon, tag: Tag }, index) => (
                  <Tag className="group" url={sharedUrl} title={SOCIAL_SHARE_TEXT} key={index}>
                    <Icon className="h-[30px] w-[30px] text-primary-1 transition-colors duration-200 group-hover:text-[#405480]" />
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
                      className="w-[30px] shrink-0 cursor-pointer text-primary-1 transition-colors duration-200 hover:text-[#405480]"
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
