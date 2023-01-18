import React from 'react';

import MENUS from 'constants/menus';
import Logo from 'icons/logo.inline.svg';

import Link from '../link';

const Footer = () => (
  <footer className="safe-paddings bg-gray-10">
    <div className="container flex items-center justify-between pt-5 pb-2">
      <Link className="ml-2" to="/">
        <Logo className="h-12 w-44" />
      </Link>

      <nav>
        <ul className="flex space-x-10 text-white">
          {MENUS.footer.map(({ to, text }, index) => (
            <li className="font-semibold text-primary-1" key={index}>
              <Link to={to}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
