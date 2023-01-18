import PropTypes from 'prop-types';
import React from 'react';

import MENUS from 'constants/menus';
import Logo from 'icons/logo.inline.svg';

import Button from '../button';
import Link from '../link';

// TODO: Implement mobile menu functionality and delete eslint comment below, example — https://user-images.githubusercontent.com/20713191/144221747-70dc933e-a5bd-4586-9019-08117afc13e0.png
// eslint-disable-next-line no-unused-vars
const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header className="safe-paddings bg-[#EDC3C7] bg-opacity-10">
    <div className="container flex items-center justify-between pt-5 pb-2">
      <Link className="ml-2" to="/">
        <Logo className="h-12 w-44" />
      </Link>

      <nav>
        <ul className="flex space-x-10 text-white">
          {MENUS.header.map(({ to, text }, index) => (
            <li className="font-semibold text-primary-1" key={index}>
              <Link to={to}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="-mr-2" to="/" theme="primary" size="sm">
        Get your ticket
      </Button>
    </div>
  </header>
);

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
