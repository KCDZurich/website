import React from 'react';

import MENUS from 'constants/menus';
import Logo from 'icons/logo.inline.svg';

import Link from '../link';

const Footer = () => (
  <footer className="safe-paddings border-t border-t-gray-10 bg-white">
    <div className="container flex items-center justify-between pt-5 pb-5 sm:justify-around">
      <Link className="ml-2" to="/">
        <Logo className="h-12 w-44" />
      </Link>

      <nav>
        <ul className="flex space-x-10 text-white md:mr-4 md:space-x-8 sm:mx-6 sm:max-w-[200px] sm:flex-col sm:space-y-3 sm:space-x-0 sm:self-center">
          {MENUS.footer.map(({ to, text }, index) => (
            <li className="font-semibold text-primary-1" key={index}>
              <Link theme="primary" to={to}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
