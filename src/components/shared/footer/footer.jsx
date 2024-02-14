import React from 'react';
import slugify from 'slugify';

import LINKS from 'constants/links.js';
import MENUS from 'constants/menus';
import Logo from 'icons/logo.inline.svg';
import GithubIcon from 'icons/social/github.inline.svg';
import GooglemapsIcon from 'icons/social/google-maps.inline.svg';
import LinkedinIcon from 'icons/social/linkedin.inline.svg';
import XIcon from 'icons/social/x.inline.svg';
import YoutubeIcon from 'icons/social/youtube.inline.svg';

import Button from '../button';
import Link from '../link';

const items = [
  { icon: GooglemapsIcon, url: LINKS.googlemaps.to, name: 'Google maps' },
  { icon: LinkedinIcon, url: LINKS.linkedin.to, name: 'LinkedIn' },
  { icon: XIcon, url: LINKS.twitter.to, name: 'Twitter' },
  { icon: GithubIcon, url: LINKS.github.to, name: 'GitHub' },
  { icon: YoutubeIcon, url: LINKS.youtube.to, name: 'YouTube' },
];

const Footer = () => {
  const handleAnchorClick = (e) => {
    const getAnchor = (str) => slugify(str).toLocaleLowerCase();

    const id = getAnchor(e.target.firstChild.data);
    const element = document.getElementById(id);

    if (element) {
      const indent = 50;
      const elementTop = element.getBoundingClientRect().top;
      const elementOffset = window.pageYOffset + elementTop - indent;

      window.scrollTo({
        top: elementOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="safe-paddings border-t border-t-gray-10 bg-white">
      <div className="container flex items-center justify-between pb-5 pt-5 md:items-start md:gap-x-8 sm:flex-col">
        <Link to="/">
          <Logo className="h-[40px] w-[149px] md:h-auto md:w-36" />
          <span className="sr-only">KCD Zürich</span>
        </Link>

        <nav className="mt-4 flex md:mt-0 sm:mt-12">
          <ul className="grid min-w-fit grid-cols-2 grid-rows-2 gap-x-3 gap-y-4 xl:gap-x-1 lg:mr-6 lg:gap-x-4 sm:mx-auto sm:gap-x-0 [@media(max-width:375px)]:grid-cols-1">
            {MENUS.footer.map(({ text, to, target, name }, index) => (
              <li className="w-fit max-w-min text-sm font-semibold text-primary-1" key={index}>
                <Button
                  className="flex sm:flex-wrap"
                  theme="link-primary"
                  to={to}
                  target={target}
                  onClick={handleAnchorClick}
                >
                  {text}
                  <span className="sr-only">Link to our {name}</span>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="m:mt-12">
          <Link
            className="ml-0.5 text-sm font-semibold transition-colors duration-200 hover:!text-[#06B3B8] sm:ml-0"
            theme="primary"
            to="mailto:hello@kcdzurich.ch"
          >
            hello@kcdzurich.ch
          </Link>
          <ul className="mt-4 flex min-w-fit gap-x-[18px]">
            {items.map(({ icon, url, name }, index) => {
              const Icon = icon;

              return (
                <li className="h-[22px] w-[22px]" key={index}>
                  <Link
                    className="group flex h-full w-full items-center justify-center"
                    to={url}
                    target="_blank"
                  >
                    <span className="sr-only">Find us at {name}</span>
                    <Icon className="h-[22px] w-[22px] text-primary-1 transition-opacity group-hover:opacity-60" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
