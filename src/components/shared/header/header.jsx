import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import MENUS from 'constants/menus';
import Logo from 'icons/logo.inline.svg';

import Burger from '../burger';
import Button from '../button';
import Link from '../link';

const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header
    className={clsx(
      'safe-paddings transition-200 z-10 transition-colors',
      isMobileMenuOpen ? 'bg-gray-12 bg-opacity-100' : 'bg-[#EDC3C7] bg-opacity-10'
    )}
  >
    <div className="container flex items-center justify-between pt-5 pb-2">
      <Link className="z-50 ml-2" to="/">
        <Logo className="h-12 w-44" />
      </Link>

      <nav>
        <ul className="flex space-x-10 text-white md:hidden">
          {MENUS.header.map(({ to, text }, index) => (
            <li className="font-semibold text-primary-1" key={index}>
              <Link theme="primary" to={to}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="-mr-2 md:hidden" to="/" theme="primary" size="sm">
        Get your ticket
      </Button>

      <Burger
        className={clsx('z-50 hidden md:block', isMobileMenuOpen && 'text-black dark:text-white')}
        isToggled={isMobileMenuOpen}
        onClick={onBurgerClick}
      />
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
