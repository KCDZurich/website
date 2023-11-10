import React from 'react';
import slugify from 'slugify';

import LINKS from 'constants/links.js';
import MENUS from 'constants/menus';
import GoogleMaps from 'icons/google-maps-icon.inline.svg';
import LinkedIn from 'icons/linkedin-logo.inline.svg';
import Logo from 'icons/logo.inline.svg';
import Twitter from 'icons/twitter-logo.inline.svg';
import Youtube from 'icons/youtube.inline.svg';

import Button from '../button';
import Link from '../link';

const items = [
  { icon: GoogleMaps, iconClassName: 'w-11 h-9', url: LINKS.googlemaps.to, name: 'Google maps' },
  { icon: LinkedIn, iconClassName: 'w-4 h-4', url: LINKS.linkedin.to, name: 'LinkedIn' },
  { icon: Twitter, iconClassName: 'w-5 h-4', url: LINKS.twitter.to, name: 'Twitter' },
  { icon: Youtube, iconClassName: 'w-6 h-5', url: LINKS.youtube.to, name: 'YouTube' },
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
      <div className="container flex items-center justify-between pb-5 pt-5 sm:flex-col sm:items-start">
        <Link to="/">
          <Logo className="h-12 w-44" />
          <span className="sr-only">KCD Zurich</span>
        </Link>

        <nav className="mt-4 flex sm:mt-12">
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

        <div className="mt-4 sm:mt-12">
          <Link
            className="ml-2 font-semibold transition-colors duration-200 sm:ml-0"
            theme="primary"
            to="mailto:hello@kcdzurich.ch"
          >
            hello@kcdzurich.ch
          </Link>
          <ul className="mt-4 flex min-w-fit gap-x-2.5">
            {items.map(({ icon, iconClassName, url }, index) => {
              const Icon = icon;

              return (
                <li className="h-9 w-9" key={index}>
                  <Link
                    className="flex h-full w-full items-center justify-center"
                    to={url}
                    target="_blank"
                  >
                    <Icon className={iconClassName} />
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
