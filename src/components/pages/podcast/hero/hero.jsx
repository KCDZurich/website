import clsx from 'clsx';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton } from 'react-share';

import useCopyToClipboard from 'hooks/use-copy-to-clipboard';

import AmazonIcon from './svg/amazon-icon.inline.svg';
import AppleIcon from './svg/apple-icon.inline.svg';
import CopyIcon from './svg/copy-icon.inline.svg';
import FacebookIcon from './svg/facebook-logo.inline.svg';
import GoogleIcon from './svg/google-icon.inline.svg';
import LinkedinIcon from './svg/linkedin-logo.inline.svg';
import SpotifyIcon from './svg/spotify-icon.inline.svg';
import TwitterIcon from './svg/twitter-logo.inline.svg';

const TITLE = 'Kubernetes Community Day Zürich 2023';
const SUB_TITLE =
  'Podcast by <a class="text-blue-1" href="https://b-nova.com/home/techhub/decodify" target="_blank">decodify</a> presented by <a class="text-blue-1" href="https://b-nova.com/home" target="_blank">B-Nova</a>';
const DURATION = '36 min';
const DATE = 'June 18, 2023';
const DESCRIPTION =
  '<p>We would like to extend a thank you to B-Nova, our podcast sponsor for the Kubernetes Community Day Zürich 2023.</p><p>Their generous support and commitment to the community have made it possible for us to continue sharing valuable content and insights about KCD Zürich. Thank you, B-Nova, for empowering our community through your sponsorship.</p><p>Make sure to subscribe and stay tuned for more exciting discussions and insights!</p>';

const SOCIAL_SHARE_TEXT =
  'Dive into our insightful Podcast and meet our brilliant speakers, making waves in the industry. This has been made possible by our dedicated sponsor, B-Nova, who shares our passion for enriching our community. Listen now at Kcdzurich.ch/podcast 🎧';

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
    <section className="safe-paddings pt-28 pb-20 md:pt-20">
      <div className="container-md">
        <h1 className="text-6xl font-bold leading-denser text-primary-1">Podcast</h1>
        <div className="mt-20 flex gap-x-[10%] md:mt-10 sm:flex-col sm:gap-y-10">
          <div className="w-[384px] max-w-full shrink-0 md:w-2/5 sm:w-full">
            <StaticImage
              className="rounded-[4px] shadow-xl"
              imgClassName="rounded-[4px]"
              src="./img/podcast-cover.jpg"
              alt="Podcast cover"
              loading="eager"
            />
            <div className="mt-7 flex items-center overflow-hidden text-primary-1">
              <h3 className="whitespace-nowrap">Share episode:</h3>
              <div className="ml-6 flex gap-x-4 md:ml-3">
                {PODCAST_SOCIAL_LINKS.map(({ icon: Icon, tag: Tag }, index) => (
                  <Tag className="group" url={sharedUrl} title={SOCIAL_SHARE_TEXT} key={index}>
                    <Icon className="h-5 w-5 transition-colors duration-200 group-hover:text-blue-1" />
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
                      className="w-5 shrink-0 cursor-pointer transition duration-200 hover:text-blue-1"
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
            <div className="mt-5 text-primary-1">
              <h3 className="mt-7">Listen to podcast:</h3>
              <ul className="mt-3 flex gap-x-5 md:gap-x-3">
                {PODCAST_LINKS.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <li key={index}>
                      <a
                        className="flex h-full items-center justify-center rounded-lg border border-primary-2 py-2 px-7 shadow-sm transition-colors duration-200 hover:text-blue-1 md:px-4"
                        href={link.to}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        <span className="sr-only">{link.title}</span>
                        <Icon className="h-auto w-[24px]" aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="text-primary-1">
            <header className="mb-6 border-b border-gray-10 pb-6">
              <h2 className="text-2xl font-bold leading-snug">{TITLE}</h2>
              <p
                className="mt-3 text-lg font-semibold leading-normal"
                dangerouslySetInnerHTML={{ __html: SUB_TITLE }}
              />
              <p className="mt-3 text-sm font-medium leading-normal">
                <span>Duration: {DURATION}</span>
                <span className="relative ml-8 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3">
                  {DATE}
                </span>
              </p>
            </header>
            <div
              className="space-y-5 text-lg leading-normal"
              dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
